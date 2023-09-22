const Todo = require('../model/todo');


exports.getAllTodoList = async (req,res) => {
    try {
        const list = await Todo.find();
        return res.status(200).json({
            data : list,
            length : list.length
        })
    }
    catch (error) {
        return res.status(500).json({
            msg : 'Internet server error'
        })
    }
}

exports.createTodo = async (req,res) => {
    try {
        const newTodo = await Todo.create(req.body)
        return res.status(201).json({
            data : newTodo
        })
    }
    catch(error) {
        return res.status(500).json ({
            msg : 'internal server error'
        })
    }
}

exports.getTodoByID = async (req,res) => {
    try  {
        const todo = await Todo.findById(req.params.id);
        if(todo) {
            return res.status(200).json ({
                data :todo
            })
        }
    }
    catch(error) {
        return res.status(500).json ({
            msg : 'not found'
        })
    }

}

exports.deleteTodoByID = async(req,res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(todo){
            await Todo.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                msg:'deleted'
            })
        }
        else{
            return res.status(404).json({
                msg :'not found'
            })
        }
    }
    catch(error) {
        return res.status(500).json ({
            msg : 'not found'
        })
    }

}

exports.updateTodoByID = async (req,res)=> {
    try{
    const todo=await  Todo.findById(req.params.id);
    if(todo)
    {
        await Todo.findByIdAndUpdate(
             req.params.id,{
                title:req.body.title,
                priority:req.body.priority,
                isCompleted:req.body.isCompleted
             });
        return res.status(200).json ({
            data: todo,
            msg : 'updated'
        })
    }
}
catch(error)
{
    return res.status(200).json ({
        msg : 'error'
    })
}
}
