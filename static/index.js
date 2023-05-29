function myFunction() {
    var dots = document.getElementById("b2-p1");
    var moreText = document.getElementById("b2-content1");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } 
}

