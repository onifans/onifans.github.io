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