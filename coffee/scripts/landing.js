//Deshabilitar scroll horizontal

$(function() {
    var $body = $(document);
    $body.bind('scroll', function() {
        if ($body.scrollLeft() != 0) {
            $body.scrollLeft(0);
        }
    });
}); 
