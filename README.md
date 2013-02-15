#Accordiom - The Ultra Tiny Accordion

Just 1.4kB minified, and yes it's spelt with an 'm'. Single file jQuery plugin and no external stylesheet required.

[View the demo](http://www.simonboak.co.uk/accordiom/)
 

##Get Started

###1. Include jQuery and accordiom.js
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/accordiom.js"></script>
```

###2. HTML markup
```html
<div id="accordion1">
	<div class="accordionButton"><h2>Item 1</h2></div>
	<div class="accordionContent">
		<p>Item 1 Content</p>
	</div>
	
	<div class="accordionButton"><h2>Item 2</h2></div>
	<div class="accordionContent">
		<p>Item 2 Content</p>
	</div>
	
	<div class="accordionButton"><h2>Item 3</h2></div>
	<div class="accordionContent">
		<p>Item 3 Content</p>
	</div>
</div>
```

** The h2 tag isn't even needed - any HTML can be in the accordionButton and accordionContent.

###3. JavaScript
```html
<script type="text/javascript">
	$(document).ready( function () {
		$('#accordion1').accordiom();
	});
</script>
```


##Full Options


```javascript
$('#accordion1').accordiom({
	speed: 500, // Set the animation speed. 0 gives no animation
	showFirstItem: false, // Either show or hide the first item when loading
	beforeChange: function (accordionButton) {}, // Callback function called on click of the accordionButton before an item is hidden or shown
	afterChange: function (accordionButton) {}, // Callback function called after change of item
	onLoad: function (accordionButton) {} // Callback function called once the accordion is set up and event listeners in place
});
```

##Callbacks
2 callback functions are defined in the options above. The argument passed to the function is the div with class .accordionButtom that was clicked on and can be used like this:
```javascript
$('#accordion1').accordiom({
	afterChange: function (accordionButton) {
		$(accordionButton).next('.accordionContent').append('Opened!');
	}
});
```
The example above appends the text 'Opened!' to the content of the content div for the opened item.

The class .on is also added to the active item so it can be styled and targeted in scripts.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/123151625a476883f1b3e163df4cb001 "githalytics.com")](http://githalytics.com/simonboak/Accordiom)