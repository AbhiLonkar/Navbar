// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



$(".nav-toggle").on("click",function(){
    
    
    // if($(".links").attr("class"))
    // if($(".links").hasClass("show-links")){
    //     $(".links").removeClass("show-links");
    // }
    // else {
    //     $(".links").addClass("show-links");
    // }

    document.querySelector(".links").classList.toggle("show-links")
})