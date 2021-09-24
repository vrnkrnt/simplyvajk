// ------------ Hamburger meny - Navbar -------------------

$(document).ready(function() {

    $('#hamburger-click').click(function() {

        $('div#navbar-home').show(500);
        $('#hamburger-click').hide();
        $('#cross').show(500);

    });

    $('#cross').click(function() {
        $('div#navbar-home').hide(500);
        $('#hamburger-click').show(500);
        $('#cross').hide();
    });

});

// ------------ Skillbar - Animation -------------------

var skillsDiv = $('#skills'); // Skapar en variabel, skillsDiv som hämtas från diven med ID skills
if ($(window).width() <= 600 && $('body').is('.skillbar-page')) { // Om skärmen är mindre eller lika 600 (px)
    $(window).on('scroll', function() { // När man scrollar ska detta köras
        var windowsTop = $(window).scrollTop(), // Hämtar avståndet till toppen när man skrollar (det som inte syns)
            windowsHeight = $(window).height(), // Hämtar storleken på skärmen 
            skillsToTop = skillsDiv.offset().top; // Hämtar avståndet från topp till staplarna
        if (windowsTop + windowsHeight > skillsToTop) { // Körs om antalet piclar som inte syns plus skärmens storlek är större än avståndet till staplarna
            $('.skillbar').each(function() { // Letar igenom hela dokumentet efter divs med klassnamnet .skillbar
                $(this).find('.skillbar-bar').animate({ // Hittar alla klasser med namnet skillbar-bar och kör koden i måsvingarna
                    width: $(this).attr('data-percent') // Hämtar procenten från divarna
                }, 2000); // Hur snabbt staplarna ska fyllas
                $(window).off('scroll'); // Slutar uppdatera när staplarna animerats
            });
        }
    });
} else if ($(window).width() > 600) { // Om skärmen är större än 600px (skrivbord/surfplatta)
    $('.skillbar').each(function() { // Här behöver det inte kollas om staplarna syns då de alltid kommer göra det i skrivbords läge
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });
}

// ----------------------------------------------------
//-------------Validering för formulär på kontaktsida----------------

let fNamn = document.getElementById("fName"); // Hämta elementet med hjälp av id taggen
function myValidationFname() {
    let fNamn = document.getElementById("fName").value; // hämta värdet i inputfältet med id fName
    if (fNamn == '') { //Kontrollerar ifall inputfältet är tomt, om det är det körs if satsens kod
        document.getElementById("fName").setAttribute("style", "border: 3px solid red;"); //Ändrar färg på input boxens border till röd
        document.getElementById("errorTextFnamn").setAttribute("style", "display:block;"); // visar en errortext

    }
    if (fNamn != null && fNamn != '' && fNamn.length >= 2) { // Kontrollerar ifall input inte är tomt samt har mer eller = 2 tecken. Är det true körs if-satsens kod
        document.getElementById("fName").setAttribute("style", "border: 3px solid green"); //ändrar färgen på boxens border till grön
        document.getElementById("errorTextFnamn").setAttribute("style", "display:none;"); // tar bort errortexten


    }
    else {
        return false;
    }

}

let eNamn = document.getElementById("lName");
function myValidationEnamn() {
    let eNamn = document.getElementById("lName").value;
    if (eNamn == '') {
        document.getElementById("lName").setAttribute("style", "border: 3px solid red");
        document.getElementById("errortextEnamn").setAttribute("style", "display:block;");

    }
    if (eNamn != null && eNamn != '' && eNamn.length >= 2) {
        document.getElementById("lName").setAttribute("style", "border: 3px solid green");
        document.getElementById("errortextEnamn").setAttribute("style", "display:none;");

    }
    else {
        return false;
    }

}

let meddelande = document.getElementById("meddelande");
function myValidationMeddelande() {
    let meddelande = document.getElementById("meddelande").value;
    if (meddelande == '') {
        document.getElementById("meddelande").setAttribute("style", "border: 3px solid red");
        document.getElementById("errorTextMeddelande").setAttribute("style", "display:block;");

    }
    if (meddelande != null && meddelande != '' && meddelande.length <= 200) {
        document.getElementById("meddelande").setAttribute("style", "border: 3px solid green");
        document.getElementById("errorTextMeddelande").setAttribute("style", "display:none;");


    }
    else {
        return false;
    }

}



