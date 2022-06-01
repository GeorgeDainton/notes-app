class NotesView {
  constructor(notesModel) {
    this.model = notesModel;
    this.mainContainerElement = document.querySelector('#main-container');

    document.querySelector('#submit-note').addEventListener('click', () => {
      const newNote = document.querySelector('#new-note').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.innerText = note;
      noteElement.className = 'note';
      this.mainContainerElement.append(noteElement);
    });


  }
  }



module.exports = NotesView;