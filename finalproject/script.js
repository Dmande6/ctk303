function openTab(evt, tabName){
   
let tabcontent = document.querySelectorAll('.tabcontent');
let tabs = document.querySelectorAll('.tab');

tabcontent.forEach(section => section.classList.remove('active'));
tabs.forEach(btn => btn.classList.remove('active'));

document.getElementById(tabName).classList.add('active');
evt.currentTarget.classList.add('active');
}
document.querySelectorAll(".villain").forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("show-desc");
});
});
document.querySelectorAll(".contact").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("show");
  });
});


function openconfidentialcontent(evt) {

  const password = "ALFREDDABUTTLER";

  const title = document.getElementById("confidentialTitle");
  const content = document.getElementById("confidentialcontent");

  let input = prompt("ENTER ACCESS CODE:");


  document.querySelectorAll(".tabcontent").forEach(t => t.classList.remove("active"));


  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

 
  document.getElementById("confidential").classList.add("active");
  evt.currentTarget.classList.add("active");

  if (input === password) {

    title.textContent = "ACCESS GRANTED";
    title.className = "granted";
    content.style.display = "block";

  } else {

    title.textContent = "ACCESS DENIED";
    title.className = "denied";
    content.style.display = "none";
  }
}

const music = document.getElementById("bg-music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function volumeUp() {
  if (music.volume < 1) {
    music.volume += 0.1;
  }
}

function volumeDown() {
  if (music.volume > 0) {
    music.volume -= 0.1;
  }
}

document.addEventListener("click", () => {
  music.play();
}, { once: true });













