const arrow = document.querySelectorAll(".arrow");
console.log(arrow);
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", function (e) {
    let dropDown = e.target.parentElement.parentElement;
    console.log(dropDown);
    dropDown.classList.toggle("showmenu");
  });
}
