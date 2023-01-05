import Dog from '/Dog.js';
import dogs from '/data.js';

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

  if (dogs.length > 0) {
    dog = getNewDog();
    render();
  } else {
    document.getElementById('dog').innerHTML = `
      <div style="height: 79vh; display: flex; align-items: center; justify-content: center">
      <p class="no-dogs">No more doggies in your area.</p>
    `
  }


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
