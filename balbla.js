
    $(document).ready(function () {
        $("#btn").click(function () {
            $.ajax({
                type: 'GET',
                url: 'http://localhost:3088/liste',
                success: function (dur) {

                    $('#pasfacile').html('<ul id="lol"></ul>');
                    // for (var i = 0; i < dur.length; i++) {
                    $.each(dur, function (index, value) {
                        $('#lol').append('<li>' + value.name.first + " " + value.name.last + '</li>');


                    });
                }
            });

        });
        $( "#btn2" ).click(function() {
            $( "#lol" ).remove();
          });
    });

