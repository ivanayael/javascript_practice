function ensure(value) {
  if(value === undefined) {
    throw new Error('no arguments');
  }
  return value;
}

console.log(ensure('text'));
console.log(ensure([0,1,2,3]));
console.log(ensure());