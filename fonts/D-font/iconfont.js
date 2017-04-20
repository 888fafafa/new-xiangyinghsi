;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dianhua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.488 387.488 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 959.752744c0 0-335.814302-374.240473-335.814302-559.692209 0-185.447642 150.362566-335.814302 335.814302-335.814302 185.455829 0 335.816349 150.367683 335.816349 335.814302C847.815325 585.512271 511.998977 959.752744 511.998977 959.752744zM511.998977 273.257547c-70.02689 0-126.805034 56.779168-126.805034 126.805034 0 70.02996 56.778144 126.807081 126.805034 126.807081 70.028936 0 126.806057-56.777121 126.806057-126.807081C638.805034 330.036715 582.027913 273.257547 511.998977 273.257547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinxi" viewBox="0 0 1463 1024">' +
    '' +
    '<path d="M950.857143 512 1462.857143 0 1462.857143 1024 1462.784 1024 950.857143 512ZM512 512 0 1024 0 0 0.073143 0 512 512ZM146.358857 0 1316.571429 0 731.428571 585.142857 146.358857 0ZM146.285714 1024 585.142857 585.142857 731.428571 731.428571 877.714286 585.142857 1316.498286 1024 146.285714 1024Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)