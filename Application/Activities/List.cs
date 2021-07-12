using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
       public class Query : IRequest<Result<List<ActivityDto>>> {}

       public class Handler : IRequestHandler<Query, Result<List<ActivityDto>>>
       {
           private readonly DataContext _context;
           private readonly IMapper _mapper;

           public Handler(DataContext context, IMapper mapper)
           {
               _mapper = mapper;
               _context = context;
           }

           public async Task<Result<List<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
           {
               var activities = await _context.Activities
                   .Include(a => a.Attendees)
                   .ThenInclude(u =>u.AppUser)
                   .ToListAsync(cancellationToken: cancellationToken);

               var activitiesToReturn = _mapper.Map<List<ActivityDto>>(activities);
               return Result<List<ActivityDto>>.Success(activitiesToReturn);
           }
       }
    }
}