using Microsoft.EntityFrameworkCore;
using Totvs.Domain.Entities;

namespace Totvs.Data.DbContext;

public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed opcional
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Notebook", Price = 4500m, StockQuantity = 5, Active = true },
            new Product { Id = 2, Name = "Mouse Gamer", Price = 120m, StockQuantity = 20, Active = true }
        );
    }
}