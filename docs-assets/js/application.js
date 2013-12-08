// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */


!function ($) {

  // $(window).resize(function() {
    
    if ($(window).width() < 480 ) {
      $(".trigger-quickfind")
      .click(function () {
        var btn = $(this)
        btn.parent(".item").toggleClass('active');
        $(".pannel-find").toggleClass("show");
        // toggle text inside the button as well show map/hide map.
      })
    }

  // });


  $(function(){

    // $('#step4').modal('show');
    // $('#schedule').tooltip('show')

    // button state demo
    $(".ext-colap")
      .click(function () {
        var btn = $(this)
        btn.toggleClass('open')
        .next(".extenssible").toggleClass("open");
        // toggle text inside the button as well show map/hide map.
      })



    //results-map ------------------------------------------
    $('.results-map .map-extend')
      .click(function () {
        var btn = $(this)
        btn.toggleClass('extended')
        $(".main").toggleClass("results-map-extended");
        $(".sidebar").toggleClass("results-map-extended");
      })
      // ---------------------------------------------------


    $('.map-extend')
      .click(function () {
        var btn = $(this)
        btn.toggleClass('extended')
        $(".map-module").toggleClass("extend");
        $(".fold .detail").toggleClass("extend");
      })

      // button state demo
    $('.pin-icon')
      .click(function (e) {
        var btn = $(this)
        e.preventDefault();
        
        btn.toggleClass('active');
        $(".map-box").toggleClass("active");
      })

    $(".map-box .close")
      .click(function () {
        var btn = $(this)
        $(".pin-icon").removeClass("active");
        $(".map-box").removeClass("active");
      })

    // IE10 viewport hack for Surface/desktop Windows 8 bug
    //
    // See Getting Started docs for more information
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style");
      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport{width:auto!important}"
        )
      );
      document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
    }


    var $window = $(window)
    var $body   = $(document.body)

    var navHeight = $('.navbar').outerHeight(true) + 10

    $body.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    $('.bs-docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    // back to top
    setTimeout(function () {
      var $sideBar = $('.bs-sidebar')

      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.bs-docs-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          }
        , bottom: function () {
            return (this.bottom = $('.bs-footer').outerHeight(true))
          }
        }
      })
    }, 100)

    setTimeout(function () {
      $('.bs-top').affix()
    }, 100)

    // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    $('.bs-docs-navbar').tooltip({
      selector: "a[data-toggle=tooltip]",
      container: ".bs-docs-navbar .nav"
    })

    // popover demo
    $("[data-toggle=popover]")
      .popover()

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })
})

}(window.jQuery)
