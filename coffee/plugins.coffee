$ = jQuery
$.fn.extend
	menu: (options) ->
		settings = 
			style: '',
			text_true: 'On',
			text_false: 'Off'

		settings = $.extend settings, options
		@each ->		
			lastscroll = 0;	
			$(window).scroll ->
				st = $(this).scrollTop()
				if st > lastscroll
					$(".navbar").fadeOut()
				else
					$(".navbar").fadeIn()
				lastscroll = st
	mappage: (options) ->
		settings = 

		settings = $.extend settings, options
		pos = $(this).find('span')
		pos.each ->
			x = $(this).data('x')
			y = $(this).data('y')
			$(this).css('top',x+'px').css('left',y+'px')
			$(this).click ->
				$(this).css('display','inline-block')

