/*!
 * accordiom.js version 0.5.1
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
        autoClosing: true,
        openAll: false,
        buttonBelowContent: false,
        beforeChange: function () {},
        afterchange: function () {},
        onLoad: function () {}
    };
    
    $.fn.accordiom = function (options) {
        return this.each( function () {
            (new $.accordiom(this, options));
            
            // For some reason the default options weren't being extended so I'll do it manually
            /*if (!options) {
	            options = $.accordiom.defaultOptions;
            }*/
            options = $.extend({}, $.accordiom.defaultOptions, options);

            
            // Handy functions need access to the speed option
            $(this).data('accordiom-speed', options.speed);
            
            // Hide the content, but conditionally leave the first one open
            if (options.openAll) {
	            $(this).children('.accordionButton').addClass('on');
            } else {
	            if (options.showFirstItem) {
	                $(this).children('.accordionContent').not(':first').hide();
	                $(this).children('.accordionButton').first().addClass('on');
	            } else {
	                $(this).children('.accordionContent').hide();
	            }
            }
            
            // Fire the onLoad callback once all's set up
            if (options.onLoad) {
	            options.onLoad.call(this, this);
            }
            
            // Bind events to the buttons
            $(this).children('.accordionButton').on('click', function () {
            
				// Grab the container element (which would be used in the initial selector)
				var $selectorEl = $(this).parent('div');
				
				if (options.beforeChange) {
					options.beforeChange.call(this, this); // sends the clicked accordion button element
				}

				if ($(this).is('.on')) {
					//$selectorEl.children('.accordionContent').slideUp(options.speed);
					if (options.buttonBelowContent) {
						$(this).prev('.accordionContent').slideUp(options.speed);
					} else {
						$(this).next('.accordionContent').slideUp(options.speed);
					}
					$(this).removeClass('on');
				} else {
					if (options.autoClosing) {
						$selectorEl.children('.accordionContent').slideUp(options.speed);
						$selectorEl.children('.accordionButton').removeClass('on');
					} else {}
					
					if (options.buttonBelowContent) {
						$(this).prev('.accordionContent').slideDown(options.speed);
					} else {
						$(this).next('.accordionContent').slideDown(options.speed);
					}
					$(this).addClass('on');
				}
                
                if (options.afterChange) {
                    options.afterChange.call(this, this); // sends the clicked accordion button element
                }
            });
            
        });
    };
    
    
    // Function: show all accordion items
    $.fn.accordiom.openAll = function (el) {
        $(el).children('.accordionContent').slideDown($(el).data('accordiom-speed'));
    };
    
    // Function: hide all accordion items
    $.fn.accordiom.closeAll = function (el) {
        $(el).children('.accordionContent').slideUp($(el).data('accordiom-speed'));
    };
    
    // Function: open item n (zero indexed)
    $.fn.accordiom.openItem = function (el, n) {
        var nIndexCount = $(el).children('.accordionButton').length-1;
        if ((n < 0) || (n > nIndexCount)) { // Quick error check
            throw('Accordiom: No accordion item of index ' + n + ' exists');
        } else {
            $($(el).children('.accordionButton')[n]).trigger('click');
        }
    };
    

    
})(jQuery);
