import db from './../database/db.js'

class TaskService {

    static getAll(){
        return db.tasks
    }

    static create(task){
        if(!task){
            return null
        }

        let id = db.tasks.length + 1

        db.tasks.push({
            id: id,
            ...task
        })
        
        return id
    }
}

export default TaskService