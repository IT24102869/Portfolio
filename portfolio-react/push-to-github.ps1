# Script to push portfolio to GitHub repository
# Make sure Git is installed before running this script

Write-Host "Initializing Git repository..." -ForegroundColor Green

# Navigate to project directory
Set-Location $PSScriptRoot

# Initialize git repository if not already initialized
if (-not (Test-Path .git)) {
    git init
    Write-Host "Git repository initialized." -ForegroundColor Green
} else {
    Write-Host "Git repository already initialized." -ForegroundColor Yellow
}

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Adding remote repository..." -ForegroundColor Green
    git remote add origin https://github.com/IT24102869/Portfolio.git
} else {
    Write-Host "Remote already exists. Updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/IT24102869/Portfolio.git
}

# Add all files
Write-Host "Adding files..." -ForegroundColor Green
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Initial commit: Portfolio website"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
Write-Host "Note: You may be prompted for your GitHub credentials." -ForegroundColor Yellow
git push -u origin main

# If main branch doesn't exist, try master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Trying 'master' branch instead..." -ForegroundColor Yellow
    git push -u origin master
}

Write-Host "Done! Your portfolio has been pushed to GitHub." -ForegroundColor Green
