const button = document.querySelector("#button");



button.addEventListener("click", function(){
    document.body.classList.toggle("terang");
    document.body.classList.toggle("gelap");
    
    if (document.body.className == "terang"){
        button.innerHTML = " Dibilangin Juga :v "
    }else{
        button.innerHTML = " Ini Hanya Hiasan ";
    }
})



//Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    dots : false,
    navText: [
	    "<i class='fa-solid fa-angle-left position-absolute top-50 start-50 translate-middle'></i>",
	    "<i class='fa-solid fa-angle-right position-absolute top-50 start-50 translate-middle'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

