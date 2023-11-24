// script.js


class Dropdown {
  constructor(container) {
    this.container = container;
    this.selectedMenu = this.container.querySelector('.selected-menu');
    this.menuList = this.container.querySelector('.menu-list');
    this.setupEvents();
  }

  setupEvents() {
    this.selectedMenu.addEventListener('click', (event) => {
      event.stopPropagation();
      this.container.classList.toggle('open');
      this.updateTogglerRotation();
    });

    this.menuList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const selectedMenuText = event.target.textContent;
        this.selectedMenu.textContent = selectedMenuText;
        this.container.classList.remove('open');
        this.updateTogglerRotation();
      }
    });

    document.addEventListener('click', (event) => {
      if (!this.container.contains(event.target)) {
        this.container.classList.remove('open');
        this.updateTogglerRotation();
      }
    });
  }

  updateTogglerRotation() {
    const isOpen = this.container.classList.contains('open');
    this.selectedMenu.style.setProperty('--toggler-rotation', isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)');
  }
}

function setupDropdowns() {
  const dropdowns = document.querySelectorAll('.menu-dropdown');
  dropdowns.forEach((dropdown) => {
    new Dropdown(dropdown);
  });
}

setupDropdowns();



























document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tabs__link");
    const tabPanes = document.querySelectorAll(".tab-pane");
  
    tabLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        tabLinks.forEach((tabLink) => tabLink.classList.remove("tabs__link--active"));
        link.classList.add("tabs__link--active");
  
        const targetId = link.getAttribute("href").substring(1);
        tabPanes.forEach((pane) => {
          pane.classList.remove("tab-pane--active");
        });
  
        document.getElementById(targetId).classList.add("tab-pane--active");
      });
    });
  });
  



  





  document.addEventListener("DOMContentLoaded", function () {
    const tabContent = document.querySelector(".tab-content");

    tabContent.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("show-more-button")) {
            const tabSubtitle = target.closest(".tab__block").querySelector(".tab__subtitle");

            if (tabSubtitle.style.maxHeight === "none") {
                tabSubtitle.style.maxHeight = "8em";
                tabSubtitle.style.webkitLineClamp = "4";
                target.textContent = "Показать больше";
            } else {
                tabSubtitle.style.maxHeight = "none";
                tabSubtitle.style.webkitLineClamp = "unset";
                target.textContent = "Скрыть";
            }
        }

        // Add logic for the "Показать все" and "Скрыть все" buttons here
    });
});

  
  

























// Инициализация других слайдеров
var servicesSlider = new Swiper('.service__slider', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.service__slider-button-next',
    prevEl: '.service__slider-button-prev',
  },
});

var specialofferSlider = new Swiper('.special-offer__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.special-offer__pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +
             '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="#BB9767">' +
             '<circle cx="5" cy="5" r="5" />' +
             '</svg></span>';
    },
  },
  on: {
    slideChange: function () {
      var bullets = this.pagination.bullets;
      for (var i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove('special-offer__bullet--active');
      }
      bullets[this.activeIndex].classList.add('special-offer__bullet--active');
    },
  },
});

var blogSlider = new Swiper('.blog__slider', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.blog__slider-button-next',
    prevEl: '.blog__slider-button-prev',
  },
});

var workSlider = new Swiper('.work__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 3,
  navigation: {
    nextEl: '.work__slider-button-next',
    prevEl: '.work__slider-button-prev',
  },
  breakpoints: {
    567: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 'auto',
    },
    
  },
});


  






  






function toggleContent(event) {
  const target = event.currentTarget;
  target.classList.toggle('active');
  const toggle = target.querySelector('.footer__toggle') || target.querySelector('.services__toggle');
  const addressesAndPhones = target.querySelectorAll('.footer__address, .footer__tel');
  const servicesList = target.querySelector('.services__card-wrapper');

  if (addressesAndPhones.length > 0) {
    addressesAndPhones.forEach(element => {
      element.style.display = target.classList.contains('active') ? 'block' : 'none';
    });
    toggle.style.transform = target.classList.contains('active') ? 'rotateX(180deg)' : 'rotateX(0deg)';
  }

  if (servicesList) {
    servicesList.style.display = target.classList.contains('active') ? 'block' : 'none';
    toggle.style.transform = target.classList.contains('active') ? 'rotateX(180deg)' : 'rotateX(0deg)';
  }
}

function addClickHandlers() {
  const isMobile = window.innerWidth < 767;
  // Для футера
  const footerColumns = document.querySelectorAll('.footer__column');
  footerColumns.forEach(column => {
    if (isMobile) {
      column.addEventListener('click', toggleContent);
    } else {
      column.removeEventListener('click', toggleContent);
    }
  });

  // Для секции услуг
  const serviceCards = document.querySelectorAll('.services__card');
  serviceCards.forEach(card => {
    if (isMobile) {
      card.addEventListener('click', toggleContent);
    } else {
      card.removeEventListener('click', toggleContent);
    }
  });
}

