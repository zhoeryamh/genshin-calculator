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
    <div class="modal fade" id="weaponSummary" tabindex="-1" role="dialog" aria-labelledby="weaponSummaryTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="weaponSummaryTitle">Summary</h5>
                <button type="button" class="btn btn-success btn-sm ml-2" id="weaponSummaryTotalScroll">Total</button>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="weaponSummaryBody">

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal" id="weaponSummaryClose">Close</button>
                <button type="button" class="btn btn-success" id="saveXlsx">Save to XLSX</button>
                <button type="button" class="btn btn-primary" onclick="printTable()">Print</button>
            </div>
            </div>
        </div>
    </div>
    <?php 
        $swordId = 'sword';
        $claymoreId = 'claymore';
        $polearmId = 'polearm';
        $bowId = 'bow';
        $catalystId = 'catalyst';

        $arrayType = [$swordId, $claymoreId, $polearmId, $bowId, $catalystId];
    ?>
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
                    <a class="nav-link" href="character-ascend">Character Ascension</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link disabled" href="#">Weapon Ascension</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <button type="button" id="deleteCookie" class="btn btn-danger col-lg-auto col-sm-12 mt-lg-0 mt-2 ml-lg-2" onclick="deleteForm()">Delete Data</button>
                </li>
                <li class="nav-item">
                    <span class="nav-link" href="weapon-ascend">Content : </span>
                </li>
                <?php
                    for ($index=0; $index < count($arrayType); $index++) { 
                        echo '<li><a class="nav-link" href="#'.$arrayType[$index].'" id="'.$arrayType[$index].'Content">'.ucfirst($arrayType[$index]).'</a></li>';
                    }
                ?>
            </ul>
        </div>
    </nav>
    <form id="weaponForm" style="width: 100%;margin: auto;">
    <!-- <div class="row" style="margin: 0px;" > -->
        <?php 
            $swordData = [$data['dat_sword'], $swordId];
            $claymoreData = [$data['dat_claymore'], $claymoreId];
            $polearmData = [$data['dat_polearm'], $polearmId];
            $bowData = [$data['dat_bow'], $bowId];
            $catalystData = [$data['dat_catalyst'], $catalystId];
            $stat = $data['stat_weapon'];

            $arrayStorage = [$swordData, $claymoreData, $polearmData, $bowData, $catalystData];

            for ($i=0; $i < count($arrayStorage); $i++) { 
                echo '<table class="table table-hover mb-0" id="table'.ucfirst($arrayStorage[$i][1]).'Ascend">
                <thead class="thead-dark">
                    <tr>
                        <th class="align-middle">
                        <input  class="form-control form-control-sm" type="search" id="search'.ucfirst($arrayStorage[$i][1]).'" onkeyup="searchTable(this.id, \'table'.ucfirst($arrayStorage[$i][1]).'Ascend\')" placeholder="Search '.ucfirst($arrayStorage[$i][1]).'">
                        </th>
                    </tr>
                    <tr>
                        <th class="align-middle">'.ucfirst($arrayStorage[$i][1]).'s</th>
                    </tr>
                </thead>
                ';
                for ($rarityGroup=5; $rarityGroup >= 1; $rarityGroup--) { 
                    echo '<tbody class="rarity-'.$rarityGroup.'">';
                    for ($weaponIndex = 0; $weaponIndex < count($arrayStorage[$i][0]); $weaponIndex++) {
                        $weaponDataIndex = $arrayStorage[$i][0][$weaponIndex];
                        if (($weaponDataIndex[$arrayStorage[$i][1].'_rarity'] == $rarityGroup)) {
                            $name = $weaponDataIndex[$arrayStorage[$i][1].'_name'];
                            $base = $weaponDataIndex[$arrayStorage[$i][1].'_atk'];
                            $substat = $weaponDataIndex[$arrayStorage[$i][1].'_stat'];
        
                            switch ($weaponDataIndex[$arrayStorage[$i][1].'_rarity']) {
                                case 1:
                                    $bg = "star1";
                                    $max = 4;
                                    break;
                                case 2:
                                    $bg = "star2";
                                    $max = 4;
                                    break;
                                case 3:
                                    $bg = "star3";
                                    $max = 6;
                                    break;
                                case 4:
                                    $bg = "star4";
                                    $max = 6;
                                    break;
                                case 5:
                                    $bg = "star5";
                                    $max = 6;
                                    break;
                            }
                            echo '
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox image-checkbox">
                                    <div class="row" style="margin: 0px;">
                                        <div style="width: fit-content; font-size: 12px;">
                                            <input type="checkbox" id="'.$arrayStorage[$i][1].'-'.$weaponIndex.'" name="'.$arrayStorage[$i][1].'-'.$weaponIndex.'" value="'.$weaponIndex.'" onclick="weaponClick(this.id, this.value, '.$i.')" class="'.$arrayStorage[$i][1].'Box custom-control-input">
                                            <label for="'.$arrayStorage[$i][1].'-'.$weaponIndex.'" class="custom-control-label text-center" title="'.$name.'">
                                                <img src="img/'.$arrayStorage[$i][1].'/'.($weaponIndex + 1).'.png" alt="'.$name.'" class="img-thumbnail '.$arrayStorage[$i][1].'-thumb '.$bg.'" style="width: 124px"><span class="spanName">'.$name.'</span>
                                            </label>
                                        </div>
                                        <div class="col pr-0">
                                            <div class="weapon-data" style="height: 80px; font-size: 14px;">
                                                <p><b>Base ATK : </b>'.$base.'</p>
                                                <p><b>'.$stat[$substat[0]].' : </b>'.$substat[1].'</p>
                                            </div>
                                            <hr class="my-1">
                                            <div class="form-group mb-0">
                                                <input name="'.$arrayStorage[$i][1].'-ascend-'.$weaponIndex.'" id="'.$arrayStorage[$i][1].'-ascend-'.$weaponIndex.'" type="number" class="form-control form-control-sm" min="0" max="'.$max.'" disabled required placeholder="Ascend">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>';
                        }
                    }
                }
                echo '</tbody>';
            }
            echo '</table>';
        ?>
    <!-- </div> -->
    </form>
    <footer class="footer">
        <button type="button" id="weaponSubmit" class="btn btn-primary btn-lg col-12">SUBMIT</button>
    </footer>
    <!-- Javascript Start -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/weaponWorker.js"></script>
    <script type="text/javascript" src="js/table.js"></script>
    <script type="text/javascript" src="js/weaponJobs.js"></script>
</body>
<?php

?>
</html>