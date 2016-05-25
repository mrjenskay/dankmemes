document.write('<div id="header"><p class="hak">10 memes</p></div><center>');
$i = 0;while ($i < 10){
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
  document.write("<div class=\"col-md-5 jumbotron\"><h1>"+obj.memes[$i].name+"</h1><br><img src='"+obj.memes[$i].file+"' /><br><br><p>"+obj.memes[$i].description+"</p><br><button class=\"btn btn-success\">DOWNLOAD</button><button class=\"btn btn-warning\">SHARE</button></div><br>");$i++;}
