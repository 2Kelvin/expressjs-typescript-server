import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (_req: Request, res:Response) => {
    res.send('Hello from Express and TypeScript')
})

app.listen(port, () => {
    console.log(`Express app running and listening on port ${port}`)
})