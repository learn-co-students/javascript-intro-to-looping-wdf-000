function maybeTrue() {
  return Math.random() >= 0.5;
}

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    string = i == 1 ? "I am a strange loop." : "I am " + i + " strange loops.";
    array.push(string);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n-- ;
  }
  return "done";
}

function doWhileLoop(arr) {
  do{
    arr.pop();
  } while (arr.length > 0 && maybeTrue() == true);
  return arr;
}
