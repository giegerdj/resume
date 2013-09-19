!function ($) {

  $(function(){

    var $window = $(window);
    var $body   = $(document.body);

    $body.scrollspy({
      target: '.resume-sidebar',
      offset: 10
    });

    $window.on('load', function () {
      $body.scrollspy('refresh')
    });
    
    // back to top
    setTimeout(function () {
      var $sideBar = $('.resume-sidebar');
      
      $sideBar.affix({
        offset: {
          top: function () {
            var offsetTop      = $sideBar.offset().top;
            var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10);
            
            return (this.top = offsetTop - sideBarMargin);
          }
        , bottom: 0
        }
      })
    }, 100);
    
    $.each($('.gauge'), function(index, el) {
      var title = $(el).attr('data-title');
      var id = $(el).attr('id');
      var value = $(el).attr('data-value');
      
      var g = new JustGage({
        id: id, 
        value: value, 
        min: 0,
        max: 100,
        title: title,
        titleFontColor: '#333333',
        levelColors: ['#cccccc','#1A503B']
      });
    });
    
});

}(window.jQuery)