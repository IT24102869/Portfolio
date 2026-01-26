import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
    https: (() => {
      const certPath = path.resolve(__dirname, 'certs/localhost.pfx')
      const keyPath = path.resolve(__dirname, 'certs/localhost.key')
      const certPathPem = path.resolve(__dirname, 'certs/localhost.crt')

      // Check if certificate files exist
      if (fs.existsSync(certPath)) {
        // Use PFX format (Windows/Node.js)
        return {
          pfx: fs.readFileSync(certPath),
          passphrase: 'localhost'
        }
      } else if (fs.existsSync(certPathPem) && fs.existsSync(keyPath)) {
        // Use PEM format (Linux/Mac with OpenSSL)
        return {
          cert: fs.readFileSync(certPathPem),
          key: fs.readFileSync(keyPath)
        }
      } else {
        // No certificate found, use HTTP
        console.warn('⚠️  SSL certificate not found. Running without HTTPS.')
        console.warn('   Run "npm run generate-cert" to create a certificate.')
        return false
      }
    })()
  }
})
