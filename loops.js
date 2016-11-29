function maybeTrue() {
  return Math.random() >= 0.5
}

function forLoop(array) {
  for (i = 0; i < 25; i++) {
    array.push("I am ${i] strange loop${i === 0 ? '' : 's'}.")
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n -= 1
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 || maybeTrue() == false)
  return array
}
