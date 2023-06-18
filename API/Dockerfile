# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/sdk:5.0 as build-env
WORKDIR /app
COPY /API/*.csproj .
COPY /Application/*.csproj .
COPY /Domain/*.csproj .
COPY /Infrastructure/*.csproj .
COPY /Persistence/*.csproj .
RUN dotnet restore API.csproj
RUN dotnet restore Application.csproj
RUN dotnet restore Domain.csproj
RUN dotnet restore Infrastructure.csproj
RUN dotnet restore Persistence.csproj
COPY . .
RUN dotnet publish /app/API -c Release -o publish
RUN dotnet publish /app/Application -c Release -o publish
RUN dotnet publish /app/Domain -c Release -o publish
RUN dotnet publish /app/Infrastructure -c Release -o publish
RUN dotnet publish /app/Persistence -c Release -o publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0 as runtime
WORKDIR /publish
COPY --from=build-env /app/API/wwwroot ./wwwroot
COPY --from=build-env /app/API/bin/Release/net5.0 .
COPY --from=build-env /app/Application/bin/Release/net5.0 .
COPY --from=build-env /app/Domain/bin/Release/net5.0 .
COPY --from=build-env /app/Infrastructure/bin/Release/net5.0 .
COPY --from=build-env /app/Persistence/bin/Release/net5.0 .
ENV APSNETCORE_ENVIRONMENT="Production"
ENV DATABASE_URL="Server=galaxy-dev-database.culvc7phnaos.ap-southeast-2.rds.amazonaws.com;Port=5432;User Id=postgres;Password=Hoian231987$;Database=eventify; SSL Mode=Require; Trust Server Certificate=true"
EXPOSE 80
ENTRYPOINT ["dotnet", "API.dll"]
