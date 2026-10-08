import express from 'express'
import taskRouter from './routes/task.router.js'

const app = express()
app.use(express.json())

// Routers
app.use('/tasks', taskRouter)

app.listen(80, () => console.log('http://localhost/tasks'))