
//     const toggle = document.getElementById('menu-toggle');
//     const navLinks = document.getElementById('nav-links');

//     toggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//       toggle.classList.toggle('open');
//     });
// document.querySelector('.menu-toggle').addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.add('active');
// });

// document.querySelector('.close-icon').addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.remove('active');
// });
let navLinks = document.getElementById('nav-links');
function showMenu() {
  navLinks.style.right = "0";
}   
function hideMenu() {
  navLinks.style.right = "-200px";
}

// setTimeout(()=>{
//   document.getElementById("nav-links").style.display = "none";
// // },3000)
// setInterval(()=>{
//   document.getElementById("nav-links").style.display = "none";},3000)
// setTimeout(() => {
//     document.getElementById("nav-links").style.display = "inline";
//   }, 3000); 