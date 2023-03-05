let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

function handleTabClick(event) {
  event.preventDefault();
  const link = event.currentTarget;
  const id = link.id.replace("-link", "");
  const content = document.getElementById(id);

  tabLinks.forEach(function(link) {
    link.classList.remove("active");
  });
  link.classList.add("active");

  tabContents.forEach(function(c) {
    c.classList.remove("show");
  });
  content.classList.add("show");
        
}

tabLinks.forEach(function(link) {
  link.addEventListener("click", handleTabClick);
});