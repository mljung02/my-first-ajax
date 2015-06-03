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

var parse = function(str) {
  str = str.replace("?","");
  var final = {};
  var temp = "";
  var temp2 = "";
  for (var i = 0; i < str.length; i++) {
    temp += str[i];
    if (str[i] === '=') {
      temp = temp.replace('=','');
      temp2 = temp;
      temp = "";
    }
    if (str[i] === '&') {
      temp = temp.replace('&','');
      final[temp2] = temp;
      temp = "";
    }
    if (i == str.length - 1){
      final[temp2] = temp;
    }
  }
  return final;
}

var flashGreen = function(color) {
  for (var i = 0; i < 11; i++) {
    setTimeout(function(){
          if (document.body.style.backgroundColor != color) {
          document.body.style.backgroundColor = color;
          }
          else {
            document.body.style.backgroundColor = "#F0FFFF"
          }
        }, i*175)
  }
}
