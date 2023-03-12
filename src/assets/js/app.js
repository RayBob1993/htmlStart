(function ($) {
  class App {
    constructor () {
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
    }

    init () {
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
    }

    datepicker () {
      // http://t1m0n.name/air-datepicker/docs/index-ru.html
      if (typeof ($.fn.datepicker) === 'undefined') {
        return;
      }

      $('.field__input--datepicker').datepicker();
    }

    validation () {
      if (typeof ($.fn.validate) === 'undefined') {
        return;
      }

      $.validator.addMethod('cyrillic', function(value, element) {
        return /[а-яА-ЯЁё]/.test(value);
      });

      $('.form').each(function(index, el) {
        $(this).validate({
          errorElement: 'div',
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
          unhighlight: function(element, errorClass, validClass) {
            $(element)
              .parents('.form-group')
              .removeClass(errorClass)
              .addClass(validClass);
          }
        });
      });
    }

    select2Init () {
      if (typeof ($.fn.select2) === 'undefined') {
        return;
      }

      $('.field__input--select').each(function(index, el) {
        const select = $(el);
        const placeholder = select.data('placeholder');

        select.select2({
          placeholder: placeholder,
          allowClear: true
        });
      });
    }

    dropdownClickOutsideDisable () {
      const dropdown = $('.disable-outside-click');
      const dropdownMenu = dropdown.find('.dropdown-menu');

      dropdownMenu.on('click.bs.dropdown', function(event) {
        event.stopPropagation();
        event.preventDefault();
      });
    }

    swiperInit () {
      if (typeof window.Swiper === 'undefined') {
        return;
      }

      const mySwiper = new Swiper('#reviewsSlider', {
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
    }

    tabsSwiperFix () {
      $('a[data-toggle="tab"]').on('shown.bs.tab', function(event) {
        const activeTab = $($(event.target).attr('href'));
        const activeTabSwiper = activeTab.find('.swiper-container');

        if (
          !activeTabSwiper.length ||
          typeof window.Swiper === 'undefined'
        ) {
          return;
        }

        activeTabSwiper[0].swiper.update();
      });
    }

    fancyboxInit () {
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
          axis: 'y'
        },
        buttons: [
          'slideShow',
          'fullScreen',
          'thumbs',
          'zoom',
          'close'
        ]
      });
    }

    wowJs () {
      if (typeof window.WOW === 'undefined') {
        return this;
      }

      const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'is-animation',
        offset: 100,
        mobile: true,
        live: true,
        scrollContainer: null
      });

      wow.init();
    }

    inputTelMaskInit () {
      if (typeof ($.fn.mask) === 'undefined') {
        return;
      }

      $('input[type="tel"]').mask('7 (999) 999 99 99');
    }

    scrollTo () {
      const scrollTo = $('[data-scroll-to]');

      scrollTo.on('click', function() {
        const target = $($(this).attr('href') || $(this).data('scroll-to'));
        const offset = target.offset().top;

        $('html, body').animate({
          scrollTop: offset
        }, 300);
      });
    }

    labelPlaceholder () {
      const labelPlaceholdersSelector = '.form-item__label-placeholder';
      const labelPlaceholders = $(labelPlaceholdersSelector);
      const inputs = labelPlaceholders.find('.field');

      if (!labelPlaceholders.length) {
        return;
      }

      function onFocus () {
        const labelPlaceholder = $(this).parents(labelPlaceholdersSelector);

        labelPlaceholder.addClass('is-filled');
      }

      function onBlur () {
        const labelPlaceholder = $(this).parents(labelPlaceholdersSelector);
        const hasValue = !!$(this).val().trim();

        if (!hasValue) {
          labelPlaceholder.removeClass('is-filled');
        }
      }

      function onEach (index, el) {
        const labelPlaceholder = $(this).parents(labelPlaceholdersSelector);
        const value = $(el).val().trim();

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
    }

    // ============================ Прокрутка к началу страницы
    pageUp (selector, speed) {
      speed = speed || 200;

      const button = $(selector);

      button.on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        }, speed);
      });

      this.pageUpFadeToggle(button);
    }

    // ============================ Показывать кнопку вверх только если был скролл
    pageUpFadeToggle (button, length) {
      length = length || 200;

      $(window).on('load scroll', function() {
        const scrollTop = $(this).scrollTop();

        scrollTop >= length
          ? button.fadeIn()
          : button.fadeOut()
        ;
      });
    }

    isMobileDevice () {
      return {
        Android: function() {
          return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
          return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
          return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()
        }
      }
    }

    counter (prfx) {
      prfx = prfx || '';

      const counter = $('.counter');
      const field = counter.find('.field__input');

      function fieldCount (el) {
        // Мин. значение
        const min = el.data('min') || false;
        // Макс. значение
        const max = el.data('max') || false;
        // Кнопка уменьшения кол-ва
        const dec = el.prev('.dec');
        // Кнопка увеличения кол-ва
        const inc = el.next('.inc');

        function init (el) {
          if (!el.attr('disabled')) {
            dec.on('click', decrement);
            inc.on('click', increment);
          }

          // Уменьшим значение
          function decrement () {
            let value = parseInt(el.val());
            value--;

            if (!min || value >= min) {
              el.val(value + prfx);
            }
          }

          // Увеличим значение
          function increment () {
            let value = parseInt(el.val());

            value++;

            if (!max || value <= max) {
              el.val(value++ + prfx);
            }
          }

        }

        el.each(function() {
          init($(this))
        });
      }

      if (field.length) {
        field.each(function() {
          fieldCount($(this))
        });
      }
    }

    rangeSlider () {
      const rangeSlider = $('.range-slider');
      const sliderDefaultOptions = {
        connect: true,
        format: this.priceFormat
      };

      if (typeof window.noUiSlider === 'undefined') {
        return;
      }

      rangeSlider.each(function(index, el) {
        const group = $(el);
        const rangeSliderMin = group.find('.range-slider__min');
        const rangeSliderMax = group.find('.range-slider__max');

        const slider = group.find('.range-slider__slider');
        const sliderUserOption = slider.data('options');
        const sliderNode = slider[0];

        noUiSlider.create(sliderNode, $.extend(sliderDefaultOptions, sliderUserOption, true));

        sliderNode.noUiSlider.on('update', function(values, handle) {
          const value = values[handle];

          handle
            ? rangeSliderMax.val(value)
            : rangeSliderMin.val(value)
        });

        rangeSliderMin.on('change', function() {
          sliderNode.noUiSlider.set([$(this).val(), null]);
        });

        rangeSliderMax.on('change', function() {
          sliderNode.noUiSlider.set([null, $(this).val()]);
        });
      });
    }
  }

  const app = new App();
})(jQuery);
