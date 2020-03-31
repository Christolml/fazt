const { Router } = require('express');
const router = Router();

const { renderNoteForm, createNewNote, renderNotes, renderUpdateForm, updateNote, deleteNote } = require('../controllers/notes.controllers'); 

const { isAuthenticated } = require('../helpers/auth');

// New Note
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

// Get all note
router.get('/notes', isAuthenticated, renderNotes);

// Update notes
router.get('/notes/update/:id', isAuthenticated, renderUpdateForm);

router.put('/notes/update/:id', isAuthenticated, updateNote);

// Delete notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;