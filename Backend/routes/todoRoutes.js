import express from 'express';
import { createTodo, getTodo, getTodoById,updateTodoById, toggleTodo,deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

// Create Todo
router.post("/add", createTodo);

// Get Todo
router.get("/", getTodo);

// Get Todo by Id
router.get("/:id", getTodoById);

router.put("/:id", updateTodoById);

router.patch("/:id/toggle", toggleTodo)

router.delete("/:id", deleteTodo)

export default router;