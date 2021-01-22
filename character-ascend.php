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
	<link rel="stylesheet" type="text/css" href="css/image-checkbox.min.css">
	<link rel="stylesheet" type="text/css" href="css/work.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<!-- CSS End -->

    <!-- JS Start -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="js/xlsx.core.min.js"></script>
    <script src="js/FileSaver.min.js"></script>
    <script src="js/tableexport.js"></script>
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
            <li class="nav-item active">
                <a class="nav-link" href="character-ascend">Character Ascension</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Weapon Ascension</a>
            </li>
            </ul>
            <button type="button" id="deleteCookie" class="btn btn-danger col-lg-auto col-sm-12 mt-lg-0 mt-2 ml-lg-2" onclick="deleteForm()">Delete Data</button>
        </div>
    </nav>
    <form id="farmForm" style="width: 100%;margin: auto;">
    <div class="table-responsive-lg">
        <table class="table table-hover mb-0" id="tableCharaAscend">
            <thead class="thead-dark">
                <tr>
                    <th class="align-middle" colspan="2">
                    <input  class="form-control form-control-sm" type="search" id="searchChara" onkeyup="searchTable(this.id, 'tableCharaAscend')" placeholder="Search Character">
                    </th>
                </tr>
                <tr>
                    <th style="width: 148px" class="align-middle text-center">Character</th>
                    <th class="align-middle pl-0">Current Ascend & Talent Level</th>
                </tr>
            </thead>
            <tbody>
            <?php
                // echo $dat_ele[3]['element_name'];
                for ($charIndex = 0; $charIndex < count($data['dat_char']); $charIndex++) {
                    $name = $data['dat_char'][$charIndex]['char_name'];

                    if ($charIndex == 20) {
                        $element = 1;
                    } else if ($charIndex == 21) {
                        $element = 4;
                    } else {
                        $element = $data['dat_char'][$charIndex]['char_ele'];
                    }

                    switch ($data['dat_char'][$charIndex]['char_rarity']) {
                        case 1:
                            $bg = "star4";
                            break;
                        case 2:
                            $bg = "star5";
                            break;
                    }
                    echo '
                <tr>
                    <td>
                        <div class="custom-control custom-checkbox image-checkbox" style="font-size: 12px;">
                            <input type="checkbox" id="chara-'.$charIndex.'" name="chara-'.$charIndex.'" value="'.$charIndex.'" onclick="charaClick(this.id, this.value)" class="charaBox custom-control-input" '; if ($charIndex == 24) { echo 'disabled'; }; echo '>
                            <label for="chara-'.$charIndex.'" class="custom-control-label text-center" title="'.$name.'">
                                <img src="img/chara/'.($charIndex + 1).'.png" alt="'.$name.'" class="img-thumbnail '.$bg.'" style="width: 124px"><span class="spanName">'.$name.'</span><img src="img/ele/'.$element.'.png" class="element" style="width: 30px;">
                            </label>
                        </div>
                    </td>
                    <td class="pl-0">
                        <div class="form-group mb-0">
                            <input name="ascend-'.$charIndex.'" id="ascend-'.$charIndex.'" type="number" class="form-control form-control-sm" min="0" max="6" disabled required placeholder="Ascend">
                        </div>
                        <div class="form-group mb-0">
                            <input name="talent1-'.$charIndex.'" id="talent1-'.$charIndex.'" type="number" class="form-control form-control-sm" min="1" max="10" disabled required placeholder="Basic Attack">
                        </div>
                        <div class="form-group mb-0">
                            <input name="talent2-'.$charIndex.'" id="talent2-'.$charIndex.'" type="number" class="form-control form-control-sm" min="1" max="10" disabled required placeholder="Elemental Skill">
                        </div>
                        <div class="form-group mb-0">
                            <input name="talent3-'.$charIndex.'" id="talent3-'.$charIndex.'" type="number" class="form-control form-control-sm" min="1" max="10" disabled required placeholder="Elemental Burst">
                        </div>
                    </td>
                </tr>';
                }
            ?>
            </tbody>
        </table>
    </div>
    </form>
    <footer class="footer">
        <button type="button" id="charaSubmit" class="btn btn-primary btn-lg col-12">SUBMIT</button>
    </footer>
    <!-- Javascript Start -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/worker.js"></script>
    <script type="text/javascript" src="js/table.js"></script>
    <script type="text/javascript" src="js/jobs.js"></script>
</body>
<?php

?>
</html>