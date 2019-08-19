$(document).ready(function () {

    $('#sidebarButton').on('click', function () {
        
        if(!$('#sidebar').hasClass('active')){
            $('#sidebar').toggleClass('active');
        }        
        else if($('#sidebar').hasClass('active')){
            $('#sidebar').removeClass('active');
        }
    });

});