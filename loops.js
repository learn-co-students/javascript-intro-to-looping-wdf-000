function forLoop(array){
  for (i =1 ; i<= 25; i++){
    array.push( `I am ${i} strange loops.`);
  }
  return array
}

function whileLoop(countdown){
  while (countdown > 0) {
    console.log(--countdown)
  }
}

function doWhileLoop(number){
  do {
    console.log(--number);
  }while(number > 0)
}
