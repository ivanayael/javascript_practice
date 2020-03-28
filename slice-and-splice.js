function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0,n)
  arr2.splice(0,n)
  return arr3.concat(arr1).concat(arr2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
