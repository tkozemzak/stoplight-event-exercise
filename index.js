(function() {
  'use strict';

  ////declaring variables for use
let stopButton = document.getElementById('stopButton')
let slowButton = document.getElementById('slowButton')
let goButton = document.getElementById('goButton')

let stopLight = document.getElementById('stopLight')
let slowLight = document.getElementById('slowLight')
let goLight = document.getElementById('goLight')


//stopButton code
setTimeout(
  stopButton.addEventListener('click', function(){
    if(stopLight.style.backgroundColor !== 'red'){
        stopLight.style.backgroundColor = 'red';
        console.log('Stop bulb on')
      } else {
        stopLight.style.backgroundColor = 'black'
        console.log('Stop bulb off')
      };
    })
, 30000)
////slowButton code
  slowButton.addEventListener('click', function(){
    if(slowLight.style.backgroundColor !== 'yellow'){
        slowLight.style.backgroundColor = 'yellow';
        console.log('Slow bulb on')
      } else {
        slowLight.style.backgroundColor = 'black'
        console.log('Slow bulb off')
      };
    })
////goButton code
  goButton.addEventListener('click', function(){
    if(goLight.style.backgroundColor !== 'green'){
        goLight.style.backgroundColor = 'green';
        console.log('Go bulb on')
      } else {
        goLight.style.backgroundColor = 'black'
        console.log('Go bulb off')
      };
    })



////mouseOver code


  function mouseOverStop() {
    console.log("Entered Stop button")
  }

  function mouseOutStop() {
    console.log("Left Stop button")
  }

  function mouseOverSlow() {
    console.log("Entered Slow button")
  }

  function mouseOutSlow() {
    console.log("Left Stop button")
  }

  function mouseOverGo() {
    console.log("Entered Go button")
  }

  function mouseOutGo() {
    console.log("Left Go button")
  }





  stopButton.addEventListener('mouseover', mouseOverStop)
  stopButton.addEventListener('mouseout', mouseOutStop)

  slowButton.addEventListener('mouseover', mouseOverSlow)
  slowButton.addEventListener('mouseout', mouseOutSlow)

  goButton.addEventListener('mouseover', mouseOverGo)
  goButton.addEventListener('mouseout', mouseOutGo)






//1) try to create a switch statement to handle all the potential button clicks in one function.

// 2) try to prevent the stoplight from having more than one light on at a time(either by turning the others off when one is clicked or forcing the user to click the other off first)
//
// 3)see if you can get the lights to act like an actual traffic light and turn on and off in order automatically
 })();
