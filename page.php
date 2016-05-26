<?php
$j = strip_tags(stripslashes($_GET['id']));
?>
<html>
  <head>
    <!-- resizing screen for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--importing css to html-->
    <link rel="stylesheet" type="text/css" href="index.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.1/bootstrap-material-design.css">
    <title>3dankmemes</title>
  </head>
  <body>
    <script>
    $j = <?php print $j;?>;
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
    for($j =0; $j < 1; $j++){
      document.write("<div class=\"col-md-5 jumbotron\"><h1>"+obj.memes[$j].name+"</h1><br><img class=\"meme\" src='"+obj.memes[$j].file+"' /><br><br><p>"+obj.memes[$j].description+"</p><br><a href=\""+obj.memes[$j].file+"\" download><button class=\"btn btn-success\">DOWNLOAD</button></a><button class=\"btn btn-warning\">SHARE</button></div><br>");$i++;}
    </script>
  </body>
</html>
