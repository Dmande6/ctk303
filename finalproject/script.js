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




