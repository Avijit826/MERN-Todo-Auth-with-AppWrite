const express = require("express")
const auth = require("../config/auth")
const router = express.Router()

const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getTasks,
    addTask,
    updateTask,
    updateTaskStatus,
    deleteTask
} = require('../controllers/todo.controller')

router.get('/', auth, getTodos)
router.post('/', auth, createTodo)
router.put("/:id", auth, updateTodo)
router.delete("/:id", auth, deleteTodo)

router.get("/:id/tasks", auth, getTasks)
router.post("/:id/tasks", auth, addTask)
router.put("/:id/tasks/:taskId", auth, updateTask)
router.put("/:id/task/:taskId", auth, updateTaskStatus)
router.delete("/:id/tasks/:taskId", auth, deleteTask)

module.exports = router