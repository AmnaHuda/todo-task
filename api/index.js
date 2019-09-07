const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const Schema = mongoose.Schema;
// Create Schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });

const Todo = mongoose.model('todos', TodoSchema)

const app = express()
app.use(bodyparser.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/todoList1', { useNewUrlParser: true, useFindAndModify: false },(err) => {
    console.log('Error:', err)
  }).then(() => {
    console.log("Connected with MongoDb")
    mongoose.connection.models = {}
}).catch((err) => {
    console.log("Error:", err)
});

app.post('/todo-item', (req, res) => {
    console.log('/todo-item', req.body)
    const TodoItem = new Todo({
        title: req.body.title,
        description: req.body.description,
        isDone: req.body.isDone
    })
    TodoItem.save().then((doc) => {
        res.status(200).json({ doc: doc.toJSON() })
    })
})

app.get('/todo-item', (req, res) => {
    Todo.find({}, (err, docs) => {
        let todos = []
        docs.forEach((doc) => {
            todos.push(doc.toJSON())
        })
        res.status(200).json({ todos })
    })
})
app.post('/update-todo-item', (req, res) => {
    Todo.findByIdAndUpdate(req.body.id, { isDone: req.body.checked }, (err, doc) => {
        if(err) {
            console.log("error")
        } 
        res.status(200).send('Updated')
    })
})

////////// DELETE ITEM /////////

app.delete('/delete-todo-item' , (req, res)=>{

    let id = req.query.id;

    Todo.findByIdAndDelete(id, (err, doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)

    })
})

app.listen(5000, () => {
    console.log("Server Running on 5000")
})