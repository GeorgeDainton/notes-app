/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')


describe('Notes View', () => {

  it('Shows a list of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html')
    //mocking the page
    const notesModel = new NotesModel
    notesModel.addNote('Hello')
    notesModel.addNote('Goodbye')
    const notesView = new NotesView(notesModel);
    notesView.displayNotes();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector('#new-note');
    const buttonEl = document.querySelector('#submit-note');
    inputEl.value = 'This is a new test note';
    buttonEl.click();

    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('This is a new test note')
    expect(document.querySelectorAll('div.note').length).toEqual(1)

  });

});