function maybeTrue() {
  return Math.random() >= 0.5;
}

function forLoop(arr) {
  arr[0] = "I am 1 strange loop";
  for (var i = 1 ; i < 25; i++) {
    arr[i] = "I am " + i + " strange loops";
  }
  return arr;
}

function whileLoop(num) {
  while (num > 0 ) {
    console.log(num--);
  }
  return 'done';
}

function doWhileLoop(arr) {
  do {
    arr.shift();
  } while ( arr.length > 0 || maybeTrue() );
  return arr;
}
