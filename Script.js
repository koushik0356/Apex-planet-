const images = [
  "C:\\Users\\immid\\Downloads\\wallpaperflare.com_wallpaper (2).jpg",
  "C:\\Users\\immid\\Downloads\\wallpaperflare.com_wallpaper (1).jpg",
  "C:\\Users\\immid\\Downloads\\wallpaperflare.com_wallpaper.jpg",
  "C:\\Users\\immid\\Downloads\\download.jpg"
];
let index = 0;
const imgEl = document.getElementById("carousel-image");

document.getElementById("next-btn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  imgEl.src = images[index];
});

document.getElementById("prev-btn").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  imgEl.src = images[index];
});

// 🧠 Quiz Section
const quizData = [
  { 
    q: "Which company currently supplies engines to Red Bull Racing?", 
    options: ["Mercedes", "Ferrari", "Honda", "Renault"], 
    answer: "Honda" 
  },
  { 
    q: "Who holds the record for the most Formula 1 World Championships?", 
    options: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Max Verstappen"], 
    answer: "Lewis Hamilton" 
  },
  { 
    q: "Which team is based in Maranello, Italy?", 
    options: ["McLaren", "Ferrari", "Aston Martin", "Williams"], 
    answer: "Ferrari" 
  },
  { 
    q: "In Formula 1, what does DRS stand for?", 
    options: ["Dynamic Racing System", "Drag Reduction System", "Driver Reaction Speed", "Downforce Regulation Setup"], 
    answer: "Drag Reduction System" 
  },
  { 
    q: "Which circuit hosts the Monaco Grand Prix?", 
    options: ["Monza", "Silverstone", "Monte Carlo", "Spa-Francorchamps"], 
    answer: "Monte Carlo" 
  },
  { 
    q: "What color flag indicates the end of a Formula 1 race?", 
    options: ["Yellow", "Red", "Green", "Checkered"], 
    answer: "Checkered" 
  }
];


let current = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-question");

function loadQuestion() {
  const q = quizData[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (opt === q.answer) {
        btn.style.background = "#4cd137";
      } else {
        btn.style.background = "#e84118";
      }
      setTimeout(() => loadNext(), 600);
    };
    optionsEl.appendChild(btn);
  });
}
function loadNext() {
  current = (current + 1) % quizData.length;
  loadQuestion();
}
nextBtn.addEventListener("click", loadNext);
loadQuestion();

// 🌦️ Fetch Weather API
document.getElementById("fetchWeather").addEventListener("click", async () => {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true");
  const data = await response.json();
  const w = data.current_weather;
  document.getElementById("weatherResult").innerHTML = `
    <p>🌡️ <strong>Temperature:</strong> ${w.temperature}°C</p>
    <p>💨 <strong>Wind Speed:</strong> ${w.windspeed} km/h</p>
    <p>⏱️ <strong>Time:</strong> ${w.time}</p>
  `;
});
