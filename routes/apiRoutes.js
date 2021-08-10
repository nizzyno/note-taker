const router = require('express').Router();
const {
  findById,
  createNewNote,
  validateNote,
  removeNote,
} = require('../lib/notes.js');
const { notes } = require('../db/db.json');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.get('/notes:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete('/notes/:id', (req, res) => {
  note = removeNote(req.params.id, notes);
  res.json(note);
});

module.exports = router;
