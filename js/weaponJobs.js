// // Event Listener on Button
var swordId, claymoreId, polearmId, bowId, catalystId;
swordId = "sword";
claymoreId = "claymore";
polearmId = "polearm";
bowId = "bow";
catalystId = "catalyst";

$('#weaponSummaryTotalScroll').on('click', function () {
    document.getElementById('printTable').scrollIntoView();
});

var arrayType = [swordId, claymoreId, polearmId, bowId, catalystId];

for (let index = 0; index < arrayType.length; index++) {
    $('#' + arrayType[index] + 'Content').on('click', function () {
        document.getElementById('table' + arrayType[index].charAt(0).toUpperCase() + arrayType[index].slice(1) + 'Ascend').scrollIntoView();
    });
}


// // Event Listener on Modal Show
$('#weaponSummary').on('show.bs.modal', swordSummaryModal);
$('#weaponSummary').on('show.bs.modal', sumAllMaterial);
$('#weaponSummary').on('shown.bs.modal', exportTable);
// // Delete Div on Modal Hide
$('#weaponSummary').on('hide.bs.modal', function () {
    document.getElementById("dataTable").remove();
    document.getElementById("printTable").remove();
});

if (document.getElementById('weaponSubmit')) {
    document.getElementById('weaponSubmit').addEventListener('click', checkSwordForm);
}

if (document.getElementById("weaponForm")) {
    $.getJSON("genshin.json", function(data){
    
        let swordData = [data.dat_sword, swordId];
        let claymoreData = [data.dat_claymore, claymoreId];
        let polearmData = [data.dat_polearm, polearmId];
        let bowData = [data.dat_bow, bowId];
        let catalystData = [data.dat_catalyst, catalystId];
    
        let arrayStorage = [swordData, claymoreData, polearmData, bowData, catalystData];
        for (let i = 0; i < arrayStorage.length; i++) {
            for (let index = 0; index < Object.keys(arrayStorage[i][0]).length; index++) { 
                // console.log(arrayStorage[i][1] + "-" + index);
                var weapon = document.getElementById(arrayStorage[i][1] + "-" + index);
                var ascend = document.getElementById(arrayStorage[i][1] + "-ascend-" + index);

                weapon.checked = localStorage.getItem(arrayStorage[i][1] + "-" + index);
                if (weapon.checked) {
                    ascend.disabled = false;
                    ascend.value = localStorage.getItem(arrayStorage[i][1] + "-ascend-" + index);
                }
            }
        }
    })
}

function checkSwordForm() {
    let swordData = [document.getElementsByClassName(swordId + "Box"), swordId];
    let claymoreData = [document.getElementsByClassName(claymoreId + "Box"), claymoreId];
    let polearmData = [document.getElementsByClassName(polearmId + "Box"), polearmId];
    let bowData = [document.getElementsByClassName(bowId + "Box"), bowId];
    let catalystData = [document.getElementsByClassName(catalystId + "Box"), catalystId];

    let arrayBox = [swordData, claymoreData, polearmData, bowData, catalystData];

    var isChecked = false;
    var isFilled = false;
    for (let i = 0; i < arrayBox.length; i++) {
        for (let arrayIndex = 0; arrayIndex < arrayBox[i][0].length; arrayIndex++) {
            let arrayId = arrayBox[i][0].item(arrayIndex);
            let arrayIdIndex = arrayId.id.substr(arrayBox[i][1].length + 1, 3)
            // console.log(arrayId.checked + ", " + arrayIdIndex);
            if ( arrayId.checked ) { 
                isChecked = true;

                var ascend = document.getElementById(arrayBox[i][1] + "-ascend-" + arrayIdIndex);
                // console.log(arrayBox[i][1] + "-ascend-" + arrayIdIndex);
                if (!!ascend.value) {
                    isFilled = true;
                }

                if (isChecked && isFilled) {
                    localStorage.setItem(arrayBox[i][1] + "-" + arrayIdIndex, true);
                    localStorage.setItem(arrayBox[i][1] + "-ascend-" + arrayIdIndex, ascend.value);
                }
            } else {
                localStorage.removeItem(arrayBox[i][1] + "-" + arrayIdIndex);
                localStorage.removeItem(arrayBox[i][1] + "-ascend-" + arrayIdIndex);
            }
        }
    }

    // console.log(isChecked + ", " + isFilled);
    if ( !isChecked ) {
        alert("Pick at least 1 Weapon");
        return false;
    } else if ( !isFilled ) {
        alert("Please fill Ascend Level");
        return false;
    } else {
        $("#weaponSummary").modal()
    }
}

