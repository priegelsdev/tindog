import Dog from '/Dog.js';
import dogs from '/data.js';

console.log(dogs[0])

let dogArray = getDogArray(dogs)
console.log(dogArray[0])

function getDogArray(dogs) {
  return dogs.map(dog => dog);
} 


let dog = getNewDog();

// event listener

document.addEventListener('click', function(e) {
  if (e.target.id === 'nope-btn' || e.target.id === 'like-btn') {
    handleSwipe(e);
  }
});

// function to handle swipe and set boolean in data

function handleSwipe(e) {
  if (e.target.id === 'nope-btn') {
    dog.hasBeenSwiped = true;    
  } else if (e.target.id === 'like-btn') {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
  }
  
  dog = getNewDog();
  console.log(dogs);
  render();
}

// function to get the next dog from the array

function getNewDog() {
  const nextDog = dogArray.shift();
  return nextDog ? new Dog(nextDog) : {}
}

// function to render next dog in array

function render() {
  document.getElementById('dog').innerHTML = dog.getProfileHtml();
}

render();
