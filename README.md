# htmlStart
## Запуск
* ```npm install```
* Как установили все зависимости для сборки, запускаем дев сервер ```npm run dev```
* Работаем

## Сборка билда
* ```npm run build```
Появится папка <b>dist</b> 

## Компоненты

* <a href="#titles">Заголовки</a>
* <a href="#lists">Списки</a>
* <a href="#icons">Иконки</a>
* <a href="#tables">Таблици</a>
* <a href="#buttons">Кнопки</a>
* <a href="#imgGalery">Галерея изображений</a>
* <a href="#sliders">Слайдер</a>
* <a href="#rangeSlider">Ползунок диапазона цен</a>
* <a href="#grid">Flexbox сетка</a>
* <a href="#tabs">Вкладки</a>
* <a href="#dropdowns">Дропдауны</a>
* <a href="#responsiveNav">Адаптивное меню</a>
* <a href="#modals">Модальные окна</a>
* <a href="#imgs">Изображения</a>
* <a href="#counters">Счётчик для input полей</a>
* <a href="#breadcrumbs">Хлебные крошки</a>
* <a href="#pager">Переключатель страниц</a>
* <a href="#sections">Секции</a>
* <a href="#forms">Формы</a>
* <a href="#mediaQueries">Медиа запросы</a>
* <a href="#formTelMask">Маскировка полей телефонов</a>
* <a href="#mediaBox">Вставка медиа контента</a>

Все остальные компоненты добавляются по мере необходимости:

