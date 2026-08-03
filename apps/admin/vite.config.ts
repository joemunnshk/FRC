import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const cardsDataPath = path.resolve(import.meta.dirname, '../web/src/data/cards.json')
const cardsImageDir = path.resolve(import.meta.dirname, '../web/public/cards')

function readJsonBody(req: import('node:http').IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf-8')))
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

function cardsApi(): Plugin {
  return {
    name: 'cards-api',
    configureServer(server) {
      server.middlewares.use('/api/cards', async (req, res) => {
        if (req.method === 'GET') {
          const contents = await readFile(cardsDataPath, 'utf-8')
          res.setHeader('Content-Type', 'application/json')
          res.end(contents)
          return
        }

        if (req.method === 'PUT') {
          try {
            const parsed = await readJsonBody(req)
            await writeFile(cardsDataPath, JSON.stringify(parsed, null, 2) + '\n')
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

      server.middlewares.use('/api/upload-image', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }

        try {
          const { filename, dataUrl } = await readJsonBody(req)
          const match = /^data:(image\/\w+);base64,(.+)$/.exec(dataUrl)
          if (!match) throw new Error('Invalid image data')

          const ext = match[1].split('/')[1].replace('jpeg', 'jpg')
          const safeBase = path
            .basename(filename, path.extname(filename))
            .toLowerCase()
            .replace(/[^a-z0-9-]+/g, '-')
            .replace(/^-+|-+$/g, '')
          const savedName = `${safeBase || 'card'}-${Date.now()}.${ext}`

          await mkdir(cardsImageDir, { recursive: true })
          await writeFile(path.join(cardsImageDir, savedName), Buffer.from(match[2], 'base64'))

          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true, filename: savedName }))
        } catch {
          res.statusCode = 400
          res.end(JSON.stringify({ ok: false, error: 'Upload failed' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cardsApi()],
})
