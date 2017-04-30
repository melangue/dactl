"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BareFoot = function () {
  /**
   * @param  {Object} options [Options to configure the script]
   * @constructor
   */

  function BareFoot() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, BareFoot);

    var DEFAULTS = {
      scope: 'body',
      divFootnotesQuery: ".footnotes",
      footnotesQuery: "[id^='fn']",
      supQuery: 'a[href^="#fnref"]',
      fnButtonMarkup: "<button class=\"footnote-button\" id=\"{{FOOTNOTEREFID}}\" data-footnote=\"{{FOOTNOTEID}}\" alt=\"See Footnote {{FOOTNOTENUMBER}}\" rel=\"footnote\" data-fn-number=\"{{FOOTNOTENUMBER}}\" data-fn-content=\"{{FOOTNOTECONTENT}}\"></button>",
      fnContentMarkup: "<div class=\"bf-footnote\" id=\"{{FOOTNOTEID}}\"><div class=\"footnote-wrapper\"><div class=\"footnote-content\" tabindex=\"0\">{{FOOTNOTECONTENT}}</div></div><div class=\"footnote-tooltip\" aria-hidden=\"true\"></div>",
      activeCallback: null,
      activeBtnClass: 'is-active',
      activeFnClass: 'footnote-is-active',
      backdropClass: 'footnote-backdrop',
      buttonClass: 'footnote-button',
      fnContainer: 'footnote-container',
      fnClass: 'bf-footnote',
      fnContentClass: 'footnote-content',
      fnWrapperClass: 'footnote-wrapper',
      tooltipClass: 'footnote-tooltip',
      fnOnTopClass: 'footnote-is-top'
    };

    // Merges defaults with custom options
    this.config = _extends({}, DEFAULTS, options);

    // A selector could select multiple containers
    this.divFootnotes = [].slice.call(document.querySelectorAll(this.config.divFootnotesQuery));

    // Returns if no container
    if (!this.divFootnotes) return false;

    // Groups all footnotes within every group.
    this.footnotes = this.divFootnotes.map(function (el) {
      return el.querySelectorAll(_this.config.footnotesQuery);
    });

    // Polyfill for Element.matches()
    // Based on https://davidwalsh.name/element-matches-selector

    Element.prototype.matches = Element.prototype.matches || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };

    // Polyfill for Element.closest()
    // Based on http://stackoverflow.com/questions/18663941/finding-closest-element-without-jquery

    Element.prototype.closest = Element.prototype.closest || function (s) {
      var el = this;

      while (el !== null) {
        var parent = el.parentElement;
        if (parent !== null && parent.matches(s)) {
          return parent;
        }
        el = parent;
      }
      return null;
    };

    // Calculate vertical scrollbar width
    // Inspired by https://davidwalsh.name/detect-scrollbar-width

    var scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px; visibility: hidden;';
    document.body.appendChild(scrollDiv);
    this.scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
  }

  /**
   * Footnotes often have a link to return to the sup, before moving the contents to each individual footnote, we gotta remove this hook to get a clean content.
   * @param  {String} fnHtml [Html from the footnote]
   * @param  {String} backId [ID this footnote refers to]
   * @return {String}        [Clean Html]
   */


  _createClass(BareFoot, [{
    key: "removeBackLinks",
    value: function removeBackLinks(fnHtml, backId) {
      if (backId.indexOf(' ') >= 0) {
        backId = backId.trim().replace(/\s+/g, "|").replace(/(.*)/g, "($1)");
      }

      if (backId.indexOf('#') === 0) {
        backId = backId.slice(1);
      }

      var regex = new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#" + backId + "[^>]*>(.*?)<\\s*/\\s*a>", "g");

      return fnHtml.replace(regex, "").replace("[]", "");
    }

    /**
     * Builds the buttons for each footnote based on the configured template.
     * @param  {String} ref     [ID this element refers to]
     * @param  {String} id      [ID for this element]
     * @param  {String} n       [Number that illustrates the footnote]
     * @param  {String} content [Footnote content]
     * @return {String}         [Html Markup]
     */

  }, {
    key: "buildButton",
    value: function buildButton(ref, id, n, content) {
      return this.config.fnButtonMarkup.replace(/\{\{FOOTNOTEREFID\}\}/g, ref).replace(/\{\{FOOTNOTEID\}\}/g, id).replace(/\{\{FOOTNOTENUMBER\}\}/g, n).replace(/\{\{FOOTNOTECONTENT\}\}/g, content);
    }

    /**
     * Builds the content for each footnote based on the configured template.
     * @param  {String} id      [ID from the parent of this element]
     * @param  {String} content [Footnote content]
     * @return {String}         [Html Markup]
     */

  }, {
    key: "buildContent",
    value: function buildContent(id, content) {
      return this.config.fnContentMarkup.replace(/\{\{FOOTNOTEID\}\}/g, id).replace(/\{\{FOOTNOTECONTENT\}\}/g, content);
    }

    /**
     * Triggers whenever an user clicks a footnote button and is responsible to coordinate all the necessary steps to show and position the footnotes.
     * @param  {Event} e [Event]
     */

  }, {
    key: "clickAction",
    value: function clickAction(e) {
      var btn = void 0,
          content = void 0,
          id = void 0,
          fnHtml = void 0,
          fn = void 0,
          windowHeight = void 0,
          scrollHeight = void 0,
          returnOnDismiss = void 0;

      btn = e.target;
      content = btn.getAttribute('data-fn-content');
      id = btn.getAttribute("data-footnote");
      returnOnDismiss = btn.classList.contains('is-active');

      // We calculate the document.documentElement.scrollHeight before inserting the footnote, so later (at the calculateSpacing function to be more specific), we can check if there's any overflow to the bottom of the page, if so it flips the footnote to the top.
      scrollHeight = this.getScrollHeight();

      this.dismissFootnotes();

      if (returnOnDismiss) {
        return;
      }

      fnHtml = this.buildContent(id, content);
      btn.insertAdjacentHTML('afterend', fnHtml);
      fn = btn.nextElementSibling;

      // Position and flip the footnote on demand.
      this.calculateOffset(fn, btn);
      this.calculateSpacing(fn, scrollHeight);

      btn.classList.add(this.config.activeBtnClass);
      fn.classList.add(this.config.activeFnClass);

      // Focus is set on the footnote content, this looks kinda ugly but allows keyboard navigation and scrolling when the content overflow. I have a gut feeling this is good, so I'm sticking to it. All the help to improve accessibility is welcome.
      fn.querySelector("." + this.config.fnContentClass).focus();

      // As far as I recall, touch devices require a tweak to dismiss footnotes when you tap the body outside the footnote, this is the tweak.
      if ('ontouchstart' in document.documentElement) {
        document.body.classList.add(this.config.backdropClass);
      }

      // Triggers the activeCallback if there's any. I never used and never tested this, but I'm passing the button and the footnote as parameters because I think that's all you may expect.
      if (this.config.activeCallback) {
        this.config.activeCallback(btn, fn);
      }
    }

    /**
     * Mathematical Hell. This function repositions the footnote according to the edges of the screen. The goal is to never (gonna give you up) overflow content. Also, remember when we calculated the scrollBarWidth? This is where we use it in case the footnote overflows to the right.
     * @param  {Element} fn  [Footnote Node]
     * @param  {Element} btn [Button Node]
     */

  }, {
    key: "calculateOffset",
    value: function calculateOffset(fn, btn) {
      var tooltip = void 0,
          container = void 0,
          btnOffset = void 0,
          btnWidth = void 0,
          contWidth = void 0,
          contOffset = void 0,
          wrapWidth = void 0,
          wrapMove = void 0,
          wrapOffset = void 0,
          tipWidth = void 0,
          tipOffset = void 0,
          windowWidth = void 0;

      btn = btn || fn.previousElementSibling;

      btnOffset = btn.offsetLeft;
      btnWidth = btn.offsetWidth;
      tooltip = fn.querySelector("." + this.config.tooltipClass);
      tipWidth = tooltip.clientWidth;
      container = fn.parentNode;
      contWidth = container.clientWidth;
      contOffset = container.offsetLeft;
      wrapWidth = fn.offsetWidth;
      wrapMove = -(wrapWidth / 2 - contWidth / 2);
      windowWidth = window.innerWidth || window.availWidth;

      // Footnote overflows to the left
      if (contOffset + wrapMove < 0) {
        wrapMove = wrapMove - (contOffset + wrapMove);
      }
      // Footnote overflows to the right
      else if (contOffset + wrapMove + wrapWidth + this.scrollBarWidth > windowWidth) {
          wrapMove = wrapMove - (contOffset + wrapMove + wrapWidth + this.scrollBarWidth + contWidth / 2 - windowWidth);
        }

      fn.style.left = wrapMove + "px";
      wrapOffset = contOffset + wrapMove;
      tipOffset = contOffset - wrapOffset + contWidth / 2 - tipWidth / 2;
      tooltip.style.left = tipOffset + "px";
    }

    /**
     * Removes element, mostly used for footnotes.
     * @param  {Element} el
     */

  }, {
    key: "removeFootnoteChild",
    value: function removeFootnoteChild(el) {
      return el.parentNode.removeChild(el);
    }

    /**
     * Delays and withholds function triggering in events. Based on https://davidwalsh.name/javascript-debounce-function
     * @param  {Function} func      [The function to after the delays]
     * @param  {Number}   wait      [The delay in milliseconds]
     * @param  {Boolean}  immediate [if true, triggers the function on the leading edge rather than the trailing]
     * @return {Function}           [It's a closure, what did you expect?]
     */

  }, {
    key: "debounce",
    value: function debounce(func, wait, immediate) {
      var timeout;
      return function () {
        var _this2 = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(_this2, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (immediate && !timeout) func.apply(this, args);
      };
    }

    /**
     * Action to be attached to the resize event and recalculate the position of the active footnotes.
     */

  }, {
    key: "resizeAction",
    value: function resizeAction() {
      var _this3 = this;

      var footnotes = document.querySelectorAll("." + this.config.activeFnClass);

      if (footnotes.length) {
        [].forEach.call(footnotes, function (fn) {
          _this3.calculateOffset(fn);
          _this3.calculateSpacing(fn);
        });
      }
    }

    /**
     * Returns the height of the document. Used to find out if the footnote overflows the content
     * @return {Number} [see description]
     */

  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return document.documentElement.scrollHeight;
    }

    /**
     * Calculates if the footnote should appear above or below the button
     * @param  {Element}  fn     [The footnote in question]
     * @param  {Number}   height [By now the footnote is about to show up and we use the previous value, this one, to check if the footnote is overflow the document]
     */

  }, {
    key: "calculateSpacing",
    value: function calculateSpacing(fn, height) {
      var bcr = void 0,
          bch = void 0,
          bcb = void 0,
          margins = void 0,
          windowHeight = void 0;
      margins = this.calculateMargins(fn);
      windowHeight = window.innerHeight || window.availHeight;

      bcr = fn.getBoundingClientRect();
      bch = bcr.height;
      bcb = bcr.bottom;

      if (height < this.getScrollHeight() || bcb > windowHeight - margins.bottom) {
        fn.classList.add(this.config.fnOnTopClass);
      } else if (windowHeight - (bch + margins.top) > bcb && fn.classList.contains(this.config.fnOnTopClass)) {
        fn.classList.remove(this.config.fnOnTopClass);
      }
    }

    /**
     * Action to be attached to the scroll event to verify if we should change the position of the footnote using the available space.
     */

  }, {
    key: "scrollAction",
    value: function scrollAction() {
      var _this4 = this;

      var footnotes = document.querySelectorAll("." + this.config.activeFnClass);

      if (footnotes.length) {
        var windowHeight = window.innerHeight || window.availHeight,
            margins = this.calculateMargins(footnotes[0]);

        [].forEach.call(footnotes, function (el) {
          _this4.calculateSpacing(el);
        });
      }
    }

    /**
     * Returns the computed margins of an element, used to calculate the position and spacing.
     * @param  {Element} fn  [The footnote]
     * @return {Object}      [An object containing all margins]
     */

  }, {
    key: "calculateMargins",
    value: function calculateMargins(fn) {
      var computedStyle = window.getComputedStyle(fn, null);
      return {
        top: parseFloat(computedStyle.marginTop),
        right: parseFloat(computedStyle.marginRight),
        bottom: parseFloat(computedStyle.marginBottom),
        left: parseFloat(computedStyle.marginLeft)
      };
    }

    /**
     * This is set on click and touchend events for the body and removes the footnotes when you click/tap outside them
     * @param  {Event}
     */

  }, {
    key: "documentAction",
    value: function documentAction(ev) {
      if (!ev.target.closest("." + this.config.fnContainer)) this.dismissFootnotes();
    }

    /**
     * Dismisses active footnotes when the ESC key is hit and the current active element is a footnote. Returns focus to the footnote button.
     * @param  {Event} e
     */

  }, {
    key: "dismissOnEsc",
    value: function dismissOnEsc(ev) {
      if (ev.keyCode === 27 && document.activeElement.matches("." + this.config.fnContentClass)) {
        document.activeElement.closest("." + this.config.activeFnClass).previousElementSibling.focus();
        return this.dismissFootnotes();
      }
    }

    /**
     * Removes all open footnotes (and also the backdrop, remember it?)
     */

  }, {
    key: "dismissFootnotes",
    value: function dismissFootnotes() {
      var _this5 = this;

      var footnotes = document.querySelectorAll("." + this.config.activeFnClass);

      if (footnotes.length) {
        [].forEach.call(footnotes, function (el) {
          el.previousElementSibling.classList.remove(_this5.config.activeBtnClass);
          el.addEventListener('transitionend', _this5.removeFootnoteChild(el), false);
          el.classList.remove(_this5.config.activeFnClass);
        });
      }

      if (document.body.classList.contains(this.config.backdropClass)) document.body.classList.remove(this.config.backdropClass);
    }

    /**
     * Opens pandora's box. This function crosses every footnote and makes all the replacements and then sets up every eventListener for the script to work.
     */

  }, {
    key: "init",
    value: function init() {
      var _this6 = this;

      [].forEach.call(this.footnotes, function (fns, i) {
        var currentScope = fns[0].closest(_this6.config.scope);

        [].forEach.call(fns, function (fn, i) {
          var fnContent = void 0,
              fnHrefId = void 0,
              fnId = void 0,
              ref = void 0,
              fnRefN = void 0,
              footnote = void 0;

          fnRefN = i + 1;
          fnHrefId = fn.querySelector(_this6.config.supQuery).getAttribute('href');

          fnContent = _this6.removeBackLinks(fn.innerHTML.trim(), fnHrefId);

          fnContent = fnContent.replace(/"/g, "&quot;").replace(/&lt;/g, "&ltsym;").replace(/&gt;/g, "&gtsym;");

          if (fnContent.indexOf("<") !== 0) fnContent = "<p>" + fnContent + "</p>";

          // Gotta escape `:` used within a querySelector so JS doesn't think you're looking for a pseudo-element.
          ref = currentScope.querySelector(fnHrefId.replace(':', '\\:'));

          footnote = "<div class=\"" + _this6.config.fnContainer + "\">" + _this6.buildButton(fnHrefId, fn.id, fnRefN, fnContent) + "</div>";

          ref.insertAdjacentHTML('afterend', footnote);
          ref.parentNode.removeChild(ref);
        });
      });

      // Setting up events

      [].forEach.call(document.querySelectorAll("." + this.config.buttonClass), function (el) {
        el.addEventListener("click", _this6.clickAction.bind(_this6));
      });

      window.addEventListener("resize", this.debounce(this.resizeAction.bind(this), 100));
      window.addEventListener("scroll", this.debounce(this.scrollAction.bind(this), 100));
      window.addEventListener("keyup", this.dismissOnEsc.bind(this));
      document.body.addEventListener("click", this.documentAction.bind(this));
      document.body.addEventListener("touchend", this.documentAction.bind(this));

      this.divFootnotes.forEach(function (el) {
        return el.parentNode.removeChild(el);
      });
    }
  }]);

  return BareFoot;
}();

// initiate

var lf = new BareFoot({
  scope: "article"
});
lf.init();
