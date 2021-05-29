(function ($) {

  var App = function () {
    // Точки для адаптивности
    this.mq = {
     xxl: 1600,
      xl: 1200,
      lg: 992,
      md: 768,
      sm: 576,
      xs: 480
    };

    // Формат цен
    this.priceFormat = wNumb({
      mark: '',
      thousand: ' '
    });

    this.init();
  };

  App.prototype = {
    init: function () {
      this.swiperInit();
      this.tabsSwiperFix();
      this.wowJs();
      this.dropdownClickOutsideDisable();
      this.fancyboxInit();
      this.inputTelMaskInit();
      this.counter();
      this.rangeSlider();
      this.labelPlaceholder();
      this.select2Init();
      this.datepicker();
      this.validation();
    },

    datepicker: function () {
      // http://t1m0n.name/air-datepicker/docs/index-ru.html
      if (typeof ($.fn.datepicker) === 'undefined') {
        return;
      }

      $('.field__input--datepicker').datepicker();
    },

    validation: function () {
      if (typeof ($.fn.validate) === 'undefined') {
        return;
      }

      $.validator.addMethod('cyrillic', function(value, element) {
        return /[а-яА-ЯЁё]/.test(value);
      });

      $('.form').each(function(index, el){
        $(this).validate({
          errorElement: 'div',
          rules: {
            name: {
              required: true,
              cyrillic: true
            },
            email: {
              required: true,
              email: true
            },
            phone: {
              required: true,
              minlength: 16,
              maxlength: 16
            },
            policy: {
              required: true
            }
          },
          messages: {
            name: {
              required: 'Укажите своё имя',
              cyrillic: 'Поле может содержать только кириллические символы'
            },
            email: {
              required: 'Укажите свой email адрес',
              email: 'Ваш email адрес должен содержать символ @ и не содержать после себя символы .,/?| и подобных'
            },
            phone: {
              required: 'Укажите свой номер телефона',
              minlength: 'Длина телефона не должна привышать 11 символов',
              maxlength: 'Длина телефона не должна привышать 11 символов'
            },
            policy: {
              required: 'Примите согласие на обработку персональных данных'
            }
          },
          errorPlacement: function(error, element) {
            return error
              .addClass('form-group__error')
              .appendTo(element.parents('.form-group'));
          },
          highlight: function(element, errorClass, validClass) {
            $(element)
              .parents('.form-group')
              .addClass(errorClass)
              .removeClass(validClass);
          },
          unhighlight: function(element, errorClass, validClass){
            $(element)
              .parents('.form-group')
              .removeClass(errorClass)
              .addClass(validClass);
          }
        });
      });
    },

    select2Init: function () {
      if (typeof ($.fn.select2) === 'undefined') {
        return;
      }

      $('.field__input--select').each(function (index, el) {
        var select = $(el);
        var placeholder = select.data('placeholder');

        select.select2({
          placeholder: placeholder,
          allowClear: true
        });
      });
    },

    dropdownClickOutsideDisable: function () {
      var dropdown = $('.disable-outside-click');
      var dropdownMenu = dropdown.find('.dropdown-menu');

      dropdownMenu.on('click.bs.dropdown', function (event) {
        event.stopPropagation();
        event.preventDefault();
      });
    },

    swiperInit: function () {
      if (typeof window.Swiper === 'undefined') {
        return;
      }

      var mySwiper = new Swiper('#reviewsSlider', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          [this.mq.sm]: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      });
    },

    tabsSwiperFix: function () {
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {
        var activeTab = $($(event.target).attr('href'));
        var activeTabSwiper = activeTab.find('.swiper-container');

        if (
          !activeTabSwiper.length ||
          typeof window.Swiper === 'undefined'
        ) {
          return;
        }

        activeTabSwiper[0].swiper.update();
      });
    },

    fancyboxInit: function () {
      if (typeof ($.fn.fancybox) === 'undefined') {
        return;
      }

      $('[data-fancybox]').fancybox({
        backFocus: false,
        image: {
          protect: true
        },
        youtube: {
          controls: 0,
          showinfo: 0
        },
        thumbs: {
          autoStart: true,
          axis: 'x'
        },
        buttons: [
          'slideShow',
          'fullScreen',
          'thumbs',
          'zoom',
          'close'
        ]
      });
    },

    wowJs: function () {
      if (typeof window.WOW === 'undefined') {
        return this;
      }

      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'is-animation',
        offset: 100,
        mobile: true,
        live: true,
        scrollContainer: null
      });

      wow.init();
    },

    inputTelMaskInit: function () {
      if (typeof ($.fn.mask) === 'undefined') {
        return;
      }

      $('input[type="tel"]').mask('7 (999) 999 99 99');
    },

    scrollTo: function () {
      var scrollTo = $('[data-scroll-to]');

      scrollTo.on('click', function () {
        var target = $($(this).attr('href') || $(this).data('scroll-to'));
        var offset = target.offset().top;

        $('html, body').animate({
          scrollTop: offset
        }, 300);
      });
    },

    labelPlaceholder: function () {
      var labelPlaceholdersSelector = '.form-item__label-placeholder';
      var labelPlaceholders = $(labelPlaceholdersSelector);
      var inputs = labelPlaceholders.find('.field');

      if (!labelPlaceholders.length) {
        return;
      }

      function onFocus () {
        var labelPlaceholder = $(this).parents(labelPlaceholdersSelector);

        labelPlaceholder.addClass('is-filled');
      }

      function onBlur () {
        var labelPlaceholder = $(this).parents(labelPlaceholdersSelector);
        var hasValue = !!$(this).val().trim();

        if (!hasValue) {
          labelPlaceholder.removeClass('is-filled');
        }
      }

      function onEach (index, el) {
        var labelPlaceholder = $(this).parents(labelPlaceholdersSelector);
        var value = $(el).val().trim();

        if (value) {
          labelPlaceholder.addClass('is-filled');
        } else {
          labelPlaceholder.removeClass('is-filled');
        }
      }

      inputs
        .on('focus', onFocus)
        .on('blur', onBlur)
        .each(onEach);
    },

    // ============================ Прокрутка к началу страницы
    pageUp: function (selector, speed) {
      speed = speed || 200;

      var button = $(selector);

      button.on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        }, speed);
      });

      this.pageUpFadeToggle(button);
    },

    // ============================ Показывать кнопку вверх только если был скролл
    pageUpFadeToggle: function (button, length) {
      length = length || 200;

      $(window).on('load scroll', function () {
        var scrollTop = $(this).scrollTop();

        scrollTop >= length
          ? button.fadeIn()
          : button.fadeOut()
        ;
      });
    },

    isMobileDevice: function () {
      return {
        Android: function () {
          return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
          return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()
        }
      }
    },

    counter: function (prfx) {
      prfx = prfx || '';

      var counter = $('.counter');
      var field = counter.find('.field__input');

      function fieldCount (el) {
        // Мин. значение
        var min = el.data('min') || false;
        // Макс. значение
        var max = el.data('max') || false;
        // Кнопка уменьшения кол-ва
        var dec = el.prev('.dec');
        // Кнопка увеличения кол-ва
        var inc = el.next('.inc');

        function init (el) {
          if (!el.attr('disabled')) {
            dec.on('click', decrement);
            inc.on('click', increment);
          }

          // Уменьшим значение
          function decrement () {
            var value = parseInt(el.val());
            value--;

            if (!min || value >= min) {
              el.val(value + prfx);
            }
          }

          // Увеличим значение
          function increment () {
            var value = parseInt(el.val());

            value++;

            if (!max || value <= max) {
              el.val(value++ + prfx);
            }
          }

        }

        el.each(function () {
          init($(this))
        });
      }

      if (field.length) {
        field.each(function () {
          fieldCount($(this))
        });
      }
    },

    rangeSlider: function () {
      var rangeSlider = $('.range-slider');
      var sliderDefaultOptions = {
        connect: true,
        format: this.priceFormat
      };

      if (typeof window.noUiSlider === 'undefined') {
        return;
      }

      rangeSlider.each(function (index, el) {
        var group = $(el);
        var rangeSliderMin = group.find('.range-slider__min');
        var rangeSliderMax = group.find('.range-slider__max');

        var slider = group.find('.range-slider__slider');
        var sliderUserOption = slider.data('options');
        var sliderNode = slider[0];

        noUiSlider.create(sliderNode, $.extend(sliderDefaultOptions, sliderUserOption, true));

        sliderNode.noUiSlider.on('update', function (values, handle) {
          var value = values[handle];

          handle
            ? rangeSliderMax.val(value)
            : rangeSliderMin.val(value)
        });

        rangeSliderMin.on('change', function () {
          sliderNode.noUiSlider.set([$(this).val(), null]);
        });

        rangeSliderMax.on('change', function () {
          sliderNode.noUiSlider.set([null, $(this).val()]);
        });
      });
    }
  };

  var app = new App();
})(jQuery);
