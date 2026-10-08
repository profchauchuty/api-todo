import express from 'express'
import taskRouter from './routes/task.router.js'

const app = express()
app.use(express.json())

// Middleware
app.use((req, res, next) => {
    console.log('--------------------------------')
    console.log(`Request: ${req.method} ${req.url}`)
    console.log('Body:', req.body)
    console.log('IP:', req.ip)
    console.log('--------------------------------')
    next()
})

// Routers
app.use('/tasks', taskRouter)

app.listen(80, () => console.log('http://localhost/tasks'))