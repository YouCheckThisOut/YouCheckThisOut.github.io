
$('li').on({
	mouseenter: function(){
		$(this).css('color', '#003d7a');
		$(this).css('font-size', '120%');
	},

  mouseleave: function() {
    $(this).css('color', 'black');
    $(this).css('font-size', '100%');
  }

});