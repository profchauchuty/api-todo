import { Router } from 'express'
import TaskController from '../controllers/task.controller.js'

const taskRouter = Router()

taskRouter.get('/', TaskController.getAll)
taskRouter.post('/create', TaskController.create)

export default taskRouter