// // Weapon Checkbox Validation
function weaponClick(id,value, index) {
    var weapon = document.getElementById(id);
    if ( weapon.checked ) {
        document.getElementById(arrayType[index] + "-ascend-" + value).disabled = false;
    } else {                
        document.getElementById(arrayType[index] + "-ascend-" + value).disabled = true;
    };
}

// // Create Table Inside Modal Summary
function swordSummaryModal() {
    var table, tableId, divId, sum, name;

    divId = "dataTable";
    tableId = "tableSwordSummary";

    createDivTable("weaponSummaryBody", divId);
    createTable(divId, tableId);

    table = document.getElementById(tableId);
    $.getJSON("genshin.json", function(data){
        let swordData = [data.dat_sword, swordId];
        let claymoreData = [data.dat_claymore, claymoreId];
        let polearmData = [data.dat_polearm, polearmId];
        let bowData = [data.dat_bow, bowId];
        let catalystData = [data.dat_catalyst, catalystId];
    
        let arrayStorage = [swordData, claymoreData, polearmData, bowData, catalystData];
        
        for (let i = 0; i < arrayStorage.length; i++) {
            for (let weaponIndex = 0; weaponIndex < Object.keys(arrayStorage[i][0]).length; weaponIndex++) {
                var weapon = document.getElementById(arrayStorage[i][1] + "-" + weaponIndex);
                var ascend = document.getElementById(arrayStorage[i][1] + "-ascend-" + weaponIndex);

                var weaponName = arrayStorage[i][0][weaponIndex][arrayStorage[i][1] + "_name"];
                var weaponAscend = arrayStorage[i][0][weaponIndex][arrayStorage[i][1] + "_ascend"];
                var weaponComm = arrayStorage[i][0][weaponIndex][arrayStorage[i][1] + "_comm"];
                var weaponRarity = arrayStorage[i][0][weaponIndex][arrayStorage[i][1] + "_rarity"];

                var weaponHead, weaponRow, parentHead, parentBody, parentRow;
                if (weapon.checked) { 
                    weaponHead = arrayStorage[i][1] + "Head-" + weaponIndex;
                    weaponRow = arrayStorage[i][1] + "Row-" + weaponIndex;
                    
                    createHeadTable(table, weaponHead, "thead-dark");
                    createRowTable(weaponHead, weaponRow, null);
                    createDataHeadTable(weaponHead, weaponName, 2);

                    parentHead = arrayStorage[i][1] + "AscendHead-" + weaponIndex;
                    parentBody =  arrayStorage[i][1] + "AscendBody-" + weaponIndex;
                    parentRow = arrayStorage[i][1] + "AscendRow-" + weaponIndex;

                    createHeadTable(table, parentHead, "thead-light");
                    createRowTable(parentHead, parentRow)
                    createDataHeadTable(parentHead, "Weapon Ascension Material", null);
                    createDataHeadTable(parentHead, "Need", null);
            
                    createBodyTable(table, parentBody);

                    for (let weapIndex = 0; weapIndex < Object.keys(data.mat_weapon[weaponAscend]).length; weapIndex++) {
                        sum = weapCount(weapIndex, ascend.value, weaponRarity);

                        if (sum > 0) {
                            let rowParent = arrayStorage[i][1] + "RowSum-" + weaponIndex + "-" + weapIndex;
                            let rowImg = "img/weap/"+weaponAscend+"/"+weapIndex+".png";
                            let rowName = data.mat_weapon[weaponAscend][weapIndex];

                            let rarity;
                            switch (weapIndex) {
                                case 0:
                                    rarity = "star2";
                                    break;
                                case 1:
                                    rarity = "star3";
                                    break;
                                case 2:
                                    rarity = "star4";
                                    break;
                                case 3:
                                    rarity = "star5";
                                    break;
                            }

                            createRowTable(parentBody, rowParent, null);
                            createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail " + rarity, "height: 49px;width: 49px;object-fit: contain;", rowName);
                            createDataCountTable(rowParent, null, "align-middle weap-" + weaponAscend + "-" + weapIndex, sum);
                        }
                    }

                    parentHead = arrayStorage[i][1] + "CommonHead-" + weaponIndex;
                    parentBody =  arrayStorage[i][1] + "CommonBody-" + weaponIndex;
                    parentRow = arrayStorage[i][1] + "CommonRow-" + weaponIndex;

                    createHeadTable(table, parentHead, "thead-light");
                    createRowTable(parentHead, parentRow)
                    createDataHeadTable(parentHead, "Common Material", null);
                    createDataHeadTable(parentHead, "Need", null);
            
                    createBodyTable(table, parentBody);

                    for (let arrayComm = 0; arrayComm < Object.keys(weaponComm).length; arrayComm++) {
                        let arrayValue = weaponComm[arrayComm];
                        
                        for (let commIndex = 0; commIndex < Object.keys(data.mat_comm[arrayValue]).length; commIndex++) {
                            sum = commCount(arrayComm, commIndex, ascend.value, weaponRarity);

                            if (sum > 0) {
                                let rowParent = "commRowSum-" + weaponIndex + "-" + arrayValue + "-" + commIndex;
                                let rowImg = "img/comm/"+arrayValue+"/"+commIndex+".png";
                                let rowName = data.mat_comm[arrayValue][commIndex];

                                let rarity;
                                if (arrayComm == 0) {
                                    switch (commIndex) {
                                        case 0:
                                            rarity = "star3";
                                            break;
                                        case 1:
                                            rarity = "star3";
                                            break;
                                        case 2:
                                            rarity = "star4";
                                            break;
                                    }
                                } else if (arrayComm == 1) {
                                    switch (commIndex) {
                                        case 0:
                                            rarity = "star1";
                                            break;
                                        case 1:
                                            rarity = "star2";
                                            break;
                                        case 2:
                                            rarity = "star3";
                                            break;
                                    }
                                }
        
                                createRowTable(parentBody, rowParent, null);
                                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail " + rarity, "height: 49px;width: 49px;object-fit: contain;", rowName);
                                createDataCountTable(rowParent, null, "align-middle comm-" + arrayValue + "-" + commIndex, sum);
                            }
                        }
                    }
                }
            }
        }
    });

    let horizontalRule = document.createElement("HR");
    horizontalRule.setAttribute("class", "mt-0 mb-4");
    document.getElementById(divId).appendChild(horizontalRule);
}

