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
if ($(window).width() <= 600) { // Om skärmen är mindre eller lika 600 (px)
    $(window).on('scroll', function() { // När man scrollar ska detta köras
        var windowsTop = $(window).scrollTop(), // Hämtar avståndet till toppen när man skrollar (det som inte syns)
            windowsHeight = $(window).height(), // Hämtar storleken på skärmen 
            skillsToTopp = skillsDiv.offset().top; // Hämtar avståndet från topp till staplarna
        if (windowsTop + windowsHeight > skillsToTopp) { // Körs om antalet piclar som inte syns plus skärmens storlek är större än avståndet till staplarna
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