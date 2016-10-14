function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    (i === 1) ? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(number) {
  let countdown = number
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

// run until `maybeTrue()` returns `false`
// (so the body of the loop might _never_ run!)
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

function doWhileLoop(array) {
  do {
    array.length--
  } while (array.length > 0 && maybeTrue());
  return array
}