function sumAllMaterial() {
    var table, tableId, divId;

    divId = "printTable";
    tableId = "tableSummaryPrint";

    createDivTable("weaponSummaryBody", divId);
    createTable(divId, tableId);

    table = document.getElementById(tableId);

    parentHead = "tableHead";
    parentRow = "tableRow";
    
    createHeadTable(table, parentHead, "thead-dark");
    createRowTable(parentHead, parentRow, null);
    createDataHeadTable(parentRow, "Total Material", "2");

    $.getJSON("genshin.json", function(data){
        parentHead = "weapPrintHead";
        parentBody = "weapPrintBody";
        parentRow = "weapPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Weapon Ascension Material", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataWeap = data.mat_weapon;
        for (let arrayIndex = 0; arrayIndex < Object.keys(dataWeap).length; arrayIndex++) {
            var dataArray = dataWeap[arrayIndex];

            for (let weapIndex = 0; weapIndex < Object.keys(dataArray).length; weapIndex++) {
                let className = "weap-"+arrayIndex+"-"+weapIndex;
                let sum = sumClass(className);

                if (sum > 0) {
                    let rowParent = "weapPrintRowSum-" + arrayIndex + "-" + weapIndex;
                    let rowImg = "img/weap/" + arrayIndex + "/" + weapIndex + ".png";
                    let rowName = dataArray[weapIndex];
                            
                    let rarity;
                    switch (weapIndex) {
                        case 0:
                            rarity = "star2";
                            break;
                        case 1:
                            rarity = "star3";
                            break;
                        case 2:
                            rarity = "star4";
                            break;
                        case 3:
                            rarity = "star5";
                            break;
                    }

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail " + rarity, "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle", sum);
                }
            }
        }
        
        parentHead = "commPrintHead";
        parentBody = "commPrintBody";
        parentRow = "commPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Common Enemies Material", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataComm = data.mat_comm;
        for (let commIndex = 0; commIndex < Object.keys(dataComm).length; commIndex++) {
            var arrayComm = data.mat_comm[commIndex];

            for (let arrayIndex = 0; arrayIndex < Object.keys(arrayComm).length; arrayIndex++) {
                let className = "comm-"+commIndex+"-"+arrayIndex;
                let sum = sumClass(className);

                if (sum > 0) {
                    let rowParent = "commPrintRowSum-" + commIndex + "-" + arrayIndex;
                    let rowImg = "img/comm/" + commIndex + "/" + arrayIndex + ".png";
                    let rowName = arrayComm[arrayIndex];

                    let rarity;
                    switch (arrayIndex) {
                        case 0:
                            rarity = "star1";
                            break;
                        case 1:
                            rarity = "star2";
                            break;
                        case 2:
                            rarity = "star3";
                            break;
                    }

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail " + rarity, "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle", sum);
                }
            }
        }
    })

    let horizontalRule = document.createElement("HR");
    horizontalRule.setAttribute("class", "mt-0 mb-0");
    document.getElementById(divId).appendChild(horizontalRule);
}

