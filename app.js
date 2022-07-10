$(function() {
    $('.slider-content').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        navText: ['<span class="btn-prev"><i class="icon-prev fas fa-chevron-left"></i><span>', '<span class="btn-next"><i class="icon-next fas fa-chevron-right"></i><span>'],
        navClass: ['owl-prev', 'owl-next'],
        autoplay: true,
        autoplayTimeout:1000,
        autoHeight:350,
        center: true,
        dots: false,
        responsive:{
            0:{
                items:1,
                dots: false
            },
            600:{
                items:1,
                dots: false
            },
            1000:{
                items:1
            }
        }
    })
   
})

//set width for owlCarousel
// const owlCarousel = document.querySelectorAll('.owl-item');
// console.log(owlCarousel);
// const sliderWidth =document.querySelector('.slider-content');
// console.log(sliderWidth);
// owlCarousel.forEach(element => {
//     console.log("width " + sliderWidth.clientWidth);
//     element.style.width = sliderWidth.clientWidth + 'px';
// });

// $(document).ready(function(){
//     const owlCarousel = document.querySelectorAll('.owl-item');
// console.log(owlCarousel);
// const sliderWidth =document.querySelector('.slider-content');
// console.log(sliderWidth);
// owlCarousel.forEach(element => {
//     console.log("width " + sliderWidth.clientWidth);
//     element.style.width = sliderWidth.clientWidth + 'px';
// });
//   });

