function LoadingScreen()
{
   document.querySelector("#before_preloader").style.display = "none"
}

setTimeout(function(){ LoadingScreen(); }, 2000);

function passShow()
{


let passVis = document.querySelector("#input-73")
passVis.type = ""
document.querySelector(".g-input__show-password").setAttribute('onclick','passHide()')
}

function passHide()
{


let passVis = document.querySelector("#input-73")
passVis.type = "password"
document.querySelector(".g-input__show-password").setAttribute('onclick','passShow()')
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 4000,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  