* [Кастомный скроллбар](https://github.com/malihu/malihu-custom-scrollbar-plugin)
* [Полноэкранный скролл](https://github.com/alvarotrigo/fullPage.js)
* [Ползунок диапазона чисел/цен](https://refreshless.com/nouislider/)
* [Валидация форм](https://github.com/jzaefferer/jquery-validation)
* [Кастомный select](https://github.com/select2/select2)
* [Динамическая сетка](https://github.com/metafizzy/isotope)
* [Датапикер](https://github.com/Eonasdan/bootstrap-datetimepicker)
* [Отслеживание видимости элемента в окне браузера](https://github.com/dirkgroenen/jQuery-viewport-checker)


<h3 id="titles">Заголовки</h3>
С заголовками всё просто. У всех убран верхний отступы и высота линии задана в 100%

<a href="#">наверх</a>

<h3 id="lists">Списки</h3>
<h4>Пустой список</h4>

```html
<ul class="list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

<h4>Список по горизонтали</h4>

```html
<ul class="list listFlex">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

<h4>Список по центру</h4>

```html
<ul class="list listFlex listCenter">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

<h4>Список равномерно по ширине блока</h4>

```html
<ul class="list listFlex listBetween">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

<h4>Список с пунктами по всей ширине блока</h4>

```html
<ul class="list listFlex listBetween">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

<a href="#">наверх</a>

<h3 id="icons">Иконки</h3>
Для вставки иконки, добавьте ей класс <b>.ico</b>. Так как работа с иконками подразумевает использование <b>svg</b> иконок, класс <b>.ico</b> по умолчанию имеет размер 18px-18px и заливку чёрным. Что бы унифицировать все иконки. Для каждого проекта изменяем значения на нужные.

Созданный спрайт должен иметь атрибут <b>id</b> со значением <b>iconsSvg</b>. Далее инлайним его в документ и вставляем нужные иконки так:

```html
<svg class="ico">
    <use xlink:href="#icoTel"></use>
</svg>
```
Если используются растровые иконки, просто удалите в стилях размеры и заливку.

Для того, что-бы сделать отступы у иконок по бокам, добавлены 2 класса:
Если иконка расположена слева

```html
<svg class="ico icoLeft">
    <use xlink:href="#icoTel"></use>
</svg>
```

Если иконка расположена справа

```html
<svg class="ico icoRight">
    <use xlink:href="#icoTel"></use>
</svg>
```

<h4>Иконка гамбургер</h4>

```html
<span class="icoMenu"> 
    <span></span> 
    <span></span> 
    <span></span> 
</span> 
```

Что бы иконка трансформировалась в гамбургер, нужно что бы у родительского элемента был класс <b>.open</b>. Это можно увидеть на примере <a href="#responsiveNav">адаптивного меню</a> или поместить иконку в кнопку для <a href="#dropdowns">dropdown</a> компонента

<a href="#">наверх</a>

<h3 id="tables">Таблицы</h3>

```html
<table class="table">
    <thead></thead>
    <tbody></tbody>
    <tfoot></tfoot>
</table>
```

<a href="#">наверх</a>

<h3 id="buttons">Кнопки</h3>

```html
```

<a href="#">наверх</a>

<h3 id="imgGalery">Галерея изображений</h3>
Для галереи изображений используется jquery плагин <a href="http://fancyapps.com/fancybox/3/"><b>fancybox</b></a>.
Пример кода:

```html
<a href="app/img/galery/1.jpg" data-fancybox>
    <img class="app/img/galery/1.jpg">
</a>
```

Для создания галереи из множества изображений используйте атрибут <b>data-fancybox</b> с уникальным значением.

```html
<a href="app/img/galery/1.jpg" class="fancybox" data-fancybox="galery">
    <img class="app/img/galery/1.jpg">
</a>

<a href="app/img/galery/2.jpg" class="fancybox" data-fancybox="galery">
    <img class="app/img/galery/2.jpg">
</a>

<a href="app/img/galery/3.jpg" class="fancybox" data-fancybox="galery">
    <img class="app/img/galery/3.jpg">
</a>
```

<a href="#">наверх</a>

<h3 id="sliders">Слайдер</h3>
Для работы слайдеров используется плагин <a href="http://idangero.us/swiper/api/"><b>Swiper</b></a>

```html
<section id="mainSlider" class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            Slide 1
        </div>
    
        <div class="swiper-slide">
            Slide 2
        </div>
    
        <div class="swiper-slide">
            Slide 3
        </div>
    </div>
    
    <!-- Навигация -->
    <div class="swiper-pagination"></div>
    
    <!-- Стрелки переключения -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</section>
```

<a href="#">наверх</a>

<h3 id="rangeSlider">Ползунок диапазона цен</h3>
Для начала, необходимо его подключить https://refreshless.com/nouislider/

```html
<div class="rangeSliderGroup">
    <div class="row">
        <div class="col">
            <input type="text" class="field rangeSliderMin">
        </div>

        <div class="col">
            <input type="text" class="field rangeSliderMax">
        </div>
    </div>

    <div
        class="rangeSlider"
        data-options='{
            "start": [1000, 278000],
            "range": {
                "min": 1000,
                "max": 1000000
            }
        }'
    ></div>
</div>
```

<a href="#">наверх</a>

<h3 id="grid">Flexbox сетка</h3>

```html
```

<a href="#">наверх</a>

<h3 id="tabs">Вкладки</h3>
<a href="http://getbootstrap.com/docs/4.1/components/navs/#via-javascript"><b>Документация</b></a> по работе с событиями плагина

```html
<div class="tabs">
    <ul class="list listFlex nav nav-tabs" role="tablist">
        <li class="nav-item">
            <a 
                href="#tab1" 
                class="active" 
                aria-controls="home" 
                role="tab" 
                data-toggle="tab" 
                aria-selected="true"
            >
                Таб 1
            </a>
        </li>

        <li class="nav-item">
            <a 
                href="#tab2" 
                aria-controls="profile" 
                role="tab" 
                data-toggle="tab" 
                aria-selected="false"
            >
                Таб 2
            </a>
        </li>
    </ul>

    <div class="tabContent">
        <div 
            role="tabpanel" 
            class="tab-pane fade show active" 
            id="tab1" 
            aria-labelledby="home-tab"
        >
            ...
        </div>
        
        <div 
            role="tabpanel" 
            class="tab-pane fade" 
            id="tab2" 
            aria-labelledby="home-tab"
        >
            ...
        </div>
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="dropdowns">Дропдауны</h3>
<a href="http://getbootstrap.com/docs/4.1/components/dropdowns/"><b>Документация</b></a> по работе с событиями плагина

```html
<div class="dropdown">
    <button 
        class="but dropdownBut" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false" 
        data-display="static"
    >
        Выпадающее меню
    </button>
    
    <div class="dropdown-menu">
        Контент
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="responsiveNav">Адаптивное меню</h3>

```html
<div class="dropdown topMenuWrap"> 
    <button 
        type="button" 
        class="but dropdownBut"
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false"
    > 
        <span class="icoMenu"> 
            <span></span> 
            <span></span> 
            <span></span> 
        </span>
    </button> 
    
    <div class="dropdown-menu">
        <nav class="nav topMenu"> 
            <ul class="list listFlex level1">
                <li class="active"><a href="#">Главная</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav> 
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="modals">Модальные окна</h3>
<a href="http://getbootstrap.com/docs/4.1/components/modal/"><b>Документация</b></a> по работе с событиями плагина

```html
<button
    type="button"
    class="but"
    data-toggle="modal"
    data-target="#feedbackModal"
>
    Обратная связь
</button>

<div
    class="modal fade"
    id="feedbackModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Обратная связь"
    aria-hidden="true"
>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Обратная связь</h5>

                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">

            </div>
        </div>
    </div>
</div>
```

<a href="#">наверх</a>

<h3 id="imgs">Изображения</h3>

```html
```

<a href="#">наверх</a>

<h3 id="counters">Счётчик для input полей</h3>

```html
<div class="counter">
    <button type="button" class="but counterBut dec">-</button>
    <input type="text" class="field" value="1" data-min="1" data-max="20">
    <button type="button" class="but counterBut inc">+</button>
</div>
```

<a href="#">наверх</a>

<h3 id="breadcrumbs">Хлебные крошки</h3>

```html
<nav class="breadcrumbs">
    <ul class="list listFlex">
        <li><a href="/">Главная</a></li>
        <li class="active"><a href="#">Раздел</a></li>
    </ul>
</nav>
```

<a href="#">наверх</a>

<h3 id="pager">Переключатель страниц</h3>

```html
<nav class="nav pager">
    <ul class="list listFlex">
        <li><a href="#" class="pagerArrows pagerPrev">Назад</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="active"><a href="">4</a></li>
        <li class="pagerDots"><a href="#">...</a></li>
        <li><a href="#">10</a></li>
        <li><a href="#">11</a></li>
        <li><a href="#" class="pagerArrows pagerNext">Вперёд</a></li>
    </ul>
</nav>
```

<a href="#">наверх</a>

<h3 id="sections">Секции</h3>

```html
```

<a href="#">наверх</a>

<h3 id="forms">Формы</h3>
Блок поиска

```html
<form action="#" class="search" method="post">
    <input type="search" class="field" placeholder="Поиск по сайту..." required>
    <input type="submit" class="but" value="Искать">
</form>
```

<a href="#">наверх</a>

<h3 id="mediaQueries">Медиа запросы</h3>

<h3 id="formTelMask">Маскировка полей телефонов</h3>
Плагин уже встроен. Инициализация происходит на поля ```input[type="tel]```

<a href="#">наверх</a>

<h3 id="mediaBox">Вставка медиа контента</h3>
Вставка ролика с youtube

```html
<div class="mediaBox">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3FVplCff1co" frameborder="0" allowfullscreen=""></iframe>
</div>
```

<a href="#">наверх</a>
