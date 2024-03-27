window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.position = "fixed",
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.position = "initial";
  }
}



// res menu 
function openMenu() {
    document.getElementById('res-menu-section').style.display = 'block';
}
function closeMenu() {
    document.getElementById('res-menu-section').style.display = 'none';
}