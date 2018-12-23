(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Desplegable de NAV desktop
$(".dropdown-trigger").dropdown({
  //muestra el menu
  coverTrigger: false,
  inDuration: 500,
  outDuration: 500,
  //despliegue automatico
  hover: true,
  //Centra el menu desplegable
  gutter: 0,
  //El menu aparece desde la derecha 
  alignment: 'right'
});

// 

$(function(){
  //$('dropdown-button').dropdown('open');
  $('.dropdown-button').dropdown({
    inDuration: 500,
    outDuration: 500,
    contrainWidth: false,
    //despliegue automatico
    hover: true,
    gutter: 0,
    coverTrigger: false,
    alignment: 'right',
    stopPropagation:false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems,{
    duration:250,
    indicators:true,
    dist:-8,
    shift:0,
    numVisible:5,
  });
  
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});