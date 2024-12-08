document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(to bottom, #ffe6f0, #fff5f8)";
document.body.style.display = "flex";
document.body.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.position = "relative";


const dancer = document.createElement("div");
dancer.innerHTML = "💃";
dancer.style.fontSize = "100px";
dancer.style.position = "absolute";
dancer.style.top = "50%";
dancer.style.left = "50%";
dancer.style.transform = "translate(-50%, -50%)";
dancer.style.transition = "all 0.3s ease-in-out";
document.body.appendChild(dancer);

const discoBall = document.createElement("div");
discoBall.innerHTML = "🪩";
discoBall.style.fontSize = "100px";
discoBall.style.position = "absolute";
discoBall.style.top = "10%";
discoBall.style.left = "50%";
discoBall.style.transform = "translate(-50%, -50%)";
discoBall.style.opacity = "0";
discoBall.style.transition = "opacity 0.5s ease-in-out";
document.body.appendChild(discoBall);


let x = 50; 
let y = 50; 

document.body.onkeydown = function (event) {
  const key = event.key.toLowerCase();

  
  dancer.style.animation = "";
  document.body.style.background = "linear-gradient(to bottom, #ffe6f0, #fff5f8)";
  discoBall.style.opacity = "0";

  switch (key) {
    case "w": 
      y = Math.max(5, y - 5);
      break;
    case "s": 
      y = Math.min(95, y + 5);
      break;
    case "a": 
      x = Math.max(5, x - 5);
      dancer.style.transform += " scaleX(-1)"; // 
      break;
    case "d": 
      x = Math.min(95, x + 5);
      dancer.style.transform += " scaleX(1)"; // 
      break;
    case "r": // 
    case "t": // 
    case "y": // 
      startDisco();
      break;
    default: // 
      dancer.style.animation = "mini-dance 1.5s infinite";
      break;
  }

  // Apply movement
  dancer.style.top = `${y}%`;
  dancer.style.left = `${x}%`;
};

function startDisco() {
  document.body.style.background = `
    linear-gradient(90deg, #ff0080, #ff8c00, #ff0, #0f0, #0ff, #00f, #8000ff, #ff0080)`;
  document.body.style.backgroundSize = "400% 400%";
  document.body.style.animation = "disco-bg 3s infinite";

  discoBall.style.opacity = "1";


  dancer.style.animation = "cute-bounce 1s infinite";
}

const style = document.createElement("style");
style.innerHTML = `
  @keyframes cute-bounce {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -55%) scale(1.1); }
  }

  @keyframes mini-dance {
    0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
    25% { transform: translate(-48%, -52%) scale(1.1) rotate(-10deg); }
    50% { transform: translate(-50%, -55%) scale(1.2) rotate(10deg); }
    75% { transform: translate(-52%, -52%) scale(1.1) rotate(-10deg); }
  }

  @keyframes disco-bg {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);
