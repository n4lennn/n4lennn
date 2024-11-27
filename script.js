let jam = new Date().getHours();
let pagi = document.getElementById("pagi");
let siang = document.getElementById("siang");
let sore = document.getElementById("sore");
let malam = document.getElementById("malam");
let sections = document.querySelectorAll("section");
let linknav = document.querySelectorAll("nav .collapse ul li a");

pagi.style.display = "none";
siang.style.display = "none";
sore.style.display = "none";
malam.style.display = "none";

if (jam >= 4 && jam <= 10) {
  pagi.style.display = "block";
} else if (jam >= 11 && jam <= 14) {
  siang.style.display = "block";
} else if (jam >= 15 && jam <= 17) {
  sore.style.display = "block";
} else if (jam >= 18) {
  malam.style.display = "block";
} else if (jam >= 0 && jam <= 3) {
  malam.style.display = "block";
}
