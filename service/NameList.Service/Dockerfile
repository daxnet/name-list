FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY [".", "."]
RUN dotnet restore "NameList.Service.csproj"
# RUN dotnet build "NameList.Service.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "NameList.Service.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENV ASPNETCORE_URLS="http://*:5000"
CMD ["dotnet", "NameList.Service.dll"]