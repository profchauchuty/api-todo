
import TaskService from './../services/TaskService.js'

class TaskController {

    static getAll(req, res){
        const result = TaskService.getAll()

        res.json({
            status: 200,
            message: 'Lista de Tarefas',
            data: result
        })
    }

    static create(req, res){
        const data = req.body

        const result = TaskService.create(data)

        if(!result){
            return res.json({
                status: 400,
                message: 'Dados Inválidos'
            })
        }

        return res.json({
            status: 201,
            message: 'Tarefa criada com sucesso',
            data: result
        })
    }
}

export default TaskController