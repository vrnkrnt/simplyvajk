$(document).ready(function(){

    $('#hamburger-click').click(function(){

        $('div#navbar-home').toggle(function(){
            $(this).animate();
        });
    });
});
