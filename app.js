/**
 * Ready to use
 */

$(document).ready( function () {
  $(window).on('load resize', function(){ 
    resizer();
  });

  buttonMenu()
  menuModel()

  scrollHandler()
  toggleWidgetButtons()

  animationImageLink('.link-image')
  animationImageLink('.link-title')

})

function resizer() {
  var w = $(window).width();
  if (w < 768) {
      isMobile = true;
      $('.button-widget').addClass('button-widget-invisible')
  } else { 
      isMobile = false;
  }
}

/**
 * Abrir y Cerrar el menu model
 */

function menuModel () {
  $('.buttons-widget .button-widget').mouseenter( function () {
    $('.container-widget').addClass('open-widget');
  })
  
  $('.buttons-widget .button-widget').mouseleave( function () {
    $('.container-widget').removeClass('open-widget');
  })
}


/**
 * Animacion para la imagen y el link titulo
 */

function animationImageLink (ele) {
  $(ele).mouseenter(animacionHoverImagenEnter)
  $(ele).mouseleave(animacionHoverImagenLeave)
}

function animacionHoverImagenEnter () {
  if (!!$(this).parents('.grid').length) $(this).parents('.grid').addClass('titulo-hover')
  if (!!$(this).parents('.block-img').length) $(this).parents('.block-img').addClass('titulo-hover')
}

function animacionHoverImagenLeave () {
  if (!!$(this).parents('.grid').length) $(this).parents('.grid').removeClass('titulo-hover')
  if (!!$(this).parents('.block-img').length) $(this).parents('.block-img').removeClass('titulo-hover')
}

/**
 * Button Menu Open and Close
 */

function buttonMenu () {
  var buttonMenuOpen = $('.button-menu-open')
  var buttonMenuClose = $('.button-menu-close')
  var body = $('body')

  buttonMenuOpen.click(menuHandler)
  buttonMenuClose.click(menuHandler)

  function menuHandler () {
    var menuPagina = $('.menu-pagina');

    if (menuPagina.hasClass('active')) {
      body.removeClass('menu-active')
      menuPagina.removeClass('active')
    } else {
      body.addClass('menu-active')
      menuPagina.addClass('active')
    }
  }
  
}



/**
 * Scroll para el header
 */

function scrollHandler () {
  var lastScrollTop = 0;
  $(document).scroll( function() {
    var st = $(this).scrollTop();
    var pbh = $('.section-1').height()

    if (st > lastScrollTop){
      $('.container-header').addClass('scroll-down')
    } else {
      $('.container-header').removeClass('scroll-down')
    }

    if ( st > pbh/2 ) {
      $('.container-header').addClass('alternative-scroll')
    } else {
      $('.container-header').removeClass('alternative-scroll')
    }
    lastScrollTop = st;
  });
}

 
/**
 * Buttons actions
 */

function toggleWidgetButtons () {
  $('.buttons-widget .button-mobile').click( function () {
    var cw = $('.container-widget');
 
    if ( cw.hasClass('open-widget') ) {
     cw.removeClass('open-widget')
    } else {
     cw.addClass('open-widget')
    }
  })
}