const cards = document.querySelectorAll("#card");
for (i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function(e) {
    link = this.querySelector("#cardlink");
    link.click();
  }, false);
}