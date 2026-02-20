import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const server = await createServer({
  configFile: false,
  root: __dirname,
  plugins: [react()],
  server: { port: 5173, host: true, open: true }
})
await server.listen()
server.printUrls()
