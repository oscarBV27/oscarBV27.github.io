// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
$(document).ready(function() {
    // Ajustar la altura del iframe al cargar y al cambiar el tamaño de la ventana
    function adjustIframeHeight() {
        var windowHeight = $(window).height();
        var iframeOffset = $('#contactForm').offset().top;
        var newIframeHeight = windowHeight - iframeOffset - 20; // Ajuste por píxeles para un mejor ajuste

        $('#contactForm').css('height', newIframeHeight + 'px');
    }

    // Llamar a la función para ajustar la altura inicialmente
    adjustIframeHeight();

    // Volver a ajustar la altura del iframe cuando se cambie el tamaño de la ventana
    $(window).resize(function() {
        adjustIframeHeight();
    });
});
