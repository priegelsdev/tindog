// function to handle like 

function handleLike() {
  document.getElementById('dog').innerHTML += `<img class='badge' src='/img/badge-like.png'>`
}

// function to handle nope

function handleNope() {
  document.getElementById('dog').innerHTML += `<img class='badge' src='/img/badge-nope.png'>`
}

export {handleLike, handleNope}