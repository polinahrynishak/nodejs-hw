import { Router } from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController.js';

const router = Router();

// Всі нотатки
router.get('/notes', getAllNotes);

// Нотатка по Id
router.get('/notes/:noteId', getNoteById);

export default router;
