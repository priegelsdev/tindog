import Dog from '/Dog.js';
import dogs from '/data.js';

let dog = getNewDog();
let dogImg = document.getElementById('dog').getElementsByTagName('img')


// event listener

document.addEventListener('click', function(e) {
  if (e.target.id === 'nope-btn' || e.target.id === 'like-btn') {
    handleSwipe(e);
  }
});

// function to handle swipe and set boolean in data

function handleSwipe(e) {
  if (e.target.id === 'nope-btn' && dogImg.length > 0) {
    dog.hasBeenSwiped = true; 
    handleNope();   
  } else if (e.target.id === 'like-btn' && dogImg.length > 0) {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
    handleLike();
  }

  if (dogs.length > 0) {
    dog = getNewDog();
      setTimeout(() => render(), 1500);
  } else {
      setTimeout(() => document.getElementById('dog').innerHTML = `
        <div style="height: 79vh; display: flex; align-items: center; justify-content: center">
        <p class="no-dogs">No more doggies in your area.</p>
      `, 1500);
  }
}

// function to handle like 

function handleLike() {
  document.getElementById('dog').innerHTML += `<img class='badge' src='/img/badge-like.png'>`
}

// function to handle nope

function handleNope() {
  document.getElementById('dog').innerHTML += `<img class='badge' src='/img/badge-nope.png'>`

}

// function to get the next dog from the array

function getNewDog() {
  const nextDog = dogs.shift();
  return nextDog ? new Dog(nextDog) : {}
}

// function to render next dog in array

function render() {
    document.getElementById('dog').innerHTML = dog.getProfileHtml();
}

render();
