/*!
 * accordiom.js version 0.1
 * http://github.com/simonboak/accordiom
 * Public Domain
 *
 */

(function($){
    $.accordiom = function (el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data('accordiom', base);
        
        base.init = function () {
            base.options = $.extend({}, $.accordiom.defaultOptions, options);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.accordiom.defaultOptions = {
        speed: 500,
        showFirstItem: true,
        beforeChange: function () {},
        afterchange: function () {}
    };
    
    $.fn.accordiom = function (options) {
        return this.each( function () {
            (new $.accordiom(this, options));
            
            // For some reason the default options weren't being extended so I'll do it manually
            if (!options) {
	            options = $.accordiom.defaultOptions;
            }
            
            // Hide the content, but conditionally leave the first one open
            if (options.showFirstItem) {
                $(this).children('.accordionContent').not(':first').hide();
            } else {
                $(this).children('.accordionContent').hide();
            }
            
            // Bind events to the buttons
            $(this).children('.accordionButton').on('click', function () {
            
                // Grab the container element (which would be used in the initial selector)
                var $selectorEl = $(this).parent('div');

                if (options.beforeChange) {
                    options.beforeChange.call(this, this); // sends the clicked accordion button element
                }

                if ($(this).is('.on')) {
                    $selectorEl.children('.accordionContent').slideUp(options.speed);
                    $(this).removeClass('on');
                } else {
                    $selectorEl.children('.accordionContent').slideUp(options.speed);
                    $selectorEl.children('.accordionButton').removeClass('on');
                    $(this).next('.accordionContent').slideDown(options.speed);
                    $(this).addClass('on');
                }
                
                if (options.afterChange) {
                    options.afterChange.call(this, this); // sends the clicked accordion button element
                }
            });
            
        });
    };
    
})(jQuery);
