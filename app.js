/**
 * Ready to use
 */

$(document).ready(function () {
  if (!(location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
    function changeToServer() {
      $allA = $('a')
      newAllA = $allA
      newAllAs = []
      for (var i = 0; i < $allA.length; i++) {
        var href = new URL($allA[i].href)
        if (newAllA[i].pathname === '/' || newAllA[i].pathname.indexOf('/pages/') !== -1)
          newAllA[i].href = href.origin + '/' + 'volkswagen' + href.pathname
      }
    }
    changeToServer()
  }

  $(window).on('load resize', function () {
    resizer()
  })

  buttonMenu()
  menuModel()

  scrollHandler()
  toggleWidgetButtons()

  animationImageLink('.link-image')
  animationImageLink('.link-title')

  carousel()

  accordion()
  cards()

  atencinoAlCliente()

  cookies()
})

function resizer() {
  var w = $(window).width()
  if (w < 768) {
    isMobile = true
    $('.button-widget').addClass('button-widget-invisible')
  } else {
    isMobile = false
  }
}

/**
 * Abrir y Cerrar el menu model
 */

function menuModel() {
  $('.buttons-widget .button-widget').mouseenter(function () {
    $('.container-widget').addClass('open-widget')
  })

  $('.buttons-widget .button-widget').mouseleave(function () {
    $('.container-widget').removeClass('open-widget')
  })
}

/**
 * Animacion para la imagen y el link titulo
 */

function animationImageLink(ele) {
  $(ele).mouseenter(animacionHoverImagenEnter)
  $(ele).mouseleave(animacionHoverImagenLeave)
}

function animacionHoverImagenEnter() {
  if (!!$(this).parents('.grid').length) $(this).parents('.grid').addClass('titulo-hover')
  if (!!$(this).parents('.block-img').length) $(this).parents('.block-img').addClass('titulo-hover')
}

function animacionHoverImagenLeave() {
  if (!!$(this).parents('.grid').length) $(this).parents('.grid').removeClass('titulo-hover')
  if (!!$(this).parents('.block-img').length)
    $(this).parents('.block-img').removeClass('titulo-hover')
}

/**
 * Button Menu Open and Close
 */

function buttonMenu() {
  var buttonMenuOpen = $('.button-menu-open')
  var buttonMenuClose = $('.button-menu-close')
  var body = $('body')

  buttonMenuOpen.click(menuHandler)
  buttonMenuClose.click(menuHandler)

  function menuHandler() {
    var menuPagina = $('.menu-pagina')

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

function scrollHandler() {
  var lastScrollTop = 0
  $(document).scroll(function () {
    var st = $(this).scrollTop()
    var pbh = $('.section-1').height()

    if (st > lastScrollTop) {
      $('.container-header').addClass('scroll-down')
    } else {
      $('.container-header').removeClass('scroll-down')
    }

    if (st > pbh / 2) {
      $('.container-header').addClass('alternative-scroll')
    } else {
      $('.container-header').removeClass('alternative-scroll')
    }
    lastScrollTop = st
  })
}

/**
 * Buttons actions
 */

function toggleWidgetButtons() {
  $('.buttons-widget .button-mobile').click(function () {
    var cw = $('.container-widget')

    if (cw.hasClass('open-widget')) {
      cw.removeClass('open-widget')
    } else {
      cw.addClass('open-widget')
    }
  })
}

function carousel() {
  var $slider = $('.list-blocks')

  if ($slider.length > 0) {
    $slider.on('touchstart', function (event) {
      var xClick = event.originalEvent.touches[0].pageX
      $(this).one('touchmove', function (event) {
        var xMove = event.originalEvent.touches[0].pageX
        if (Math.floor(xClick - xMove) > 5) {
          nextSlide()
        } else if (Math.floor(xClick - xMove) < -5) {
          prevSlide()
        }
      })
      $('.carousel').on('touchend', function () {
        $(this).off('touchmove')
      })
    })

    // debugger
  }

  // grab all the slides
  var $slides = $slider.find('li')

  var positions = $slides.map(function (index, slide) {
    var ojbSlide = {}
    ojbSlide.positionLeft = slide.offsetLeft
    ojbSlide.clientWidth = slide.clientWidth
    return ojbSlide
  })
  // set initial slide
  var currentSlide = 0

  function nextSlide() {
    // current slide becomes hidden
    $($slides[currentSlide]).removeClass('active')
    // set the current slide as the next one
    // currentSlide = (currentSlide + 1) % $slides.length;
    currentSlide = (currentSlide + 1) % $slides.length
    currentSlide = currentSlide == 0 ? $slides.length - 1 : currentSlide
    // add the class showing to the slide to make it visible
    $($slides[currentSlide]).addClass('active')
    // move the slider

    if (currentSlide === $slides.length - 1) {
      moviment = 'translate3d(-' + 44 + '%, 0px, 0px)'
    } else {
      moviment = 'translate3d(-' + (positions[currentSlide].positionLeft - 31) + 'px, 0px, 0px)'
    }

    $slider.css('transform', moviment)
  }

  function prevSlide() {
    // current slide becomes hidden
    $($slides[currentSlide]).addClass('active')
    // set the current slide as the previous one
    currentSlide = (currentSlide - 1) % $slides.length

    if (currentSlide == -1) {
      // currentSlide = $slides.length-1;
      currentSlide = 0
    }

    moviment = 'translate3d(-' + (positions[currentSlide].positionLeft - 30) + 'px, 0px, 0px)'

    $slider.css('transform', moviment)
    // add the class showing to the slide to make it visible
    // $($slides[currentSlide]).removeClass('active');

    $($slides).removeClass('active')
    $($slides[currentSlide]).addClass('active')
  }
}

function accordion() {
  var $items = $('.accordion-section .container-item')

  $items.click(function () {
    var idElement = this.id
    var $this = $(this)
    var $parentContainer = $this.parents('.container.grid.grid-14-10')
    var $containerImgs = $parentContainer.find('.container-img')

    $actualContainerImg = $containerImgs.filter(function (index, element) {
      return element.id === idElement
    })

    $items.removeClass('active')
    $containerImgs.removeClass('active')
    $this.addClass('active')
    $actualContainerImg.addClass('active')
  })
}

function cards() {
  var $items = $('.container-elegi button')

  $items.click(function () {
    var idElement = this.id
    var $this = $(this)
    var $cards = $('.container-elegi .container-areas')

    $card = $cards.filter(function (index, element) {
      return element.id === idElement
    })

    $items.removeClass('active')
    $cards.removeClass('active')
    $this.addClass('active')
    $card.addClass('active')
  })
}

function atencinoAlCliente() {
  if ($('.main').hasClass('atencion')) {
    $('input[type=text]').focusin(function (e) {
      var $this = $(this)
      var $label = $this.prev()
      $label.addClass('vfl-label-on-focus')
    })

    $('input[type=text]').focusout(function (e) {
      var $this = $(this)
      var $label = $this.prev()
      var val = $this.val()
      $label.removeClass('vfl-label-on-focus')
      if (val.length === 0) {
        // aca va el error handler
        $label.removeClass('vfl-label-on-input')
      }
    })

    $('input[type=text]').on('input', function () {
      var $this = $(this)
      var $label = $this.prev()
      var val = $this.val()
      if (val.length > 0) {
        $label.addClass('vfl-label-on-input')
      } else {
        /// aca va el error handler
        $label.remove('vfl-label-on-input')
      }
    })
  }
}

function cookies() {
  var $cookiesBanner = $('.cookies-banner')
  // desactivar o quitar las cookies
  // if (localStorage.getItem('acept-cookies')) {
  //   $cookiesBanner.hide()
  //   return
  // }

  if ($cookiesBanner.length > 0) {
    $cookiesBanner.find('button').click(function () {
      $cookiesBanner.hide()
      localStorage.setItem('acept-cookies', true)
    })
  }
}
