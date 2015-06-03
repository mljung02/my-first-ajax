var karmaRange = function(int) {
  if (int > 0 && int <= 10) {
    return 1;
  }
  if (int > 10 && int <= 100) {
    return 2;
  }
  if (int > 100 && int <= 1000) {
    return 3;
  }
  if (int > 1000 && int <= 9000) {
    return 4;
  }
  else {
    return 5;
  }
}
