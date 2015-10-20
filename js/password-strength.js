$(document).ready(function() {

    $('#pass').keyup(function(e) {
      
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");

        $('#passstrength').removeClass();

        if (false === enoughRegex.test($(this).val())) {
            $('#passstrength span').html('Too short');
        } else if (strongRegex.test($(this).val())) {
            $('#passstrength span').html('Strong');
            $('#passstrength').addClass('strong');
        } else if (mediumRegex.test($(this).val())) {
            $('#passstrength span').html('Medium');
            $('#passstrength').addClass('medium');
        } else {
            $('#passstrength span').html('Weak');
            $('#passstrength').addClass('weak');
        }
        return true;
    });

});