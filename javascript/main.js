//Navigation scroll active Animation
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// Cache-Selektoren Ruft alle Abschnitte ab, 
//für die eine ID definiert ist
const sections = document.querySelectorAll("section[id]");


//Fügt ein event-listener hinzu für das hinunder scollen
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Die aktuelle position des Fenster
  let scrollY = window.pageYOffset;
  
  //Mit dem loop durchläuft man die verschiedenen Abschnitte, Höhen-, Top- und ID-Wert zu erhalten
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - Wenn unsere aktuelle Bildlaufposition den Bereich betritt, in dem sich der aktuelle Abschnitt auf dem Bildschirm befindet, fügen Sie dem entsprechenden Navigationslink eine aktive Klasse hinzu, andernfalls entfernen Sie sie
    - Um zu wissen, welcher Link eine aktive Klasse benötigt, verwenden wir die Variable sectionId, die wir beim Durchlaufen von Abschnitten als Selektor erhalten
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          $('.filter').show('1000');
      }
      else
      {
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
          
      }
  });

});

  //navigation scroll sticky animation
  window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  })
  