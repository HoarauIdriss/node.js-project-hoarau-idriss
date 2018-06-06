$(document).ready(function () {
     
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3088/liste',
            success: function(dur) {
                

                // for (var i = 0; i < dur.length; i++) {
                $.each(dur, function (index, value) {   
                    $('#noeasy').append('<li class="pasfacile">'+value.name.first+ " " +value.name.last+'</li>');
                   
                    
                });
            }
        });
    
});