class notesView {
  constructor(notesModel) {
    this.model = notesModel
    this.mainContainerElement = document.querySelector('#main-container')
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

module.exports = notesView;