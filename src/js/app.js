new Pageable(".pg-container", {
  infinite: false,
});

function myFunction() {
  var x = document.getElementById("burger");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
