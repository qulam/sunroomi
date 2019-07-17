/*Custom Plugin for Configuration Widget*/
(function ($) {

    /*Set preview large image when document ready or window onload*/
    $.fn.setPreviewImage = function (elem) {
        var e = $(this);
        var contain = e.closest('.conf_body').find('.div-depended.active');
        var containSelector = contain.find(e);
        var thumbParent = contain.find(elem);
        var hasActiveThumbLink = thumbParent.find('li.active');
        var dataSrc = hasActiveThumbLink.find('.prev-item').data('srclarge');

        containSelector.find('img').attr('src', dataSrc);
    };
    /* /Set preview large image when document ready or window onload*/

    /*Remove class 'active' and add class 'active' which it is event element*/
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

        e.activeIsOnlyOne();
        $('.preview').setPreviewImage('.preview-tabs');

    };
    /* /Show div-depended item when clicked to general tab (data-href)*/

    $(document).on('click', '.tabs__item', function () {
        $(this).showActiveTab();
    });

    $(document).on('click', '.prev-item', function (e) {
        e.preventDefault();
        /*Set preview image src attr from active thum image list item data('srclarge') (ONLY CLICK EVENT)*/
        $(this).changePreview('.preview');
    });

    /*ONLY DOCUMENT READY OR WINDOW ON LOAD*/
    $('.preview').setPreviewImage('.preview-tabs');

})(jQuery);
/* /Custom Plugin for Configuration Widget*/