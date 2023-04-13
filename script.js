let btn = document.querySelector(".darkmode");

btn.addEventListener("click", () => {
  if (btn.innerHTML === `<i class="fas fa-moon"></i>`) {
    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.color = "orange";
    btn.style.backgroundColor = "rgb(43, 43, 43)";
    document.body.classList.add("darkmode");
  } else {
    btn.innerHTML = `<i class="fas fa-moon"></i>`;
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    document.body.classList.remove("darkmode");
  }
});



//start js for back to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// end of back to top button