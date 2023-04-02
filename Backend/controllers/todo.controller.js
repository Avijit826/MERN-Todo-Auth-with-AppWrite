const Todo = require('../models/todo.model')

const getTodos = (req, res) => {
    Todo.find({
      user: req.user.id // From User Auth
    })
      .sort({ updatedAt: -1 })
      .then((todo) => {
        res.json(todo)
      })
      .catch((err) =>
        res.status(404).json({ message: "no todo found", error: err.message })
      )
  }
  const createTodo = (req, res) => {
    req.body.user = req.user.id
    Todo.create(req.body)
      .then((data) => {
        res.json({ message: "todo added successfully", data })
      })
      .catch((err) =>
        res.status(400).json({
          message: "unable to add new todo",
          error: err.message,
        })
      )
  }
  const updateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        res.json({ message: "updated successfully", data })
      })
      .catch((err) =>
        res
          .status(400)
          .json({ error: "unable to update todo", message: err.message })
      )
  }
  
  const deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
      .then((data) =>
        data
          ? res.json({ message: "todo deleted successfully", data })
          : res
              .status(404)
              .json({ message: "Todo Not Found", error: "No todo on such id" })
      )
      .catch((err) =>
        res.status(400).json({ error: "Bad Request", message: err.message })
      )
  }
  
  // -----------------Tasks Controllers -----------------
  
  const getTasks = (req, res) => {
    Todo.findById(req.params.id)
      .then((todo) => {
        res.json(todo.tasks)
      })
      .catch((err) =>
        res.status(404).json({ message: "no todo found", error: err.message })
      )
  }
  
  const addTask = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.tasks.push(req.body)
    const saveTodo = await todo.save()
    res.json(saveTodo)
  }
  
  const updateTask = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    const { task } = req.body
    const taskIndex = todo.tasks.findIndex((t) => t.id === req.params.taskId)
    todo.tasks[taskIndex].task = task
    const saveTodo = await todo.save()
    res.json(saveTodo)
  }
  const updateTaskStatus = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    const { iscompleted } = req.body
    const taskIndex = todo.tasks.findIndex((t) => t.id === req.params.taskId)
    todo.tasks[taskIndex].iscompleted = iscompleted
    const saveTodo = await todo.save()
    res.json(saveTodo)
  }
  
  const deleteTask = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    const taskIndex = todo.tasks.findIndex((t) => t.id === req.params.taskId)
    todo.tasks.splice(taskIndex, 1)
    const saveTodo = await todo.save()
    res.json(saveTodo)
  }
  
  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTasks,
    addTask,
    updateTask,
    updateTaskStatus,
    deleteTask

}