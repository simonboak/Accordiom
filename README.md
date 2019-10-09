# Accordiom - The Ultra Tiny Accordion

Just 1.8kB minified, and yes it's spelt with an 'm'. Single file jQuery plugin and no external stylesheet required.

[View the demo](http://www.simonboak.co.uk/accordiom/)
 

## Get Started

### 1. Include jQuery and accordiom.js
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/accordiom.js"></script>
```

### 2. HTML markup
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

** The h2 tag isn't even needed - any HTML can be in the accordionButton and accordionContent and the divs can be replaced with any other block level HTML5 element that would make more sense in your site.

### 3. JavaScript
```html
<script type="text/javascript">
	$(document).ready( function () {
		$('#accordion1').accordiom();
	});
</script>
```


## Full Options

Default option values are shown below:


```javascript
$('#accordion1').accordiom({
	speed: 500, // Set the animation duration. 0 gives no animation
	showFirstItem: false, // Either show or hide the first item when loading
	openAll: false, // Change to true to show all items as open on load
	autoClosing: true, // Change to false to disable the automatic closing of items when a new item is opened
	buttonBelowContent: false, // Set to true if your <div class="accordionButton"> comes after it's <div class="accordionContent">
	beforeChange: function (accordionButton) {}, // Callback function called on click of the accordionButton before an item is hidden or shown
	afterChange: function (accordionButton) {}, // Callback function called after change of item
	onLoad: function (accordionButton) {} // Callback function called once the accordion is set up and event listeners in place
});
```

## Callbacks
2 callback functions are defined in the options above. The argument passed to the function is the div with class .accordionButton that was clicked on and can be used like this:
```javascript
$('#accordion1').accordiom({
	afterChange: function (accordionButton) {
		$(accordionButton).next('.accordionContent').append('Opened!');
	}
});
```
The example above appends the text 'Opened!' to the content of the content div for the opened item.

The class `on` is also added to the active item so it can be styled and targeted in scripts.


## Functions
From version 0.3, Accordiom includes 3 functions that can be useful when you wish to change the state of the accordion through JavaScript. They are used as follows:

```javascript
$().accordiom.openAll('#accordion1'); // Open all accordion items
$().accordiom.closeAll('#accordion1'); // Close the content of all items
$().accordiom.openItem('#accordion1', 2); // Open item of specified number (zero indexed) so example will open 3rd item
```

## Changelog
- Version 0.5 9th Oct 2019: Added buttonBelowContent option
- Version 0.4 4th Jan 2018: Added openAll and autoClosing options
