import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  getAllNotesSchema,
  createNoteSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const router = Router();

// Всі нотатки
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

// Нотатка по Id
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

// Додати нотатку
router.post('/notes', celebrate(createNoteSchema), createNote);

// Видалити нотатку
router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

// Оновити нотатку
router.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default router;
