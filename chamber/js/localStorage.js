// initialize display elements
/*const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();*/

const displayVisits = document.querySelector(".total");
const displayTime = document.querySelector(".time");

let numVisits = Number(window.localStorage.getItem("visits"));

if (numVisits !== 0) {
  displayVisits.textContent = numVisits;

} else {
  displayVisits.textContent = "This is your first visit!";
};

numVisits++;
localStorage.setItem("visits", numVisits);

const lastVisitedAt =  Date.now();
console.log(lastVisitedAt)

displayTime.textContent = Math.round((lastVisitedAt - Number(localStorage.getItem("lastVisitedAt"))) / 86400000);

localStorage.setItem("lastVisitedAt", lastVisitedAt);



