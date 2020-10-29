/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-passiveeventlisteners-setclasses !*/
!(function (e, n, s) {
  function o(e) {
    var n = l.className,
      s = Modernizr._config.classPrefix || ''
    if ((c && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var o = new RegExp('(^|\\s)' + s + 'no-js(\\s|$)')
      n = n.replace(o, '$1' + s + 'js$2')
    }
    Modernizr._config.enableClasses &&
      ((n += ' ' + s + e.join(' ' + s)), c ? (l.className.baseVal = n) : (l.className = n))
  }
  function a(e, n) {
    return typeof e === n
  }
  function t() {
    var e, n, s, o, t, f, l
    for (var c in r)
      if (r.hasOwnProperty(c)) {
        if (
          ((e = []),
          (n = r[c]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase())
        for (o = a(n.fn, 'function') ? n.fn() : n.fn, t = 0; t < e.length; t++)
          (f = e[t]),
            (l = f.split('.')),
            1 === l.length
              ? (Modernizr[l[0]] = o)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = o)),
            i.push((o ? '' : 'no-') + l.join('-'))
      }
  }
  var i = [],
    r = [],
    f = {
      _version: '3.6.0',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function (e, n) {
        var s = this
        setTimeout(function () {
          n(s[e])
        }, 0)
      },
      addTest: function (e, n, s) {
        r.push({ name: e, fn: n, options: s })
      },
      addAsyncTest: function (e) {
        r.push({ name: null, fn: e })
      }
    },
    Modernizr = function () {}
  ;(Modernizr.prototype = f),
    (Modernizr = new Modernizr()),
    Modernizr.addTest('passiveeventlisteners', function () {
      var n = !1
      try {
        var s = Object.defineProperty({}, 'passive', {
          get: function () {
            n = !0
          }
        })
        e.addEventListener('test', null, s)
      } catch (o) {}
      return n
    })
  var l = n.documentElement,
    c = 'svg' === l.nodeName.toLowerCase()
  t(), o(i), delete f.addTest, delete f.addAsyncTest
  for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]()
  e.Modernizr = Modernizr
})(window, document)

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener(
      'touchstart',
      handle,
      Modernizr.passiveeventlisteners ? { passive: true } : false
    )
  }
}

jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener(
      'touchmove',
      handle,
      Modernizr.passiveeventlisteners ? { passive: true } : false
    )
  }
}

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

  video()
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
  $(document).scroll(listenScroll)
  function listenScroll() {
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
  }
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
  var $slider = $('.list-blocks') // class to use for init carousel

  if ($slider.length > 0) {
    var $slides = $slider.find('li') // grab all the slides
    var positions = $slides.map(function (index, slide) {
      // make a customs positions of slides
      var ojbSlide = {}
      ojbSlide.positionLeft = slide.offsetLeft
      ojbSlide.clientWidth = slide.clientWidth
      return ojbSlide
    })
    var currentSlide = 0 // set initial current slide
    // Init subscriptio events touch
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
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % $slides.length
    currentSlide = currentSlide == 0 ? $slides.length - 1 : currentSlide
    style(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1) % $slides.length
    currentSlide = currentSlide == -1 ? 0 : currentSlide
    style(currentSlide)
  }

  function style(currentSlide) {
    // get current style depending of a left o right
    if (currentSlide === 0) {
      moviment = 'translate3d(0px, 0px, 0px)'
    } else if (currentSlide === $slides.length - 1) {
      moviment = 'translate3d(-' + (positions[currentSlide].positionLeft - 111) + 'px, 0px, 0px)'
    } else {
      moviment = 'translate3d(-' + (positions[currentSlide].positionLeft - 80) + 'px, 0px, 0px)'
    }
    // css movimient carousel apply
    $slider.css('transform', moviment)
    // Move the active class
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
  var $items = $('.container-elegi .container-button button')

  $items.click(update)

  function update(ele) {
    var idElement = ele.id ? ele.id : ele.target.id
    var $this = ele.id ? $(ele) : $(this)
    var $cards = $('.container-elegi .container-areas')

    $card = $cards.filter(function (index, element) {
      return element.id === idElement
    })

    $items.removeClass('active')
    $cards.removeClass('active')
    $this.addClass('active')
    $card.addClass('active')
  }

  // Mobile
  // slider para mobile
  var currSlide = 0
  $('.slider-left').attr('disabled', true)
  $('.container-elegi .buttons-slider .slider-left').click(function () {
    // switch
    prevSlide()
  })

  $('.container-elegi .buttons-slider .slider-right').click(function () {
    // switch
    nextSlide()
  })

  function nextSlide() {
    // current slide becomes hidden
    $($items[currSlide]).parent().removeClass('selected')
    // set the current slide as the next one
    // currentSlide = (currentSlide + 1) % $slides.length;
    currSlide = (currSlide + 1) % $items.length
    currSlide = currSlide == 0 ? $items.length - 1 : currSlide
    // add the class showing to the slide to make it visible
    $($items[currSlide]).parent().addClass('selected')
    // move the slider
    $('.slider-left').attr('disabled', false)
    if (currSlide === 0) {
      // primero disabled left button
      $('.slider-left').attr('disabled', true)
    } else if (currSlide === $items.length - 1) {
      // ultimo disabled right button
      $('.slider-right').attr('disabled', true)
    } else {
      // normal
    }

    update($($items[currSlide])[0])
  }

  function prevSlide() {
    // current slide becomes hidden
    $($items[currSlide]).parent().removeClass('selected')
    // set the current slide as the previous one
    currSlide = (currSlide - 1) % $items.length
    currSlide = currSlide == -1 ? 0 : currSlide

    $($items[currSlide]).parent().addClass('selected')
    $('.slider-right').attr('disabled', false)
    if (currSlide === 0) {
      // primero disabled left button
      $('.slider-left').attr('disabled', true)
    } else if (currSlide === $items.length - 1) {
      // ultimo disabled right button
      $('.slider-right').attr('disabled', true)
    } else {
      // normal
    }

    update($($items[currSlide])[0])
  }
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

  var authorized = Cookie.get('authorized')

  if (!authorized) {
    $('.cookies-banner').addClass('show')
    $cookiesBanner.find('button').click(function () {
      $cookiesBanner.hide()
      Cookie.set('authorized', true, 1)
    })
  } else {
    $('.cookies-banner').removeClass('show')
  }
}

var Cookie = {
  set(name, value, days) {
    var expires = ''
    if (days) {
      var date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  },
  get(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  },
  erase(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}

function video() {
  if ($(' video').length > 0) {
    var video = $(' video')[0]
    video.controlsList = 'nodownload'
    video.disablePictureInPicture = true
    video.autoPictureInPicture = true
    video.disableRemotePlayback = true
  }
}