function myValidationEmail() {
    let email = document.getElementById("email1").value;
    var validering = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validering.test(email) == true) {
        document.getElementById("email1").setAttribute("style", "border: 3px solid green");
    }
    else{
        document.getElementById("email1").setAttribute("style", "border: 3px solid red");
    }
}

// ------------- Web API - Fullscreen ------------------

// För att förstora hela hemsidan
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* Internet explorer 11 och senare */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* Internet explorer 11 och senare */
        document.msExitFullscreen();
    }
}

// För att förstora en bild
var el = document.getElementById("profilbild");

function openFullscreenImage() {
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) { /* Safari */
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) { /* IE11 */
        el.msRequestFullscreen();
    }
}

// Fullskärm när man klickar enter

document.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        toggleFullScreen();
    }
}, false);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// ------------- Hämta data från XML ------------------

function getXMLData() { // Funktionens namn
    $.ajax({ // Ajax request
        url: "text.xml", // URL requesten skickas till
        dataType: "xml", // Vilken datatyp som hämtas
        success: function(data) { // Om filen körs igenom utan fel körs funktionen "data" (annars hoppar den till "error" funktionen)
            $(".projektListaXML").children().remove(); // Rensar 

            $(data).find("project").each(function() {

                var info = '<li>Projektnamn: ' + $(this).find("projectTitle").text() +
                    '</li><li> Kund: ' + $(this).find("customer").text() +
                    ' </li><li > Startdatum: ' + $(this).find("startDate").text() +
                    ' </li><li > Slutdatum: ' + $(this).find("endDate").text() +
                    ' </li><li > Beskrivning: ' + $(this).find("description").text() +
                    ' </li><li > Ansvarig: ' + $(this).find("responsible").text();

                $(".projektListaXML").append(info);
                $(".projektListaXML").append("<hr>");

            });

        },
        error: function() { // Om filen inte kunde läsas eller det blir något fel körs detta
            $(".projektListaXML").children().remove();
            $(".projektListaXML").append("<li>Något blev fel!</li>");
        }
    });
}
$(document).ready(function() {
    getXMLData();
    fetch('text.xml');
});

//------------ Slideshow --------------
var playing = true;
var pauseButton = document.getElementById('pause');
var myIndex = 0;
if (document.body.classList.contains('portfolio-bildspel')) {

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slideShowImg");
        var dots = document.getElementsByClassName("dot");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
        dots[myIndex - 1].className += " active";
    }


    function pauseSlideshow() {
        pauseButton.innerHTML = 'Starta';
        playing = false;
        clearInterval(slideInterval);
    }

    function playSlideshow() {
        pauseButton.innerHTML = 'Pausa';
        playing = true;
        slideInterval = setInterval(carousel, 2000);
    }

    pauseButton.onclick = function() {
        if (playing) {
            pauseSlideshow();
        } else {
            playSlideshow();
        }
    };

    carousel();
    playSlideshow();
}

//------------Ladde information från localStorage--------------

function sendToLocalStorage(){
    var förNamn = document.getElementById("fName").value;
    var efterNamn = document.getElementById("lName").value;
    var email = document.getElementById("email1").value;

    förNamn = localStorage.setItem("Förnamn",förNamn, JSON.stringify(förNamn));
    efterNamn = localStorage.setItem("Efternamn", efterNamn, JSON.stringify(efterNamn));
    email = localStorage.setItem("email",email, JSON.stringify(email));


}

function loadTextInput(){
document.getElementById("fName").value = localStorage.getItem("Förnamn");
document.getElementById("lName").value = localStorage.getItem("Efternamn");
document.getElementById("email1").value = localStorage.getItem("email");;

if(document.url = "kontakt.html"){
    window.onload=loadTextInput;
}
}


//--------Tar bort text från textrutorna
$(function() {
    $('#btnSkicka').click(function() {
      $('#btnSkicka, input[type="text"').val('');
      $('#btnSkicka, input[type="email"').val('');


    });
  });