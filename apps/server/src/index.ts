import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    name: 'Baimo2 API',
    message: 'Hello from Hono'
  })
})

app.get('/api/hello', (c) => {
  return c.json({
    message: 'Hello Baimo2'
  })
})

export default app