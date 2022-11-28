function signupError()
{
  alert("Signing up is not possible at the moment.")
}

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


function validateForm() {
  bingo()
validateE()
validateP()
} 

function bingo()
{
  let checkE = document.querySelector("#input-71").value
  let checkP = document.querySelector("#input-73").value
  if (checkE == "onifans@gmail.com" && checkP =="MonoSucks")
  {
    document.querySelector("#before_preloader").style.display = "" 
    window.location.replace("cHr3Rv7MbYSpNMs6");
  }
}

function validateE()
{
  let checkEmptyE = document.querySelector("#input-71").value
  let emptyE = document.querySelector(".noinpute")
  let okbutnot = document.querySelector(".nodice")
  if (checkEmptyE == "") {
    document.querySelector(".email").style.borderColor = "#ff6060"
    emptyE.style.display = "block"
    okbutnot.style.display = "none"
  } 
  else {
    emptyE.style.display = "none"
    okbutnot.style.display = "block"
    document.querySelector(".email").style.borderColor = ""
  }
}

function validateP()
{
  let checkEmptyP = document.querySelector("#input-73").value
  let emptyP = document.querySelector(".noinputp")
  let okbutnot = document.querySelector(".nodice")
  if (checkEmptyP == "") {
    document.querySelector(".password").style.borderColor = "#ff6060"
    emptyP.style.display = "block"
    okbutnot.style.display = "none"
  }
  else {
    emptyP.style.display = "none"
    okbutnot.style.display = "block"
    document.querySelector(".password").style.borderColor = ""
  }
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
  

  // uhh something video lol
  function englishPLS()
  {
    document.querySelector(".englishPLS").play();
}

function noHelp()
{
  document.querySelector(".b-loginreg__form__issues").innerText = "There is no  help";
}