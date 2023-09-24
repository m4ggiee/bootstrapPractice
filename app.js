const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
 
var toggleAlertButton = document.getElementById("toggleAlertButton");
var myAlert = document.getElementById("myAlert");
toggleAlertButton.addEventListener("click", function () {
   if (myAlert.style.display === "none" || myAlert.style.display === "") {
     myAlert.style.display = "block";
   } else {
     myAlert.style.display = "none";
   }
});


var toggleModalButton = document.getElementById("toggleModalButton");
var myModal = document.getElementById("myModal");

toggleModalButton.addEventListener("click", function () {
  if (myModal.style.display === "none" || myModal.style.display === "") {
    myModal.style.display = "block";
  } else {
    myModal.style.display = "none";
  }
});



