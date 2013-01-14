(function($) {

    $.fn.autoTextarea = function(settings) {

        var options = $.extend({
            padding: 0
        }, settings);

        return this.each(function() {

            // Derived from: http://stackoverflow.com/a/5346855

            var self = this;

            function resize() {
                self.style.height = 'auto';
                self.style.height = (self.scrollHeight + options.padding) + 'px';
            }
            // 0-timeout to get the already changed text
            function delayedResize() {
                window.setTimeout(resize, 0);
            }

            $(this).bind('change', resize);
            $(this).bind('cut paste drop keydown', delayedResize);

            resize();

        });

    }

})(jQuery);
