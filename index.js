import Dog from '/Dog.js';
import dogs from '/data.js';

// function to get the next dog from the array

function getNewDog() {
  const nextDog = dogs.shift();
  return nextDog ? new Dog(nextDog) : {}
}

const nextDog = getNewDog();

// function to render next dog in array

function render() {
  document.getElementById('dog').innerHTML = nextDog.getProfileHtml();
}

render();
