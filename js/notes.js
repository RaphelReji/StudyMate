
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

    const content = document.createElement("p");
    content.textContent = note.content;

    const actions = document.createElement('div');
    actions.className = "notes-card-actions";


    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "note-edit-button";


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "note-delete-button";


    editButton.addEventListener('click', function(){

      noteTitle.value = note.title;
      noteContent.value = note.content;

      editingNoteld = note.id;

      saveNoteButton.textContent = "Update";
      cancelEditButton.hidden = false;
      editorLabel.textContent = "Edit";

      noteTitle.focus();
    });


    // deleting note


    deleteButton.addEventListener("click", function(){

      notes = notes.filter(function(item){
        return item.id!== note.id;
      });

      saveNotes();
      renderNotes();

      if (editingNotel === note.id){
        clearEditor();
      }

    });

    actions.appendChild(editButton)
    actions.appendChild(deleteButton)


    noteCard.appendChild(title)

    noteCard.appendChild(content)

    noteCard.appendChild(actions)

    notesGrid.appendChild(noteCard);



  });


  if(notes.length === 0){
    emptyNotes.hidden = false;
  }else{
    emptyNotes.hidden = true;
  }
}


// clearing function

function clearEditor(){

  noteTitle.value= "";
  noteContent.value= "";

  editingNoteld = null;

  saveNoteButton.textContent = "Save";

  cancelEditButton.hidden= true;
  editingNoteld.textContent = "New";

}


// saving note


function saveNote(){

  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if ( title ==="" || content ===""){
    alert("Pls enter both a title and your content");
    return
  }


  if (editingNoteld !== null){
    const noteToUpdate = notes.find(function(note){
      return note.id === editingNoteld;
    });

    if (noteToUpdate){
      noteToUpdate.title = title;
      noteToUpdate.content = content;
    }
  }else{

    const newNotes={
      id: Date.now(),
      title: title,
      content:content
    };

    notes.unshift(newNotes);

  }

  saveNote();
  renderNotes();
  clearEditor();

}


saveNoteButton.addEventListener("click", saveNote);
cancelEditButton.addEventListener("click", clearEditor);

renderNotes();