$( ":header" ).on({
	mouseenter: function(){
		$(this).css('font-size', '120%');
	},

  mouseleave: function() {
    $(this).css('color', 'black');
    $(this).css('font-size', '100%');
  },