import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteDataPath = path.resolve(import.meta.dirname, '../web/src/data/site.json')

function siteDataApi(): Plugin {
  return {
    name: 'site-data-api',
    configureServer(server) {
      server.middlewares.use('/api/site', async (req, res) => {
        if (req.method === 'GET') {
          const contents = await readFile(siteDataPath, 'utf-8')
          res.setHeader('Content-Type', 'application/json')
          res.end(contents)
          return
        }

        if (req.method === 'PUT') {
          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk)
          const body = Buffer.concat(chunks).toString('utf-8')

          try {
            const parsed = JSON.parse(body)
            await writeFile(siteDataPath, JSON.stringify(parsed, null, 2) + '\n')
            res.statusCode = 200
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.statusCode = 400
            res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }))
          }
          return
        }

        res.statusCode = 405
        res.end('Method not allowed')
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteDataApi()],
})
