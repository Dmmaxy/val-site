const noBtn = document.getElementById("noBtn");
const pleadText = document.getElementById("pleadText");
const yesBtn = document.getElementById("yesBtn");
const fireworks = document.getElementById("fireworks");

const funnyPleading = [
  "😭 Please Honey-Ta!",
  "😢 My heart can’t take this!",
  "🥺 I even made a website!",
  "🐶 Look at this sad puppy face!",
  "💘 I promise unlimited love!",
  "😂 Come on, don’t click NO!"
];

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250;
  const y = Math.random() * 60;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  const randomText = funnyPleading[Math.floor(Math.random() * funnyPleading.length)];
  pleadText.textContent = randomText;
});

// YES button fireworks
yesBtn.addEventListener("click", () => {
  pleadText.textContent = "🎉 SHE SAID YES!!! 🎉💖💖💖";

  for (let i = 0; i < 30; i++) {
    createFirework();
  }
});

function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";

  firework.style.left = Math.random() * window.innerWidth + "px";
  firework.style.top = Math.random() * window.innerHeight + "px";
  firework.style.backgroundColor =
    `hsl(${Math.random() * 360}, 100%, 50%)`;

  document.body.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000);
}
