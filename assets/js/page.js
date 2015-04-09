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
    
});

}(window.jQuery)