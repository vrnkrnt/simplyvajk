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



// ------------ SKILLBAR ANIMATION -------------------

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

document.addEventListener("keydown", function(e) {
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

// ----------------------------------------------------

// --------HÄMTAR DATA FRÅN XML------------
let xmlContent = '';
let tableProjects = document.getElementById('projects');
fetch('text.xml').then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let projects = xmlDOM.querySelectorAll('project');

        projects.forEach(projectXmlNode => {
            let row = document.createElement('tr');

            //Projektnamn
            let td = document.createElement('td');
            td.innerText = "Projektnamn: " + projectXmlNode.children[0].innerHTML;
            row.appendChild(td);

            //Kund
            td = document.createElement('td');
            td.innerText = "Kund: " + projectXmlNode.children[1].innerHTML;
            row.appendChild(td);

            //Startdatum
            td = document.createElement('td');
            td.innerText = "Startdatum: " + projectXmlNode.children[2].innerHTML;
            row.appendChild(td);

            //Slutdatum
            td = document.createElement('td');
            td.innerText = "Slutdatum: " + projectXmlNode.children[3].innerHTML;
            row.appendChild(td);

            //Beskrivning
            td = document.createElement('td');
            td.innerText = "Beskrivning: " + projectXmlNode.children[4].innerHTML;
            row.appendChild(td);

            //Projektansvarig
            td = document.createElement('td');
            td.innerText = "Projektansvarig: " + projectXmlNode.children[5].innerHTML;
            row.appendChild(td);

            tableProjects.children[1].appendChild(row);
            td.innerHTML = "<hr>";
        });
    });
});

//----------------------
//------------SLIDESHOW--------------
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

//--------------------------