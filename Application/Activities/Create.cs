using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain;
using FluentValidation;
using FluentValidation.AspNetCore;
using FluentValidation.Validators;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Create
    {

        public class Command : IRequest<Result<Unit>>
        {
            public Activity Activity { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Activity).SetValidator(new ActivityValidator());
            }
        }
        
        public class Handler : IRequestHandler<Command, Result<Unit>>
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
                //Get the current logged in user
                var user = await _dataContext.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                
                //create the attendee
                var attendee = new ActivityAttendee
                {
                    AppUser = user,
                    Activity = request.Activity,
                    IsHost = true,
                };
                
                //Add the attendee to the list of attendees
                request.Activity.Attendees.Add(attendee);
                
                /*The add method only tells Entity Framework to keep track of a new activity in the memory. It does not add
                the new activity to the database yet. The SaveChangesAsync command will add the new activity to the database */
                _dataContext.Activities.Add(request.Activity);
                 var result = await _dataContext.SaveChangesAsync() > 0;

                 if (!result) return Result<Unit>.Failure("Failed to create activity");
                 /* return Unit.Value is equivalent to return nothing. It is just a way to let the controller know that 
                 the operation has completed */
                 return Result<Unit>.Success(Unit.Value);
            }
            
        }
        
    }
}