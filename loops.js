function forLoop(ary) {
  for (var i = 0; i < 25; i++) {
    ary.push(`I am ${i} strange loop.`)
  }
  return ary;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num);
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1);
  } while (array.length > 0 && maybeTrue())
  
  return array;
}