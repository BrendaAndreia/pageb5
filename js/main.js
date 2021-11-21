var nav = document.getElementById('nav');
window.addEventListener("scroll", function(event) {
    if(window.pageYOffset>50){
        nav.style.background = "#000";
    }
    else{
        nav.style.background = "#b8a997";
    }
});

var columns = ["column1", "column2", "column3", "column4", "column5"];
var visibleColumnId = null;
function divVisibility(columnId) {
  if(visibleColumnId === columnId) {
    visibleColumnId = null;
  } else {
    visibleColumnId = columnId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
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
