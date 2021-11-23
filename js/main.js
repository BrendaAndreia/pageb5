/*===== Escondendo e mostrando as colunas do footer =====*/
var columns = ["column1", "column2", "column3", "column4", "column5"];
var visibleColumnId = null;
function columnVisibility(columnId) {
  if(visibleColumnId === columnId) {
    visibleColumnId = null;
  } else {
    visibleColumnId = columnId;
  }
  hideNonVisibleColumns();
}
function hideNonVisibleColumns() {
  var i, columnId, column;
  for(i = 0; i < columns.length; i++) {
    columnId = columns[i];
    column = document.getElementById(columnId);
    if(visibleColumnId === columnId) {
      column.style.display = "block";
    } else {
      column.style.display = "none";
    }
  }
}
/*========================= Navegacação menu=====================*/ 

//escondendo os nav-links nos dispositivos md
if (window.matchMedia("(max-width:992px)").matches) {
  document.addEventListener("DOMContentLoaded", function(){
    var links = document.querySelectorAll(".navbar-nav li a:not([href='#'])");
    for(var x=0; x<links.length; x++){
      links[x].onclick = function(){
          document.querySelector("button.navbar-toggler").click();
      }
    }
  });
}

//ativando e desativando link nav
(()=>{
  const navMenu = document.querySelector(".nav-menu");
  document.addEventListener("click", (event) =>{
  if(event.target.classList.contains('nav-link')){
  
    /*certifique-se de que o event.tagert.hash 
    tenha um valor antes de substituir*/ 
    if(event.target.hash !=""){
    //evitar o comportamento do click
      event.preventDefault();
      const hash = event.target.hash;
      /* desativando o active existente na navegação menu 'link-item' */  
      navMenu.querySelector(".active").classList.remove("active");
      /* se o link-item clicado estiver dentro da navegação do menu */
      let navItems = navMenu.querySelectorAll(".nav-link");
      navItems.forEach((item) =>{
        if(hash === item.hash){
          //ativando o novo 'link-item' da navegaçao do menu
          item.classList.add("active")
        }
      })           
      window.location.hash = hash;
    }
  } 
})
})();

//background-color ao scroll
var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>50){
        nav.style.background = "#000";
    }
    else{
        nav.style.background = "#b8a997";
    }
});


