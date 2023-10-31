const cards = document.querySelectorAll("#card");
for (i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function(e) {
    link = this.querySelector("#cardLink");
    link.click();
  }, false);
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
//   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
}))

$(document).ready(function(){

  //hides dropdown content
  $(".size_chart").hide();
  
  //unhides first option content
  $("#option1").show();
  
  //listen to dropdown for change
  $("#size_select").change(function(){
    //rehide content on change
    $('.size_chart').hide();
    //unhides current item
    $('#'+$(this).val()).show();
  });
  
});