const monthNames = ["Semen", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = monthNames[month] + " " + day;

function statusCheck()
{
let twitchthot = document.getElementById("guaca")
if ((Math.random() * 10) + 1 > 5) {
    document.getElementById("avatarbro").classList.add('online');
    twitchthot.innerHTML  = " Available now ";
} else {
    document.getElementById("avatarbro").classList.remove('online');
    twitchthot.innerHTML  = `\n                              Last seen\n                              <span title=\"May 6, 6:56 pm\"> ${newdate} </span>`;
}
}
statusCheck()

function CopyMe() {
    document.querySelector("#copyButton").setAttribute('onclick','')
    document.querySelector(".snus").style.display = "block"
var url = document.createElement('input'),
    text = window.location.href;

document.body.appendChild(url);
url.value = text;
url.select();
document.execCommand('copy');
document.body.removeChild(url);
     setTimeout(() => {
        document.querySelector("#copyButton").setAttribute('onclick','CopyMe()')
        document.querySelector(".snus").style.display = "none"
     }, 4500); 
  }

  function bookmarkme() {
    alert("Press " + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ?  'Command/Cmd' : 'CTRL') + "+D to bookmark page.");
    return;
 };

 function kofi()
 {
     document.querySelector(".kofi").style.display = "block"
 }