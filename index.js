// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue-42);
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(someValue1, somevalue2) {
  return Math.abs(somevalue2 - someValue1) * 264;
}

function calculatesFarePrice(start, destination) {
  var distance = destination - start
  if distance <= 400
    console.log("This ones on us!")
  else if distance <= 2000 
}

  return (distanceTravelledInFeet - 400) * 2;
  