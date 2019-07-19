/*Custom Plugin for Configuration Widget*/
(function ($) {

    /*Check window width for responsive device and add Slick slider*/
    $.fn.addSlick = function (deviceSize, slickOptions = {}) {
        var e = $(this);
        var size = deviceSize;
        var windowWidth = $(document).width();
        var options = slickOptions;

        if (windowWidth <= size) {
            if (!e.hasClass('slick-slider')) {
                e.slick(options);
            } else {
                e.slick('unslick');
                e.slick(options);
            }
        } else {
            if (e.hasClass('slick-slider')) {
                e.slick('unslick');
            }
        }
    };
    /* /Check window width for responsive device and add slick slider*/

    /*Set preview large image when document ready or window on load*/
    $.fn.setPreviewImage = function (elem) {
        var e = $(this);
        var contain = e.closest('.conf_body').find('.div-depended.active');
        var containSelector = contain.find(e);
        var thumbParent = contain.find(elem);
        var hasActiveThumbLink = thumbParent.find('li.active');
        var dataSrc = hasActiveThumbLink.find('.prev-item').data('srclarge');

        containSelector.find('img').attr('src', dataSrc);
    };
    /* /Set preview large image when document ready or window on load*/

    /*Remove class 'active' and (add class 'active' which it is event element)*/
    $.fn.activeIsOnlyOne = function () {
        var e = $(this);
        var parentContain = e.closest('ul');

        parentContain.find('li.active').removeClass('active');
        e.closest('li').toggleClass('active');
    };
    /* /Remove class 'active' and add class 'active' which it is event element*/

    /*Set preview large image when clicked to thumb list item*/
    $.fn.changePreview = function (previewContain) {
        var e = $(this);
        var dataSrc = e.data('srclarge');
        var contain = e.closest('.conf_body').find('.div-depended.active').find(previewContain);

        /*Remove class 'active' other item which it has class 'active' and add class this element (ecent element)*/
        e.activeIsOnlyOne();
        contain.find('img').attr('src', dataSrc);
    };
    /* /Set preview large image when clicked to thumb list item*/

    /*Show div-depended item when clicked to general tab (data-href)*/
    $.fn.showActiveTab = function () {
        var e = $(this).find('a');
        var dataHref = e.attr('href');

        var index = dataHref.indexOf('#');

        if (index != -1) {
            dataHref = dataHref.slice(index + 1);
        }

        var dependedDivHasActive = e.closest('.conf_body').find('.div-depended.active');
        var dependedDiv = e.closest('.conf_body').find('.div-depended[data-href = ' + dataHref + ']');

        dependedDivHasActive.removeClass('active');
        dependedDiv.toggleClass('active');

        /*Check window size and add slick slider*/
        dependedDiv.find('.preview-tabs').addSlick(1800, {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
        });
        /*Check window size and add slick slider*/

        e.activeIsOnlyOne();
        $('.preview').setPreviewImage('.preview-tabs');
    };
    /* /Show div-depended item when clicked to general tab (data-href)*/

    $(document).on('click', '.tabs__item', function () {
        $(this).showActiveTab();
    });

    $(document).on('click', '.prev-item', function (e) {
        e.preventDefault();
        /*Set preview image src attr from active thumb image list item data('srclarge') (ONLY CLICK EVENT)*/
        $(this).changePreview('.preview');
    });

    /*ONLY DOCUMENT READY OR WINDOW ON LOAD*/
    $('.preview').setPreviewImage('.preview-tabs');

    $(window).resize(function () {
        $('.preview-tabs').addSlick(1800, {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
        });
    });

    /*Preview Tabs Mutate to slick carousel when document ready*/
    $('.preview-tabs').addSlick(1800, {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    });
    /* /Preview Tabs Mutate to slick carousel when document ready*/

    /*Slick Slider For Preview Tabs item when them mutate slick carousel*/
    $(document).on('click', '.btn-prev', function () {
        $('.preview-tabs').slick('slickPrev');
    });

    $(document).on('click', '.btn-next', function () {
        $('.preview-tabs').slick('slickNext');
    });
    /* /Slick Slider For Preview Tabs item when them mutate slick carousel*/

})(jQuery);
/* /Custom Plugin for Configuration Widget*/