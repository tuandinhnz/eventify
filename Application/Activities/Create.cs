using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {

        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        } 
        
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                /*The add method only tells Entity Framework to keep track of a new activity in the memory. It does not add
                the new activity to the database yet. The SaveChangesAsync command will add the new activity to the database */
                _dataContext.Activities.Add(request.Activity);
                 await _dataContext.SaveChangesAsync();
                 /* return Unit.Value is equivalent to return nothing. It is just a way to let the controller know that 
                 the operation has completed */
                 return Unit.Value;
            }
            
        }
        
    }
}