let dokme = document.querySelector(".dokme");
let sidebar = document.querySelector(".sidebar")
dokme.addEventListener("click" , () =>{
  sidebar.classList.toggle("show")
  dokme.classList.toggle("open");
})