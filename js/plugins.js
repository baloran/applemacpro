(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    menu: function(options) {
      var settings;
      settings = {
        style: '',
        text_true: 'On',
        text_false: 'Off'
      };
      settings = $.extend(settings, options);
      return this.each(function() {
        var lastscroll;
        lastscroll = 0;
        return $(window).scroll(function() {
          var st;
          st = $(this).scrollTop();
          if (st > lastscroll) {
            $(".navbar").fadeOut();
          } else {
            $(".navbar").fadeIn();
          }
          return lastscroll = st;
        });
      });
    },
    mappage: function(options) {
      var pos, settings;
      settings = settings = $.extend(settings, options);
      pos = $(this).find('span');
      return pos.each(function() {
        var x, y;
        x = $(this).data('x');
        y = $(this).data('y');
        $(this).css('top', x + 'px').css('left', y + 'px');
        return $(this).click(function() {
          return $(this).css('display', 'inline-block');
        });
      });
    }
  });

}).call(this);
