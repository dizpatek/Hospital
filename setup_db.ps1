Write-Host "Starting Database Setup..." -ForegroundColor Cyan

# 1. Run Migration
Write-Host "Running Prisma Migration..." -ForegroundColor Yellow
$env:DATABASE_URL = Get-Content .env | Select-String "DATABASE_URL" | ForEach-Object { $_.ToString().Split('=', 2)[1].Trim('"') }
npx prisma migrate dev --name init

if ($LASTEXITCODE -ne 0) {
    Write-Host "Migration Failed!" -ForegroundColor Red
    exit 1
}

# 2. Run Seed
Write-Host "Running Database Seed..." -ForegroundColor Yellow
node prisma/seed.js

if ($LASTEXITCODE -ne 0) {
    Write-Host "Seeding Failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Database Setup Completed Successfully!" -ForegroundColor Green
