(function( $ ){

    /**
    * Locale sort
    */
    function localeSort(a,b) {
        return a.localeCompare(b);
    }

    /**
    * Sort elements
    */
    $.fn.sortElements = function(options) {
        var defaults = {
                valueSource: '', //selector to get text value used for sorting, e.g. 'h2'
                direction: 'asc' //asc || desc
            },
            container = this.eq(0).parent(),
            strings = [],
            elementsByString = {};


        options = $.extend({}, defaults, options);

        this.each(function() {
            var str = $(this).find(options.valueSource).text();
            elementsByString[str] = this;
            strings.push(str);
        });

        strings = strings.sort(localeSort);

        for(str in strings) {
            container.append(elementsByString[strings[str]]);
        }

        return this;
    };

})( jQuery );