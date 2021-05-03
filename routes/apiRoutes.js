const router = require('express').Router();
let { notes } = require('../db/db.json');
const uniqid = require('uniqid');
const { write } = require('../../notes');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = uniqid();

  res.json(write(req.body, notes));
});

module.exports = router;
