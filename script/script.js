//img slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var dots = $(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}



function hideA(x) {
    if (x.checked) {
        $("#formA").show();
        $("#formB").hide();
    }
}

function hideB(x) {
    if (x.checked) {
        $("#formB").show();
        $("#formA").hide();
    }
}

$(document).ready(function(){
    $(".osucheck").click(function(){
      $(".flex-item-mesu").hide();
      
    });
  });

  $(document).ready(function(){
    $(".mesucheck").click(function(){
      $(".flex-item-osu").hide();
      $(".flex-item-mesu").show();
    });
  });







//scroll top
$(document).ready(function() {


    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $(".scrolltoTopbtn").fadeIn();
        } else {
            $(".scrolltoTopbtn").fadeOut("fast");
        }
    });

    $(".scrolltoTopbtn").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("#nav").animate({ top: '25px' });
        } else {
            $("#nav").animate({ top: '0px' });
        }
    });

});

// pop-up
function openForm() {
    $("#ruru-popup").fadeIn();
}

function closeForm() {
    $("#ruru-popup").fadeOut();
}

$("#bar-room-popup").click(function() {
    $(".room-popup").show();
});

$("#close-btn").click(function() {
    $(".room-popup").hide();
});


/* CHECK BOX */

$(document).ready(function() {
    $("#all").click(function() {
        $(".checkboxall").prop('checked', $(this).prop('checked'));
    });
});

/*checkbox question page*/

$(document).ready(function() {
    $("#hokkaidoarea").click(function() {
        $(".hokkaidocheck").prop('checked', $(this).prop('checked'));
    });
});

/* SATO-QUESTION PAGE*/