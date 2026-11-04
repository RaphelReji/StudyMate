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
    subjects:["Maths", "English", "Physics"]
  },
    {
    day:"Tuesday",
    subjects:["Chemistry", "English", "Physics"]
  },
    {
    day:"Wednesday",
    subjects:["Biology", "English", "Physics"]
  },
    {
    day:"Thursday",
    subjects:["Computer Science", "English", "Physics"]
  },
    {
    day:"Friday",
    subjects:["Chemistry", "English", "Physics"]
  },
    {
    day:"Saturday",
    subjects:["Maths", "English", "Physics"]
  },
    {
    day:"Sunday",
    subjects:["Revision", "English", "Physics"]
  }
]

const timetableGrid = document.getElementById("timetableGrid");

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
