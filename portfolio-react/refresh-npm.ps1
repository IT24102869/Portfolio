# Refresh PATH to include Node.js/npm
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Verify npm is available
Write-Host "Checking npm..." -ForegroundColor Green
npm --version

# Run the command passed as argument, or default to showing help
if ($args.Count -gt 0) {
    Write-Host "Running: npm $($args -join ' ')" -ForegroundColor Green
    npm $args
} else {
    Write-Host "`nUsage: .\refresh-npm.ps1 [npm command]" -ForegroundColor Yellow
    Write-Host "Example: .\refresh-npm.ps1 run dev" -ForegroundColor Yellow
    Write-Host "Example: .\refresh-npm.ps1 install" -ForegroundColor Yellow
}
