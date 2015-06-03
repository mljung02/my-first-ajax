var author = parse(document.location.search).author;
var title = parse(document.location.search).title;
var request = new XMLHttpRequest;
request.open('get','http://www.reddit.com/user/'+author+"/about.json",'true');
request.addEventListener('load', function() {
  var info = JSON.parse(request.response);
  var string = "If you think it will help you guess, this author of the post \"<b>"
    + decodeURIComponent(title) + "</b>\" is named \"<b>" + info.data.name + ".</b>\"";
  var p = document.getElementById('div');
  var karma = parseInt(info.data.link_karma);
  var answer = document.getElementById('answer');
  div.innerHTML = string;
  var sel = document.getElementById('select');
  var button = document.getElementById('button');
  button.addEventListener('click', function(){
    if (karmaRange(karma) == select.value) {

      answer.innerHTML = "<h3>You got it right!<br>" + info.data.name +
      " had " + karma + " link karma.</h3><br><a href=\"/index.html\"><h3>Play Again!</h3></a>";

    }
    else {
      flashGreen('red');
      answer.innerHTML = "<h3>Incorrect!<br>" + info.data.name +
      " had " + karma + " link karma.</h3><br><a href=\"/index.html\"><h3>Play Again!</h3></a>";
    }
  })
});
request.send(null);
