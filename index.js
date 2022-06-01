const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const notesModel = new NotesModel;
const notesView = new NotesView(notesModel);
notesModel.addNote(`Yo Yo Yo it's me again, HOP bad boy`)
notesView.displayNotes();

console.log('The notes app is running');