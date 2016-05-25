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
for(i=0;i<5;i++){
  document.write("<div class=\"col-md-5 jumbotron\"><a href='page.php?id="+$i+"'><h1>"+obj.memes[$i].name+"</h1></a><br><img class=\"meme\" src='"+obj.memes[$i].file+"' /><br><br><p>"+obj.memes[$i].description+"</p><br><a href=\""+obj.memes[$i].file+"\" download><button class=\"btn btn-success\">DOWNLOAD</button></a><button class=\"btn btn-warning\">SHARE</button></div><br>");$i++;
}
