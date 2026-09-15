import express from "express";
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/hello', (_req, res) => {
  res.json({
    message: 'Hello from server!',
  })
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})