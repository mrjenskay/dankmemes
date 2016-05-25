document.write('<div id="header"><p class="hak">5 memes</p></div><center><div class=\"container-fluid\">');
  var text = '{"memes":[' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner." ,"file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"},' +
  '{"name":"Smoke weed everyday!!!","description":"This is Tijmen, Tijmen is a stoner.", "file":"img/1.png"}]}';

  obj = JSON.parse(text);
$i = 0;while ($i < 5){
  document.write("<div class=\"col-md-5 jumbotron\"><h1>"+obj.memes[$i].name+"</h1><br><img class=\"meme\" src='"+obj.memes[$i].file+"' /><br><br><p>"+obj.memes[$i].description+"</p><br><a href=\""+obj.memes[$i].file+"\" download><button class=\"btn btn-success\">DOWNLOAD</button></a><button class=\"btn btn-warning\">SHARE</button></div><br>");$i++;}

function more() {
$j = 5;while ($j < 10){
  document.write("<div class=\"col-md-5 jumbotron\"><h1>"+obj.memes[$i].name+"</h1><br><img src='"+obj.memes[$j].file+"' /><br><br><p>"+obj.memes[$j].description+"</p><br><a href=\""+obj.memes[$j].file+"\" download><button class=\"btn btn-success\">DOWNLOAD</button></a><button class=\"btn btn-warning\">SHARE</button></div><br>");$j++;}
}
