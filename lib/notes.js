const fs = require('fs');
const path = require('path');

function findById(id, notes) {
  const result = notes.filter((notes) => notes.id === id)[0];
  return result;
}

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notes }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.name || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }

  return true;
}

function removeNote(id, notes) {
  let note;

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      note = notesArray[i];
      notes.splice(i, 1);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notes }, null, 2)
  );

  return note;
}

module.exports = {
  findById,
  createNewNote,
  validateNote,
  removeNote,
};
