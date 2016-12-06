function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i===0) {
      array.push(`I am ${i+1} strange loop.`);
    } else {
      array.push(`I am ${i+1} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number){

  while (number > 0) {
    console.log(--number)
  }
  return "done";
}

function doWhileLoop(array){

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    if (array.length !== 0 ) {
      array.pop();
    }
  } while (maybeTrue());

  return array;
}
