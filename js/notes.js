
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const saveNoteButton = document.getElementById("saveNoteButton");
const cancelEditButton = document.getElementById("cancelEditButton");

const notesGrid = document.getElementById("notesGrid");
const emptyNotes = document.getElementById("emptyNotes");
const editorLabel = document.getElementById("editorLabel");

//loading the note saved in LS

let notes = JSON.parse(localStorage.getItem("studymateNotes")) || [];

let editingNoteld = null;

// SAVIING NOTE IN LS

function saveNotes(){
  localStorage.setItem("studymateNotes", JSON.stringify(notes));
}

//display notes on card

function renderNotes(){

  notesGrid.innerHTML= "";

  notes.forEach(function(note){

    const noteCard = document.createElement("article");
    noteContent.className = "note-card";

    const title = document.createElement("h3");
    title.textContent = note.title;


  })
}