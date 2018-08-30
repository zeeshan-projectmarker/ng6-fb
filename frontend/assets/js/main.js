$(document).ready(function(){
  script.init({
      nav_icon: ".menu-btn > a",
      nav_close: ".close-btn",
      slick_instance: ".slick-instance",
  });
});
var global_this;
var script = {
    init: function(settings){
        this.settings = settings;
        global_this = this;
        
        this.navigation();
        this.plugins();
        this.moveToSection(".moveTosection");
    },
    plugins: function(){
        $('[data-toggle="popover"]').popover();
    },
    navigation: function(){
        $(this.settings.nav_icon).on("click", function(){
            $("body").addClass("show-navigation");
        });
        $(this.settings.nav_close).on("click", function(){
            $("body").removeClass("show-navigation");
        });
    },
    moveToSection : function(handler){
        $(handler).on("click", function(event){
            event.preventDefault();
            var ref = $(this).attr("data-ref");
            $("html, body").animate({scrollTop: $(ref).offset().top - 125}, 1000);
        });

        $('.profile-sidebar .vertical-list > li > a').click(function(){
            $('.profile-sidebar .vertical-list > li > a').removeClass("active");
            $(this).addClass("active");
        });
    },
}
