import Dog from '/Dog.js';
import dogs from '/data.js';

function render() {
  document.getElementById('dog').innerHTML = newDog.getProfileHtml();
}

const newDog = new Dog(dogs[0]);

console.log(newDog)

render();