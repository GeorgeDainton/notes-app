/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')


describe('Notes View', () => {

  const mockModel = {
    getNotes: () => ["1", "2"]
  }
  it('Shows a list of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    //mocking the page
    const notesView = new NotesView(mockModel);
    notesView.displayNotes();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});