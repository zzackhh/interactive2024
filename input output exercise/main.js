document.getElementById("slider").oninput = function() {
  var size = this.value;
  var paragraphs = document.querySelectorAll("#text p");

  
  paragraphs.forEach((p, index) => {
    if (index < size) {
      p.style.display = "block";
      p.style.color = getRandomColor();
    } else {
      p.style.display = "none";
    }
  });
}

// Random Color Generator //
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