// // Table Search
function searchTable(id, tableId) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(id);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableId);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}

function exportTable() {
    var instance = new TableExport(document.getElementById('printTable'), {
        headers: false,
        formats: ["xlsx"],
        bootstrap: true,
        filename: "Weapon Ascension - Genshin Calculator Summary",
        sheetname: "Summary",
        exportButtons: false,
    });
    var exportTable = instance.getExportData()['printTable']['xlsx'];
    var saveXlsx = document.getElementById('saveXlsx');
    saveXlsx.addEventListener('click', function (e) {
        //                   // data          // mime              // name              // extension
        instance.export2file(exportTable.data, exportTable.mimeType, exportTable.filename, exportTable.fileExtension, exportTable.merges, exportTable.RTL, exportTable.sheetname);
    });
}

// // Summary Table Print
function printTable() {
    var divContents = document.getElementById("printTable").innerHTML; 
    var a = window.open(); 
    a.document.write('<html>');
    a.document.write('<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="css/work.css"></head><body>'); 
    a.document.write(divContents); 
    a.document.write('<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script><sup class="blockquote-footer">Printed on :  <cite>'+ Date() +'</cite></sup></body></html>'); 
    a.document.close();
    a.print(); 
}

// // Delete LocalStorage Data
function deleteForm() {
    var localDelete = confirm("Delete all Form Data ?");
    if (localDelete == true) {
        localStorage.clear();
        alert("All Form Data has been deleted.");
    }
}