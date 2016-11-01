function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
     arr.push("I am 1 strange loop.");
    } else {
      var n = i + 1
      arr.push(`I am ${n} strangeloops.`);
    }
  }
  return arr
}


function whileLoop(num) {
  while (num >= 0) {
    if (num === 0) {
      return "done";
    } else {
      console.log(num);
      num = --num;
    }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}
