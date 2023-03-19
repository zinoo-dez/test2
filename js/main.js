let bars = document.querySelector("#bars");
let nav_links = document.querySelector(".nav-links");
bars.addEventListener("click", function () {
  //   alert("hello");
  nav_links.classList.toggle("show");
  console.log(window.location.origin);
  let url = window.location.origin;
  if (this.src === `${url}/img/bar.svg`) {
    this.src = `${url}/img/cross.svg`;
    // console.log(this.src);
  } else {
    this.src = `${url}/img/bar.svg`;
    // console.log(this.src);
  }
});
