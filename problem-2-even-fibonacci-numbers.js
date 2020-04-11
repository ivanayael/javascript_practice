function fiboEvenSum(n) {
  var a = 1, b = 2;
  var s = 0;
  var t;

  while (a <= n) {
    t = a;
    a = b;
    b+= t;
    s+= (-2 | t) + 1 & t; // Or a & -(a & 1 ^ 1)
  }
  return s;
  
}

fiboEvenSum(10);
