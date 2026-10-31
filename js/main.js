const dateElement = document.getElementById("todayDate");

const today = new Date();

const formattedDate = today.toLocaleDateString("en-IN",{
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
});

dateElement.textContent = formattedDate;