document.addEventListener('DOMContentLoaded', addClickHandlers);
window.addEventListener('resize', addClickHandlers);












document.addEventListener('DOMContentLoaded', function() {
  const servicesShowButtons = document.querySelectorAll('.services__show');

  servicesShowButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const servicesList = document.querySelector(`[data-target="${targetId}"]`);
      const listItems = servicesList.querySelectorAll('.services__list-item');
      const isExpanded = servicesList.style.maxHeight !== '160px';

      if (isExpanded) {
        servicesList.style.maxHeight = '160px';
        this.textContent = 'Все';
        listItems.forEach(item => {
          item.style.webkitTextFillColor = 'transparent';
        });
      } else {
        servicesList.style.maxHeight = null;
        this.textContent = 'Скрыть';
        listItems.forEach(item => {
          item.style.webkitTextFillColor = 'unset';
        });
      }
    });
  });

  // Изначально скрываем элементы
  const hiddenServicesLists = document.querySelectorAll('.services__list.hidden');
  hiddenServicesLists.forEach(list => {
    list.style.maxHeight = '160px';
    list.classList.remove('hidden');
  });
});











document.addEventListener('DOMContentLoaded', function() {
  const showButton = document.querySelector('.info-paragraph__show');
  const moreParagraph = document.querySelector('.info-paragraph-more');
  const isMobile = window.innerWidth < 991;

  if (isMobile) {
    showButton.textContent = 'Подробнее';
    moreParagraph.style.display = 'none';
  }

  showButton.addEventListener('click', function(e) {
    e.preventDefault();
    moreParagraph.style.display = moreParagraph.style.display === 'none' ? 'block' : 'none';

    // Изменяем текст кнопки на "Скрыть" и обратно
    if (showButton.textContent === 'Скрыть') {
      showButton.textContent = 'Подробнее';
    } else {
      showButton.textContent = 'Скрыть';
    }

    // Добавляем или удаляем класс 'visible' у элементов
    const elementsToToggle = document.querySelectorAll('.info-paragraph');
    elementsToToggle.forEach(element => {
      element.classList.toggle('visible');
    });
  });
});







document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.treatment__positive, .treatment__negative');

  toggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
          const list = toggle.querySelector('.treatment__list');
          list.classList.toggle('active');
          const toggleIcon = toggle.querySelector('.treatment__toggle');
          toggleIcon.style.transform = list.classList.contains('active') ? 'rotateX(180deg)' : 'rotateX(0deg)';
      });
  });
});















const burgerMenu = document.getElementById('burger-menu');
const burgerMenuMobile = document.getElementById('burger-menu-mobile');
const fullScreenMenu = document.getElementById('fullscreen-menu');

function toggleMenu() {
  burgerMenu.classList.toggle('open');
  fullScreenMenu.classList.toggle('active');
}

function toggleMenuMobile() {
  burgerMenuMobile.classList.toggle('open');
  fullScreenMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', toggleMenu);
burgerMenuMobile.addEventListener('click', toggleMenuMobile);





















// Функция для плавного скролла к верху страницы (к первому слайду)
function scrollToTop() {
    const firstSlide = document.querySelector('.slide-main');
    if (firstSlide) {
        firstSlide.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл к первому слайду
    }
}

// Функция для плавного скролла к блоку в определенном направлении (вверх или вниз)
function scrollToBlock(direction) {
    const currentSlide = document.querySelector('.slide-main'); // Выбираем текущий слайд

    let blockToScroll;
    if (direction === 'up') {
        blockToScroll = currentSlide.previousElementSibling; // Получаем предыдущий блок перед слайдом
    } else {
        blockToScroll = currentSlide.nextElementSibling; // Получаем следующий блок после слайда
    }

    if (blockToScroll) {
        blockToScroll.scrollIntoView({ behavior: 'smooth' }); // Плавно скроллим к блоку
    }
}

// Обработчик события скролла колеса мыши для движения в обе стороны
function handleScroll(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение скролла страницы

    if (event.deltaY > 0) {
        scrollToBlock('down'); // Вызываем функцию для плавного скролла к следующему блоку
    } else {
        scrollToBlock('up'); // Вызываем функцию для плавного скролла к предыдущему блоку
    }
}

// Находим первый слайд и добавляем обработчик события скролла колеса мыши
const firstSlide = document.querySelector('.slide-main');
if (firstSlide) {
    firstSlide.addEventListener('wheel', handleScroll);
}

// Находите кнопку или элемент, чтобы при клике на него вызвать функцию scrollToTop()
const scrollToTopButton = document.querySelector('.scroll-to-top-button');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
}



















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