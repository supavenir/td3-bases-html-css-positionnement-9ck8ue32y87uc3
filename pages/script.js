function activateChaosMode() {
  if (document.body.classList.contains("shake")) return;

  document.body.classList.add("shake", "glitch", "invert");

  document.querySelector('header').classList.add('chaos');

  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('shake');
  });

  let existingWarning = document.getElementById('chaos-warning');
  if (!existingWarning) {
    const warning = document.createElement("div");
    warning.id = 'chaos-warning';
    warning.textContent = "Joyeux Halloween 👻";
    warning.style.position = "fixed";
    warning.style.top = "50%";
    warning.style.left = "50%";
    warning.style.transform = "translate(-50%, -50%)";
    warning.style.fontSize = "3em";
    warning.style.color = "red";
    warning.style.fontWeight = "bold";
    warning.style.zIndex = "9999";
    warning.style.animation = "warningBlink 1s infinite";
    document.body.appendChild(warning);
  }
}

let consoleOpened = false;
const fakeElement = new Image();
Object.defineProperty(fakeElement, 'id', {
  get: function () {
    if (!consoleOpened) {
      activateChaosMode();
      consoleOpened = true;
    }
  }
});
console.log(fakeElement);

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  activateChaosMode();
});
