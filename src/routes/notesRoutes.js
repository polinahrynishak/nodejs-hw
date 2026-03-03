import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

// Всі нотатки
router.get('/notes', getAllNotes);

// Нотатка по Id
router.get('/notes/:noteId', getNoteById);

// Додати нотатку
router.post('/notes', createNote);

// Видалити нотатку
router.delete('/notes/:noteId', deleteNote);

// Оновити нотатку
router.patch('/notes/:noteId', updateNote);

export default router;
