using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class UpdateAttendance
    {
       public class Command : IRequest<Result<Unit>>
       {
           public Guid Id { get; set; }
       }

       public class Handler: IRequestHandler<Command, Result<Unit>>
       {
           private readonly DataContext _dataContext;
           private readonly IUserAccessor _userAccessor;

           public Handler(DataContext dataContext, IUserAccessor userAccessor)
           {
               _userAccessor = userAccessor;
               _dataContext = dataContext;
           }
           public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
           {
               // Find the activity that the user is going to attend
               var activity = await _dataContext.Activities
                   .Include(a => a.Attendees)
                   .ThenInclude(u => u.AppUser)
                   .SingleOrDefaultAsync(x => x.Id == request.Id);
               
               
               // If the activity is not exist then return null
               if (activity == null) return null;
               
               // Get the user from the database. The FirstOrDefaultAsync will return null if no user is found
               var user = await _dataContext.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
               
               // If the user is not exist then return null
               if (user == null) return null;
               
               // Find the username of the host of the activity 
               var hostUserName = activity.Attendees.FirstOrDefault(x => x.IsHost)?.AppUser?.UserName;
               
               // Check if the user already in the list of attendees, means the user already attend this activity
               var attendance = activity.Attendees.FirstOrDefault(x => x.AppUser.UserName == user.UserName);
               
               
               // If the user already attended the activity and the user is the host of the activity then set IsCancelled to true, cancel the activity 
               if (attendance != null && hostUserName == user.UserName)
               {
                   activity.IsCancelled = !activity.IsCancelled;
               }
                
               // If the user already attended the activity and the user is not the host of the activity then remove the user from the attendees
               if (attendance != null && hostUserName != user.UserName)
               {
                   activity.Attendees.Remove(attendance);
               }
               
               // If the user has not attended this activity then create a new ActivityAttendee and then add the user to the Attendees list.
               if (attendance == null)
               {
                   attendance = new ActivityAttendee
                   {
                       AppUser = user,
                       Activity = activity,
                       IsHost = false
                   };
                   
                   activity.Attendees.Add(attendance);
               }
               
               // Save the change to the database.
               var result = await _dataContext.SaveChangesAsync() > 0;
               
               // Return result
               return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Problem updating attendance");
           }
       }
    }
}