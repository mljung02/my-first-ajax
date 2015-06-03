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
