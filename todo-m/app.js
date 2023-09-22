const express =  require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const { getAllTodoList, createTodo ,getTodoByID, deleteTodoByID, updateTodoByID} = require('./controller/todo');
const {connectDb} = require('./config/db');
connectDb();
const app = new express();
app.use(bodyParser.json());
app.use(cors())

app.get('/api/v2/todo',getAllTodoList);

app.post('/api/v2/todo',createTodo);

app.get('/api/v2/todo/:id',getTodoByID);

app.put('/api/v2/todo/:id',updateTodoByID);


app.delete('/api/v2/todo/:id',deleteTodoByID);

app.listen(3000, () => {
    console.log("server is running")
})