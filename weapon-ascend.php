<?php $json = file_get_contents('genshin.json'); $data = json_decode($json, true); ?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
    <!-- Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="Genshin Impact, Genshin Impact Calculator, Genshin Calculator, Ascend Calculator, Ascend Planner">
    <meta name="description" content="Genshin Calculator is a simple application to calculate how much material is needed to ascend a character or a weapon and raise the talent level.">
    <meta name="author" content="Surya Maulana">

	<title>Genshin Calculator - Hzed-Group</title>

	<!-- Favicons Start -->
	<!-- In case image.png -->
	<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico?v=1" />
	<!-- Favicons End -->

	<!-- CSS Start -->
	<link rel="stylesheet" type="text/css" href="css/work.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<!-- CSS End -->

    <!-- JS Start -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <!-- JS End -->
</head>
<body class="bg-light">
    <!-- Modal -->
    <div class="modal fade" id="summary" tabindex="-1" role="dialog" aria-labelledby="summaryTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="summaryTitle">Summary</h5>
                <button type="button" class="btn btn-success btn-sm ml-2" id="summaryTotalScroll">Total</button>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="summaryBody">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal" id="summaryClose">Close</button>
                <button type="button" class="btn btn-success" id="saveXlsx">Save to XLSX</button>
                <button type="button" class="btn btn-primary" onclick="printTable()">Print</button>
            </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href=".">
            <img src="img/logo/logo-white.png" height="40" alt="Genshin Calculator">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="character-ascend">Character Ascend</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link disabled" href="weapon-ascend">Weapon Ascend</a>
            </li>
            </ul>
        </div>
    </nav>
    <div class="jumbotron" style="width: fit-content; margin: auto;">
        <h1 class="display-4">Weapon Ascend is Coming to this website soon.</h1>
        <p class="lead">Calm down guys.</p>
    </div>
    
    <!-- Javascript Start -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
<?php

?>
</html>