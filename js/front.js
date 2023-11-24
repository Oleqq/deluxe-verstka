//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
      el: '.promo-swiper-pagination',
      clickable: 'true',
    },
});


const complexMarketingSwiper = new Swiper(".complex-marketing-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    watchSlidesProgress: 'true',
    navigation: {
        nextEl: ".complex-marketing-swiper-button-next",
        prevEl: ".complex-marketing-swiper-button-prev",
    },
    pagination: {
      el: '.complex-marketing-swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
        // when window width is >= 1200px
        1500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            simulateTouch: false,
            // autoHeight: false,
        },
        768: {
            slidesPerView: 2.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            simulateTouch: true,
        },
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            // autoHeight: true,
        },
    },
});

const otherServicesSwiper = new Swiper(".other-services-swiper", {
    speed: 1000,
    simulateTouch: "false",
    watchOverflow: "true",
    pagination: {
        el: ".other-services-swiper-pagination",
        clickable: "true",
    },
    watchSlidesProgress: "true",
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            grid: {
                fill: "row",
                rows: 3,
            },
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            grid: {
                fill: "row",
                rows: 4,
            },
            slidesPerView: 2,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
});


const sliderProjectGalleryThumbs = new Swiper(".slider__thumbs--projectgallery .swiper", {
	direction: "vertical",
	slidesPerView: 4,
	spaceBetween: 60,
	navigation: {
		nextEl: ".slider__thumbs--projectgallery__next",
		prevEl: ".slider__thumbs--projectgallery__prev"
	},
	mousewheel: "true",
	freeMode: "true",
	breakpoints: {
		0: {
			direction: "horizontal",
            spaceBetween: 5,
            slidesPerView: 5,
            mousewheel: "false",
		},
		575: {
            spaceBetween: 10,
            // slidesPerView: 5,
            slidesPerView: 4.5,
			direction: "horizontal",
		},
		768: {
            spaceBetween: 15,
            // slidesPerView: 5,
            slidesPerView: 3.5,
			direction: "vertical",
		},
        992: {
            spaceBetween: 20,
            slidesPerView: 3.5,
			direction: "vertical",
        },
        1200: {
            spaceBetween: 10,
            slidesPerView: 3.7,
        },
        1500: {
            spaceBetween: 10,
            slidesPerView: 3.7,
        },
        1700: {
            spaceBetween: 10,
            slidesPerView: 3.5,
        },
        1921: {
            spaceBetween: 15,
            slidesPerView: 3.4,
        }
	}
});


const sliderProjectGalleryImages = new Swiper('.slider__images--projectgallery .swiper', {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 20,
	mousewheel: false,
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev"
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderProjectGalleryThumbs
	},
	breakpoints: {
		0: {
			direction: "horizontal",
		},
		768: {
			direction: "vertical",
		}
	}
});

const feedbackSwiper = new Swiper(".feedback-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 1000,
    simulateTouch: "true",
    spaceBetween: 30,
    watchOverflow: "true",
    centeredSlides: false,
    navigation: {
        nextEl: ".feedback-swiper-button-next",
        prevEl: ".feedback-swiper-button-prev",
    },
    // autoplay: "true",
    pagination: {
      el: ".feedback-swiper-pagination",
      clickable: "true",
      type: "fraction",
    },
    breakpoints: {
        300: {
            centeredSlides: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1200: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
            simulateTouch: "true",
        },
        1600: {
            spaceBetween: 20,
        },
    },
});

const clientFeedbackSwiper = new Swiper(".client-feedback-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 0,
    watchOverflow: true,
    pagination: {
      el: '.client-feedback-swiper-pagination',
      clickable: 'true',
    },
});

//Кнопка прокрутки наверх
var scrollButton = document.getElementById("top-button");
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) {
        scrollButton.classList.add("show");
    }
    if (scrolled < coords / 2) {
        scrollButton.classList.remove("show");
    }
}
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", trackScroll);
scrollButton.addEventListener("click", backToTop);


//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};

//Подключение кастомного выпадающего списка
$('.select-filters').multipleSelect();

document.querySelectorAll('.add-counter .plus').forEach(item => {

    item.addEventListener('click', function () {

        ++item.parentElement.querySelector('input').value;

        if (item.parentElement.querySelector('input').value > 1) {

            item.parentElement.querySelector('.minus').classList.remove('min');

        }

    });

});

document.querySelectorAll('.add-counter .minus').forEach(item => {

    item.addEventListener('click', function () {

        --item.parentElement.querySelector('input').value;

        if (item.parentElement.querySelector('input').value < 2) {

            item.parentElement.querySelector('input').value = 1

            item.classList.add('min');

        }

    });

});










