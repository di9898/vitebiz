 var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
      slidesPerView: 4,
      spaceBetween: 50,
      slideToClickedSlide:true,
      centeredSlides:true,
     pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
effect: "coverflow",
      grabCursor: true,
     
      coverflowEffect: {
        rotate: -10,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
   
      loop:true,
        autoplay: {
          delay: 3000,
        },


        keyboard: {
        enabled: true,
        onlyInViewport: true,
      },


      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


       breakpoints: {
      
            
            640: {
              freemode:true,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              freemode:true,
              slidesPerView: 3,
              spaceBetween: 20,
            }
      }

    });

 document.addEventListener( "click", ( evnt ) => {
        if (evnt.target?.closest?.('a[href^="#/"]')) {
          evnt.preventDefault();
          alert( "Thank you for clicking, but that's a demo link." );
        }
      });

      document.addEventListener('DOMContentLoaded', () => {

                  new Mmenu("#menu", {    theme     : "white",
    navbars   : {
      content : [ "prev", "title" ]
    },
  
    setSelected : {
      hover: true
    }}, {});
        
              });

