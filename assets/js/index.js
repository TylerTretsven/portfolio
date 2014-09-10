
/**
 * 
 * 
 */

$(function() {

  /**
   * Opens content trays for the work section
   */
  (function($){

    var
     links    = $('#work li header'),
     contents = $('#work li');

     links.each(function(i) {
      $(this).click(function() {

        // Stores if the content is open
        var active =  $(contents[i]).hasClass('active');

        // Closes all content
        closeAll();

        // Opens new content iif it was closed
        if (!active)
          $(contents[i]).addClass('active');

      });
     });

    function closeAll(){
      contents.each(function() {
        $(this).removeClass('active');
      });
    }

  })(jQuery);

});