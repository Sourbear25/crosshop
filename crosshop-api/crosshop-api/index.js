import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'crosshop-api' })
})

// Example endpoint (replace with real passport/visa logic later)
app.get('/api/example', (_req, res) => {
  res.json({ message: 'CrossHop API is alive' })
})

app.listen(PORT, () => {
  console.log(`crosshop-api listening on http://localhost:${PORT}`)
})