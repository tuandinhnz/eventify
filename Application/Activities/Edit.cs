using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
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
            private readonly IMapper _mapper;

            public Handler(DataContext dataContext, IMapper mapper)
            {
                _mapper = mapper;
                _dataContext = dataContext;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activityDb = await _dataContext.Activities.FindAsync(request.Activity.Id);
                if (activityDb == null) return null;

                _mapper.Map(request.Activity, activityDb); 
                
                var result = await _dataContext.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Faied to edit the activity"); 
                return Result<Unit>.Success(Unit.Value);
            }

            
        }
    }
}