function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* Animaciones de entrada */
document.addEventListener('DOMContentLoaded', () => {
  anime.timeline({
    targets: '.container',
    easeing: 'easeOutExpo'
  })
  .add({
    width: ['0', '87%'],
    opacity: [0, 1],
    duration: 1500
  })
  .add({
    targets: '.float-btn',
    opacity: [0, 1],
    rotate: [360, 0]
  })
  .add({
    targets: 'footer',
    translateX: ['-300px', '0'],
    opacity: [0, 1]
  })
})
