const dateElement = document.getElementById("todayDate");

const today = new Date();

const greeting = document.getElementById("greeting");
const currentHour = today.getHours();

if (currentHour < 12){
  greeting.textContent = "Good morning";
} else if ( currentHour < 17){
  greeting.textContent= "Good afternoon"
} else{
  greeting.textContent = "Good Evening";
}

const formattedDate = today.toLocaleDateString("en-IN",{
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
});

dateElement.textContent = formattedDate;


const timetable =[
  {
    day:"Monday",
    subjects:[]
  },
    {
    day:"Tuesday",
    subjects:[]
  },
    {
    day:"Wednesday",
    subjects:[]
  },
    {
    day:"Thursday",
    subjects:[]
  },
    {
    day:"Friday",
    subjects:[]
  },
    {
    day:"Saturday",
    subjects:[]
  },
    {
    day:"Sunday",
    subjects:[]
  }
]

const timetableGrid = document.getElementById("timetableGrid");

if (timetableGrid){

    timetable.forEach(function(day){

    const dayCard = document.createElement("div");
    dayCard.className = "day-card";

    const todayName = today.toLocaleDateString("en-US", {
        weekday:"long"
    });

    if (day.day === todayName){
      dayCard.classList.add("today-card")
    }

    const dayTitle = document.createElement("h3")
    dayTitle.textContent = day.day;

    dayCard.appendChild(dayTitle);

    day.subjects.forEach(function(subject){

      const subjectItem = document.createElement("div");
      subjectItem.className = "subject-item";
      subjectItem.textContent = subject

      dayCard.appendChild(subjectItem)

    });

    const addButton = document.createElement("button");
    addButton.textContent = "+Add subject";
    addButton.className = "add-subject-button";

    addButton.addEventListener("click",function(){
      const subjectName = prompt("Enter a subject:");

      if (subjectName && subjectName.trim() !== ""){
        const newSubject = document.createElement("div");

        newSubject.className = "subject-item";
        newSubject.textContent = subjectName.trim();

        day.subjects.push(subjectName.trim());

        dayCard.insertBefore(newSubject, addButton);
      }
    });

    dayCard.appendChild(addButton)

    timetableGrid.appendChild(dayCard);
  });
}


const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


if (todoInput && addTodoButton && taskList && taskCount){
  
function updateTaskCount() {

    const checkboxes = document.querySelectorAll(".task-checkbox");

    let completed = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            completed++;
        }
    });

    taskCount.textContent =
        completed + " of " + checkboxes.length + " completed";
}

  function addTodo(){
      const taskName = todoInput.value.trim();

          if (taskName === "") {
              return;
          }
  

  const taskItem = document.createElement("label");
  taskItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  const taskText = document.createElement("span");
  taskText.textContent = taskName;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent ="Delete";

  deleteButton.addEventListener("click", function(){
    taskItem.remove();
    updateTaskCount();
  })


  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText)
  taskItem.appendChild(deleteButton)

  taskList.appendChild(taskItem);

  todoInput.value = "";
  updateTaskCount();
}

  addTodoButton.addEventListener("click", addTodo);

  todoInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      addTodo();
    }
  });

  taskList.addEventListener("change", updateTaskCount);

  updateTaskCount();
}




  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay")


if (menuToggle && sidebar && sidebarOverlay){

    menuToggle.addEventListener("click", function(){
    sidebar.classList.toggle("open");
    sidebarOverlay.classList.toggle("active");
  });

  sidebarOverlay.addEventListener("click", function() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
});

}