document.body.onkeydown = function(keypress_event) {
  var key = keypress_event.key.toLowerCase();
  
  document.body.style = "";
  document.body.innerHTML = "";

  if (key === "a") {
    document.body.style.backgroundColor = "pink";
  } else if (key === "b") {
    let img = document.createElement("img");
    img.src = "https://hookagency.com/wp-content/uploads/2024/08/hide-the-pain-harold-stock-photo.jpg";
    img.style.width = "300px";
    document.body.appendChild(img);
  } else if (key === "c") {
    let cText = document.createElement("div");
    cText.innerHTML = "C";
    cText.style.fontSize = "100px";
    cText.style.color = "green";
    document.body.appendChild(cText);
  } else if (key === "d") {
    document.body.style.backgroundColor = "yellow";
  } else if (key === "e") {
    let img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PXp-r56xISrCJiB20RO_ADalWjJhKH5VFA&s";
    img.style.width = "300px";
    document.body.appendChild(img);
  } else if (key === "f") {
    document.body.style.backgroundColor = "lightpurple";
  } else if (key === "g") {
    document.body.style.fontSize = "10px";
  } else if (key === "h") {
    let img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/60/0b/8a/600b8a55c715a7b7b0cc314eefa8c1df.jpg";
    img.style.width = "300px";
    document.body.appendChild(img);
  } else if (key === "i") {
    document.body.style.backgroundColor = "black";
  } else if (key === "j") {
    document.body.style.backgroundColor = "magenta";
  } else if (key === "k") {
    let img = document.createElement("img");
    img.src = "https://thumbs.dreamstime.com/b/senior-chef-whisking-egg-kitchen-white-background-208472694.jpg";
    img.style.width = "300px";
    document.body.appendChild(img);
  } else if (key === "l") {
    document.body.style.backgroundColor = "lightorange";
  } else if (key === "m") {
    document.body.style.background = "linear-gradient(lightblue, darkblue)";
  } else if (key === "n") {
    document.body.style.backgroundColor = "gray";
    let helloText = document.createElement("div");
    helloText.innerHTML = "Hello";
    helloText.style.fontSize = "50px";
    helloText.style.position = "absolute";
    helloText.style.top = "50%";
    helloText.style.left = "50%";
    helloText.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(helloText);
  } else if (key === "o") {
    document.body.style.backgroundColor = "indigo";
  } else if (key === "p") {
    document.body.style.backgroundColor = "lightpink";
  } else if (key === "q") {
    document.body.style.fontFamily = "Comic Sans MS";
    document.body.style.fontSize = "50px";
  } else if (key === "r") {
    document.body.style.backgroundColor = "purple";
  } else if (key === "s") {
    let img = document.createElement("img");
    img.src = "https://t4.ftcdn.net/jpg/04/07/73/91/360_F_407739154_jiDUMKxaBjVUER7wplCn3kCxxkDTjeWJ.jpg";
    img.style.width = "300px";
    document.body.appendChild(img);
  } else if (key === "t") {
    document.body.style.background = "linear-gradient(black, white)";
  } else if (key === "u") {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontSize = "20px";
    document.body.style.transform = "rotate(90deg)";
  } else if (key === "v") {
    document.body.style.backgroundColor = "black";
  } else if (key === "w") {
    document.body.style.backgroundImage = "url('https://jonsatrom.wordpress.com/wp-content/uploads/2012/03/bbl-01.gif')";
    document.body.style.backgroundSize = "cover";
  } else if (key === "x") {
    document.body.style.backgroundColor = "yellow";
  } else if (key === "y") {
    document.body.style.backgroundColor = "darkblue";
  } else if (key === "z") {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    let defaultText = document.createElement("div");
    defaultText.style.fontSize = "30px";
    defaultText.style.color = "black";
    document.body.appendChild(defaultText);
  }
};
