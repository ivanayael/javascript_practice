function multiplesOf3and5(number) {
  // Good luck!
  var c = 0;
  for (var i=1; i < number; i++) {
    if (0 === i % 3 || 0 === i % 5)
      c+= i;
  }
  return c;
}

multiplesOf3and5(1000);
