var request = new XMLHttpRequest;
var subreddit = parse(document.location.search).subreddit;
request.open('get','http://www.reddit.com/r/'+subreddit+'/new.json','true');
request.addEventListener('load', function() {
  var info = JSON.parse(request.response);
  for (var i = 0; i < info.data.children.length; i++) {
    var a = document.createElement('a');
    a.href = "/show.html?author="+info.data.children[i].data.author+"&title="+info.data.children[i].data.title;
    a.innerHTML = info.data.children[i].data.title + '<br>';
    document.body.appendChild(a);
  }
});
request.send(null);
