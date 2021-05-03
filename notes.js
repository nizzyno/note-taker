const fs = require('fs');
const path = require('path');

validate = (note) => {
  if (!note.text || !note.title) {
    return false;
  }
  return true;
};

write = (note, noteArr) => {
  noteArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, 'db/db.json'),
    JSON.stringify({ notes: noteArr }, null, 1)
  );
  return note;
};

// deleteNote = id => {

// }
module.exports = { validate, write };
