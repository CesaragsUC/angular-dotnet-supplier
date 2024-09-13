using Asp.Versioning.ApiExplorer;
using DevIO.Api.Configuration;
using DevIO.API.Configuration;
using DevIO.Data.Context;
using Microsoft.EntityFrameworkCore;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    //Add support to logging with SERILOG
    builder.Services.AddSerilog();

    Log.Information("Starting web application");

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    builder.Services.AddDbContext<MeuDbContext>(options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
    });

    builder.Services.AddIdentityConfiguration(builder.Configuration);
    builder.Services.AddAutoMapper(typeof(Program));
    builder.Services.WebApiConfig();
    builder.Services.AddSwaggerConfig();
    builder.Services.ResolveDependencies();


    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseMvcConfiguration();

    app.UseSwaggerConfig(app.Services.GetRequiredService<IApiVersionDescriptionProvider>());

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.Run();

}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.Information("Server Shutting down...");
    Log.CloseAndFlush();
}