/**
 * menu-aim is a jQuery plugin for dropdown menus that can differentiate
 * between a user trying hover over a dropdown item vs trying to navigate into
 * a submenu's contents.
 *
 * menu-aim assumes that you have are using a menu with submenus that expand
 * to the menu's right. It will fire events when the user's mouse enters a new
 * dropdown item *and* when that item is being intentionally hovered over.
 *
 * __________________________
 * | Monkeys  >|   Gorilla  |
 * | Gorillas >|   Content  |
 * | Chimps   >|   Here     |
 * |___________|____________|
 *
 * In the above example, "Gorillas" is selected and its submenu content is
 * being shown on the right. Imagine that the user's cursor is hovering over
 * "Gorillas." When they move their mouse into the "Gorilla Content" area, they
 * may briefly hover over "Chimps." This shouldn't close the "Gorilla Content"
 * area.
 *
 * This problem is normally solved using timeouts and delays. menu-aim tries to
 * solve this by detecting the direction of the user's mouse movement. This can
 * make for quicker transitions when navigating up and down the menu. The
 * experience is hopefully similar to amazon.com/'s "Shop by Department"
 * dropdown.
 *
 * Use like so:
 *
 *      $("#menu").menuAim({
 *          activate: $.noop,  // fired on row activation
 *          deactivate: $.noop  // fired on row deactivation
 *      });
 *
 *  ...to receive events when a menu's row has been purposefully (de)activated.
 *
 * The following options can be passed to menuAim. All functions execute with
 * the relevant row's HTML element as the execution context ('this'):
 *
 *      .menuAim({
 *          // Function to call when a row is purposefully activated. Use this
 *          // to show a submenu's content for the activated row.
 *          activate: function() {},
 *
 *          // Function to call when a row is deactivated.
 *          deactivate: function() {},
 *
 *          // Function to call when mouse enters a menu row. Entering a row
 *          // does not mean the row has been activated, as the user may be
 *          // mousing over to a submenu.
 *          enter: function() {},
 *
 *          // Function to call when mouse exits a menu row.
 *          exit: function() {},
 *
 *          // Selector for identifying which elements in the menu are rows
 *          // that can trigger the above events. Defaults to "> li".
 *          rowSelector: "> li",
 *
 *          // You may have some menu rows that aren't submenus and therefore
 *          // shouldn't ever need to "activate." If so, filter submenu rows w/
 *          // this selector. Defaults to "*" (all elements).
 *          submenuSelector: "*",
 *
 *          // Direction the submenu opens relative to the main menu. Can be
 *          // left, right, above, or below. Defaults to "right".
 *          submenuDirection: "right"
 *      });
 *
 * https://github.com/kamens/jQuery-menu-aim
 * MIT License
*/
(function($) {

    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });
  
        return this;
    };
  
    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop
            }, opts);
  
        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu
  
        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
                mouseLocs.push({x: e.pageX, y: e.pageY});
  
                if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                    mouseLocs.shift();
                }
            };
  
        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
  
                // If exitMenu is supplied and returns true, deactivate the
                // currently active row on menu exit.
                if (options.exitMenu(this)) {
                    if (activeRow) {
                        options.deactivate(activeRow);
                    }
  
                    activeRow = null;
                }
            };
  
        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }
  
                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function() {
                options.exit(this);
            };
  
        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
                activate(this);
            };
  
        /**
         * Activate a menu row.
         */
        var activate = function(row) {
                if (row == activeRow) {
                    return;
                }
  
                if (activeRow) {
                    options.deactivate(activeRow);
                }
  
                options.activate(row);
                activeRow = row;
            };
  
        /**
         * Possibly activate a menu row. If mouse movement indicates that we
         * shouldn't activate yet because user may be trying to enter
         * a submenu's content, then delay and check again later.
         */
        var possiblyActivate = function(row) {
                var delay = activationDelay();
  
                if (delay) {
                    timeoutId = setTimeout(function() {
                        possiblyActivate(row);
                    }, delay);
                } else {
                    activate(row);
                }
            };
  
        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         */
        var activationDelay = function() {
                if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
                    // If there is no other submenu row already active, then
                    // go ahead and activate immediately.
                    return 0;
                }
  
                var offset = $menu.offset(),
                    upperLeft = {
                        x: offset.left,
                        y: offset.top - options.tolerance
                    },
                    upperRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: upperLeft.y
                    },
                    lowerLeft = {
                        x: offset.left,
                        y: offset.top + $menu.outerHeight() + options.tolerance
                    },
                    lowerRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: lowerLeft.y
                    },
                    loc = mouseLocs[mouseLocs.length - 1],
                    prevLoc = mouseLocs[0];
  
                if (!loc) {
                    return 0;
                }
  
                if (!prevLoc) {
                    prevLoc = loc;
                }
  
                if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                    prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                    // If the previous mouse location was outside of the entire
                    // menu's bounds, immediately activate.
                    return 0;
                }
  
                if (lastDelayLoc &&
                        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                    // If the mouse hasn't moved since the last time we checked
                    // for activation status, immediately activate.
                    return 0;
                }
  
                // Detect if the user is moving towards the currently activated
                // submenu.
                //
                // If the mouse is heading relatively clearly towards
                // the submenu's content, we should wait and give the user more
                // time before activating a new row. If the mouse is heading
                // elsewhere, we can immediately activate a new row.
                //
                // We detect this by calculating the slope formed between the
                // current mouse location and the upper/lower right points of
                // the menu. We do the same for the previous mouse location.
                // If the current mouse location's slopes are
                // increasing/decreasing appropriately compared to the
                // previous's, we know the user is moving toward the submenu.
                //
                // Note that since the y-axis increases as the cursor moves
                // down the screen, we are looking for the slope between the
                // cursor and the upper right corner to decrease over time, not
                // increase (somewhat counterintuitively).
                function slope(a, b) {
                    return (b.y - a.y) / (b.x - a.x);
                };
  
                var decreasingCorner = upperRight,
                    increasingCorner = lowerRight;
  
                // Our expectations for decreasing or increasing slope values
                // depends on which direction the submenu opens relative to the
                // main menu. By default, if the menu opens on the right, we
                // expect the slope between the cursor and the upper right
                // corner to decrease over time, as explained above. If the
                // submenu opens in a different direction, we change our slope
                // expectations.
                if (options.submenuDirection == "left") {
                    decreasingCorner = lowerLeft;
                    increasingCorner = upperLeft;
                } else if (options.submenuDirection == "below") {
                    decreasingCorner = lowerRight;
                    increasingCorner = lowerLeft;
                } else if (options.submenuDirection == "above") {
                    decreasingCorner = upperLeft;
                    increasingCorner = upperRight;
                }
  
                var decreasingSlope = slope(loc, decreasingCorner),
                    increasingSlope = slope(loc, increasingCorner),
                    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                    prevIncreasingSlope = slope(prevLoc, increasingCorner);
  
                if (decreasingSlope < prevDecreasingSlope &&
                        increasingSlope > prevIncreasingSlope) {
                    // Mouse is moving from previous location towards the
                    // currently activated submenu. Delay before activating a
                    // new menu row, because user may be moving into submenu.
                    lastDelayLoc = loc;
                    return DELAY;
                }
  
                lastDelayLoc = null;
                return 0;
            };
  
        /**
         * Hook up initial menu events
         */
        $menu
            .mouseleave(mouseleaveMenu)
            .find(options.rowSelector)
                .mouseenter(mouseenterRow)
                .mouseleave(mouseleaveRow)
                .click(clickRow);
  
        $(document).mousemove(mousemoveDocument);
  
    };
  })(jQuery);
  
  
  
  
  
  
  
  jQuery(document).ready(function($){
  //open/close mega-navigation
  $('.cd-dropdown-trigger').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });
  
  //close meganavigation
  $('.cd-dropdown .cd-close').on('click', function(event){
    event.preventDefault();
    toggleNav();
  });
  
  //on mobile - open submenu
  $('.has-children').children('a').on('click', function(event){
    //prevent default clicking on direct children of .has-children 
    event.preventDefault();
    var selected = $(this);
    selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
  });
  
  //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
  var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
  $('.cd-dropdown-content').menuAim({
        activate: function(row) {
          $(row).children().addClass('is-active').removeClass('fade-out');
          if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
          $(row).children().removeClass('is-active');
          if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
            $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
            $(row).children('ul').addClass('fade-out')
          }
        },
        exitMenu: function() {
          $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
          return true;
        },
        submenuDirection: submenuDirection,
    });
  
  //submenu items - go back link
  $('.go-back').on('click', function(){
    var selected = $(this),
      visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
    selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
  }); 
  
  function toggleNav(){
    var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
    $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
    $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
    if( !navIsVisible ) {
      $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
        $('.has-children ul').addClass('is-hidden');
        $('.move-out').removeClass('move-out');
        $('.is-active').removeClass('is-active');
      });	
    }
  }
  
  //IE9 placeholder fallback
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  if(!Modernizr.input.placeholder){
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        }
    }).blur(function() {
       var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
           input.val('');
        }
        })
    });
  }
  });