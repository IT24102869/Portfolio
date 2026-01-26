# Generate self-signed SSL certificate for local development
# This script creates a certificate in the certs directory

$certsDir = Join-Path $PSScriptRoot "certs"

# Create certs directory if it doesn't exist
if (-not (Test-Path $certsDir)) {
    New-Item -ItemType Directory -Path $certsDir | Out-Null
    Write-Host "Created certs directory" -ForegroundColor Green
}

$certPath = Join-Path $certsDir "localhost.pfx"
$certPathCrt = Join-Path $certsDir "localhost.crt"
$keyPath = Join-Path $certsDir "localhost.key"

# Check if certificate already exists
if (Test-Path $certPath) {
    Write-Host "Certificate already exists at: $certPath" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (y/n)"
    if ($overwrite -ne "y" -and $overwrite -ne "Y") {
        Write-Host "Certificate generation cancelled." -ForegroundColor Yellow
        exit
    }
}

Write-Host "Generating self-signed certificate..." -ForegroundColor Green

# Generate self-signed certificate
$cert = New-SelfSignedCertificate `
    -Subject "CN=localhost" `
    -DnsName "localhost", "127.0.0.1", "::1" `
    -KeyAlgorithm RSA `
    -KeyLength 2048 `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -NotAfter (Get-Date).AddYears(1) `
    -KeyExportPolicy Exportable `
    -KeyUsage DigitalSignature, KeyEncipherment `
    -Type SSLServerAuthentication

# Export certificate to PFX format (for Node.js/Vite)
$certPassword = ConvertTo-SecureString -String "localhost" -Force -AsPlainText
Export-PfxCertificate `
    -Cert $cert `
    -FilePath $certPath `
    -Password $certPassword | Out-Null

Write-Host "Certificate exported to: $certPath" -ForegroundColor Green

# Try to export as PEM if OpenSSL is available
$opensslPath = Get-Command openssl -ErrorAction SilentlyContinue
if ($opensslPath) {
    Write-Host "OpenSSL found. Exporting certificate as PEM format..." -ForegroundColor Green
    
    # Export certificate to CER format first
    $cerPath = Join-Path $certsDir "localhost.cer"
    Export-Certificate -Cert $cert -FilePath $cerPath -Type CERT | Out-Null
    
    # Convert CER to PEM
    $certPem = "-----BEGIN CERTIFICATE-----`n"
    $certBase64 = [Convert]::ToBase64String($cert.RawData)
    for ($i = 0; $i -lt $certBase64.Length; $i += 64) {
        $certPem += $certBase64.Substring($i, [Math]::Min(64, $certBase64.Length - $i)) + "`n"
    }
    $certPem += "-----END CERTIFICATE-----"
    Set-Content -Path $certPathCrt -Value $certPem -NoNewline
    
    # Extract private key using OpenSSL
    $opensslCmd = "openssl pkcs12 -in `"$certPath`" -nocerts -nodes -out `"$keyPath`" -passin pass:localhost 2>&1"
    $output = Invoke-Expression $opensslCmd
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Private key exported to: $keyPath" -ForegroundColor Green
    }
    
    Remove-Item $cerPath -ErrorAction SilentlyContinue
} else {
    Write-Host ""
    Write-Host "Note: OpenSSL not found. Certificate saved as PFX format only." -ForegroundColor Yellow
    Write-Host "The PFX format will work with Vite on Windows." -ForegroundColor Yellow
    Write-Host "To also generate PEM files, install OpenSSL and run this script again." -ForegroundColor Yellow
}

# Remove certificate from store (optional, keeps store clean)
try {
    $certStore = Get-Item "Cert:\CurrentUser\My\$($cert.Thumbprint)" -ErrorAction Stop
    Remove-Item $certStore -Force | Out-Null
} catch {
    # Certificate might have already been removed
}

Write-Host ""
Write-Host "Certificate generated successfully!" -ForegroundColor Green
Write-Host "  Certificate file: $certPath" -ForegroundColor Cyan
Write-Host "  Certificate password: localhost" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run 'npm run dev' to start the server with HTTPS" -ForegroundColor White
Write-Host "  2. Navigate to https://localhost:5173" -ForegroundColor White
Write-Host "  3. Accept the security warning (this is normal for self-signed certificates)" -ForegroundColor White
