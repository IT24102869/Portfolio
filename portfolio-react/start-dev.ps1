# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Navigate to project directory
Set-Location $PSScriptRoot

# Start dev server
Write-Host "Starting Vite dev server..." -ForegroundColor Green
npm run dev
