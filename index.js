function makeSound (key) {
  if ( key === "w" ) {
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
  }

  else if ( key === "a" ) {
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
  }

  else if ( key === "s" ) {
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
  }

  else if ( key === "d" ) {
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
  }

  else if ( key === "j" ) {
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
  }

  else if ( key === "k" ) {
    var kickbass=new Audio("sounds/kick-bass.mp3");
    kickbass.play();
  }

  else if ( key === "l" ) {
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
  }

  else {
    console.log(button);
  }
}
// button animation function
 function buttonAnimation (currentKey) {
 var currentButton =  document.querySelector("."+currentKey);
  currentButton.classList.add("pressed");
  setTimeout(function(){
    currentButton.classList.remove("pressed");
  },100)
}
// the clicking event  listener
var numberOfButtons = document.querySelectorAll(".drum").length;
for ( let i = 0; i < numberOfButtons ; i+=1 ) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
           var button=this.innerHTML;
           makeSound(button);
           buttonAnimation(button);
})
}
// the keyboard pressing event listener
for ( let i = 0; i < numberOfButtons ; i+=1 ) {
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event) {
           makeSound(event.key);
           buttonAnimation(event.key)
         })
       }
