console.log("Forever Beauty script connected");

// Select elements from the DOM
const infoBtns = document.querySelectorAll(".info-btn");
const popups = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".close-btn");
const bookBtns = document.querySelectorAll(".book-btn");
const cardTitles = document.querySelectorAll(".tcard h3");
const subjectInput = document.getElementById("subject");

// Open the pop-up that matches the button index in the list
// Loop through buttons and add a click event listener
for (let i = 0; i < infoBtns.length; i++) {
  infoBtns[i].addEventListener("click", function () {
    //make the popup visible by styling the element
    popups[i].style.display = "flex"; // using flex here overrides display: none; in the css
  });
}

//Close popup function
function closePopup(num) {
  popups[num].style.display = "none"; // Hide the pop-up by setting display back to none
}

// Close the pop-up via X
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function () {
    // Hide the pop-up by calling closePopup function
    closePopup(i);
  });
}

// Close the pop-up via Book and put the treatment name in the Subject box
function bookTreatment(num) {
  // Hide the pop-up by calling closePopup function
  closePopup(num);
  subjectInput.value = cardTitles[num].textContent; //reads the text inside the card’s h3
}

for (let i = 0; i < bookBtns.length; i++) {
  bookBtns[i].addEventListener("click", function () {
    bookTreatment(i);
  });
}