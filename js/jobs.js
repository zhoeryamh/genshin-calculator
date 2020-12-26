// Running on start
// // Form Check
if (document.getElementById('charaSubmit')) {
    document.getElementById('charaSubmit').addEventListener('click', checkForm);
}

// // Event Listener on Button
$('#summaryTotalScroll').on('click', function () {
    document.getElementById('printTable').scrollIntoView();
});

// // Event Listener on Modal Show
$('#summary').on('show.bs.modal', summaryModal);
$('#summary').on('show.bs.modal', sumAllMaterial);
$('#summary').on('shown.bs.modal', exportTable);
// // Delete Div on Modal Hide
$('#summary').on('hide.bs.modal', function () {
    document.getElementById("dataTable").remove();
    document.getElementById("printTable").remove();
});

// // LocalStorage Validation
window.onload = function() {
    $.getJSON("genshin.json", function(data){
        for (let index = 0; index < Object.keys(data.dat_char).length; index++) {  
            var chara = document.getElementById("chara-" + index);
            var ascend = document.getElementById("ascend-" + index);
            var talent1 = document.getElementById("talent1-" + index);
            var talent2 = document.getElementById("talent2-" + index);
            var talent3 = document.getElementById("talent3-" + index);

            chara.checked = localStorage.getItem("chara-" + index);
            if (chara.checked) {
                ascend.disabled = false;
                ascend.value = localStorage.getItem("ascend-" + index);
                talent1.disabled = false;
                talent1.value = localStorage.getItem("talent1-" + index);
                talent2.disabled = false;
                talent2.value = localStorage.getItem("talent2-" + index);
                talent3.disabled = false;
                talent3.value = localStorage.getItem("talent3-" + index); 
            }
        }
    })
}; 

// Run with Function
// // Checkbox Validation
function charaClick(id,value) {
    var chara = document.getElementById(id);
    if ( chara.checked ) {
        document.getElementById("ascend-" + value).disabled = false;
        document.getElementById("talent1-" + value).disabled = false;
        document.getElementById("talent2-" + value).disabled = false;
        document.getElementById("talent3-" + value).disabled = false;
    } else {                
        document.getElementById("ascend-" + value).disabled = true;
        document.getElementById("talent1-" + value).disabled = true;
        document.getElementById("talent2-" + value).disabled = true;
        document.getElementById("talent3-" + value).disabled = true;
    };
}

// // Checkbox Checked Validation
function checkForm() {
    var formBox = document.getElementsByClassName("charaBox");

    var isChecked = false;
    for (let i = 0; i < formBox.length; i++) {
        if ( formBox[i].checked ) { 
            isChecked = true;

            var ascend = document.getElementById("ascend-" + i);
            if (!ascend.value) {
                alert("Please fill Ascend Level");
                return false;
            }
            
            var talent1 = document.getElementById("talent1-" + i);
            if (!talent1.value) {
                alert("Please fill Basic Attack Level");
                return false;
            }
            
            var talent2 = document.getElementById("talent2-" + i);
            if (!talent2.value) {
                alert("Please fill Elemental Skill Level");
                return false;
            }
            
            var talent3 = document.getElementById("talent3-" + i);
            if (!talent3.value) {
                alert("Please fill Elemental Burst Level");
                return false;
            }

            if (isChecked && ascend.value && talent1.value && talent2.value && talent3.value) {
                localStorage.setItem("chara-" + i, true);
                localStorage.setItem("ascend-" + i, ascend.value);
                localStorage.setItem("talent1-" + i, talent1.value);
                localStorage.setItem("talent2-" + i, talent2.value);
                localStorage.setItem("talent3-" + i, talent3.value);
            }
        } else {
            localStorage.removeItem("chara-" + i);
            localStorage.removeItem("ascend-" + i);
            localStorage.removeItem("talent1-" + i);
            localStorage.removeItem("talent2-" + i);
            localStorage.removeItem("talent3-" + i);
        }
    }
    if ( !isChecked ) {
        alert("Pick at least 1 Character");
        return false;
    } else {
        $("#summary").modal()
    }
}

// // Create Table Inside Modal Summary
function summaryModal() {
    var table, tableId, divId, sum, name;

    divId = "dataTable";
    tableId = "tableSummary";

    createDivTable("summaryBody", divId);
    createTable(divId, tableId);

    table = document.getElementById(tableId);
    $.getJSON("genshin.json", function(data){
        var charaBox = document.getElementsByClassName("charaBox");

        for (let charaIndex = 0; charaIndex < Object.keys(data.dat_char).length; charaIndex++) {
            var chara = document.getElementById("chara-" + charaIndex);
            var ascend = document.getElementById("ascend-" + charaIndex);
            var talent1 = document.getElementById("talent1-" + charaIndex);
            var talent2 = document.getElementById("talent2-" + charaIndex);
            var talent3 = document.getElementById("talent3-" + charaIndex);

            var charaName = data.dat_char[charaIndex].char_name;
            var charaEle = data.dat_char[charaIndex].char_ele;
            var charaSpec = data.dat_char[charaIndex].char_spec;
            var charaComm = data.dat_char[charaIndex].char_comm;
            var charaTalent = data.dat_char[charaIndex].char_talent;
            var charaWeek = data.dat_char[charaIndex].char_week;

            var charaHead, charaRow, parentHead, parentBody, parentRow;
            if (chara.checked) { 
                charaHead = "charaHead-" + charaIndex;
                charaRow = "charaRow-" + charaIndex;
                
                createHeadTable(table, charaHead, "thead-dark");
                createRowTable(charaHead, charaRow, null);
                createDataHeadTable(charaHead, charaName, 2);

                parentHead = "gemHead-" + charaIndex;
                parentBody =  "gemBody-" + charaIndex;
                parentRow = "gemRow-" + charaIndex;

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow)
                createDataHeadTable(parentHead, "Gems", null);
                createDataHeadTable(parentHead, "Need", null);
        
                createBodyTable(table, parentBody);

                for (let gemIndex = 0; gemIndex < Object.keys(data.mat_gem[charaEle]).length; gemIndex++) {
                    sum = gemCount(gemIndex, ascend.value);

                    if (!(charaBox[20].checked && charaIndex == 21)) {
                        if (sum > 0) {
                            let rowParent = "gemRowSum-" + charaIndex + "-" + gemIndex;
                            let rowImg = "img/gem/"+charaEle+"/"+gemIndex+".png";
                            let rowName = data.mat_gem[charaEle][gemIndex];
    
                            createRowTable(parentBody, rowParent, null);
                            createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                            createDataCountTable(rowParent, null, "align-middle gem-" + charaEle + "-" + gemIndex, sum);
                        }
                    }
                }

                parentHead = "eliteHead-" + charaIndex;
                parentBody =  "eliteBody-" + charaIndex;
                parentRow = "eliteRow-" + charaIndex;

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow)
                createDataHeadTable(parentHead, "Elite Boss Material", null);
                createDataHeadTable(parentHead, "Need", null);
        
                createBodyTable(table, parentBody);

                if (charaEle != 0) {
                    sum = eliteCount(ascend.value);
                } else {
                    sum = 0;
                }
                if (sum > 0) {
                    let rowParent = "eliteRowSum-" + charaIndex + "-" + charaEle;
                    let rowImg = "img/elite/"+charaEle+".png";
                    let rowName = data.mat_elite[charaEle];

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle elite-" + charaEle, sum);
                }

                parentHead = "specHead-" + charaIndex;
                parentBody =  "specBody-" + charaIndex;
                parentRow = "specRow-" + charaIndex;

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow)
                createDataHeadTable(parentHead, "Region Speciality", null);
                createDataHeadTable(parentHead, "Need", null);
        
                createBodyTable(table, parentBody);

                sum = specCount(ascend.value);
                if (!(charaBox[20].checked && charaIndex == 21)) {
                    if (sum > 0) {
                        let rowParent = "specRowSum-" + charaIndex + "-" + charaSpec;
                        let rowImg = "img/spec/"+charaSpec+".png";
                        let rowName = data.mat_spec[charaSpec];

                        createRowTable(parentBody, rowParent, null);
                        createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                        createDataCountTable(rowParent, null, "align-middle spec-" + charaSpec, sum);
                    }
                }

                parentHead = "commHead-" + charaIndex;
                parentBody =  "commBody-" + charaIndex;
                parentRow = "commRow-" + charaIndex;

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow)
                createDataHeadTable(parentHead, "Common Enemies Material", null);
                createDataHeadTable(parentHead, "Need", null);
        
                createBodyTable(table, parentBody);

                if (Array.isArray(charaComm)) {
                    for (let arrayComm = 0; arrayComm < Object.keys(charaComm).length; arrayComm++) {
                        let arrayValue = charaComm[arrayComm];
                        
                        for (let commIndex = 0; commIndex < Object.keys(data.mat_comm[arrayValue]).length; commIndex++) {
                            if (arrayComm == 0) {
                                sum = commCount(commIndex, ascend.value);
                            }

                            if (Object.keys(charaComm).length == 2) {
                                if (arrayComm == 1) {
                                    sum = 0;
                                    sum += talentCommCount(commIndex, talent1.value, talent2.value, talent3.value);
                                }
                            } else {
                                if (arrayComm == 1) {
                                    sum = 0;
                                    sum += talentCommCount(commIndex, talent1.value, "10", "10");
                                } else if (arrayComm == 2) {
                                    sum = 0;
                                    sum += talentCommCount(commIndex, "10", talent2.value, talent3.value);
                                }
                            }

                            if (sum > 0) {
                                let rowParent = "commRowSum-" + charaIndex + "-" + arrayValue + "-" + commIndex;
                                let rowImg = "img/comm/"+arrayValue+"/"+commIndex+".png";
                                let rowName = data.mat_comm[arrayValue][commIndex];
        
                                createRowTable(parentBody, rowParent, null);
                                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                                createDataCountTable(rowParent, null, "align-middle comm-" + arrayValue + "-" + commIndex, sum);
                            }
                        }
                    }
                } else {
                    for (let commIndex = 0; commIndex < Object.keys(data.mat_comm[charaComm]).length; commIndex++) {
                        sum = commCount(commIndex, ascend.value);
                        sum += talentCommCount(commIndex, talent1.value, talent2.value, talent3.value);
                        if (sum > 0) {
                            let rowParent = "commRowSum-" + charaIndex + "-" + commIndex;
                            let rowImg = "img/comm/"+charaComm+"/"+commIndex+".png";
                            let rowName = data.mat_comm[charaComm][commIndex];
    
                            createRowTable(parentBody, rowParent, null);
                            createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                            createDataCountTable(rowParent, null, "align-middle comm-" + charaComm + "-" + commIndex, sum);
                        }
                    }
                }

                parentHead = "talentHead-" + charaIndex;
                parentBody =  "talentBody-" + charaIndex;
                parentRow = "talentRow-" + charaIndex;

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow)
                createDataHeadTable(parentHead, "Talent Material", null);
                createDataHeadTable(parentHead, "Need", null);
        
                createBodyTable(table, parentBody);

                if (Array.isArray(charaTalent)) {
                    // console.log("Chara Index: " + charaIndex + ", Talent Count: " + Object.keys(charaTalent).length);

                    for (let arrayTalent = 0; arrayTalent < Object.keys(charaTalent).length; arrayTalent++) {
                        // console.log("Array Index: " + arrayTalent + ", Array Count: " + Object.keys(charaTalent[arrayTalent]).length + ", Array Data: " +charaTalent[arrayTalent]);

                        for (let talentArray = 0; talentArray < Object.keys(charaTalent[arrayTalent]).length; talentArray++) {
                            // console.log("Talent Index: " + talentArray + ", Talent Count: " + Object.keys(charaTalent[arrayTalent][talentArray]).length + ", Array Data: " +charaTalent[arrayTalent][talentArray]);

                            let charaTalentIndex = charaTalent[arrayTalent][talentArray][0];
                            let charaTalentPos = charaTalent[arrayTalent][talentArray][1];

                            if (Object.keys(charaTalent).length == 1) {
                                if (arrayTalent == 0) {
                                    sum = 0;
                                    sum += talentTravelerCount(charaTalentIndex, charaTalentPos, talent1.value, talent2.value, talent3.value);
                                }
                            } else {
                                if (arrayTalent == 0) {
                                    sum = 0;
                                    sum += talentTravelerCount(charaTalentIndex, charaTalentPos, talent1.value, "10", "10");
                                } else if (arrayTalent == 1) {
                                    sum = 0;
                                    sum += talentTravelerCount(charaTalentIndex, charaTalentPos, "10", talent2.value, talent3.value);
                                }
                            }
                            if (sum > 0) {
                                let rowParent = "talentRowSum-" + charaIndex + "-" + charaTalentIndex + "-" + charaTalentPos;
                                let rowImg = "img/talent/"+charaTalentIndex+"/"+charaTalentPos+".png";
                                let rowName = data.mat_talent[charaTalentIndex][charaTalentPos];

                                createRowTable(parentBody, rowParent, null);
                                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                                createDataCountTable(rowParent, null, "align-middle talent-" + charaTalentIndex + "-" + charaTalentPos, sum);
                                // console.log("Talent Data: " + rowName);
                            }
                        }
                    }
                } else {
                    for (let talentIndex = 0; talentIndex < Object.keys(data.mat_talent[charaTalent]).length; talentIndex++) {
                        sum = talentCount(talentIndex, talent1.value, talent2.value, talent3.value);
                        if (sum > 0) {
                            let rowParent = "talentRowSum-" + charaIndex + "-" + talentIndex;
                            let rowImg = "img/talent/"+charaTalent+"/"+talentIndex+".png";
                            let rowName = data.mat_talent[charaTalent][talentIndex];
    
                            createRowTable(parentBody, rowParent, null);
                            createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                            createDataCountTable(rowParent, null, "align-middle talent-" + charaTalent + "-" + talentIndex, sum);
                        }
                    }
                }

                parentHead = "weekHead-" + charaIndex;
                parentBody =  "weekBody-" + charaIndex;
                parentRow = "weekRow-" + charaIndex;

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow)
                createDataHeadTable(parentHead, "Weekly Boss Material", null);
                createDataHeadTable(parentHead, "Need", null);
        
                createBodyTable(table, parentBody);

                if (Array.isArray(charaWeek)) {
                    for (let arrayWeek = 0; arrayWeek < Object.keys(charaWeek).length; arrayWeek++) {
                        weekArray = charaWeek[arrayWeek];
                        sum = weekCount(talent1.value, talent2.value, talent3.value);
                        
                        if (arrayWeek == 0) {
                            sum = 0;
                            sum = weekCount("10", talent2.value, talent3.value);
                        } else if (arrayWeek == 1) {
                            sum = 0;
                            sum = weekCount(talent1.value, "10", "10");
                        }
                        
                        let rowParent = "weekRowSum-" + charaIndex + "-" + arrayWeek + "-" + weekArray;
                        let rowImg = "img/week/"+weekArray+".png";
                        let rowName = data.mat_week[weekArray];

                        createRowTable(parentBody, rowParent, null);
                        createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                        createDataCountTable(rowParent, null, "align-middle week-" + weekArray, sum);
                    }
                } else {
                    sum = weekCount(talent1.value, talent2.value, talent3.value);
                    if (sum > 0) {
                        let rowParent = "weekRowSum-" + charaIndex + "-" + charaWeek;
                        let rowImg = "img/week/"+charaWeek+".png";
                        let rowName = data.mat_week[charaWeek];

                        createRowTable(parentBody, rowParent, null);
                        createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                        createDataCountTable(rowParent, null, "align-middle week-" + charaWeek, sum);
                    }
                }

                parentHead = "eventHead-" + charaIndex;
                parentBody = "eventBody-" + charaIndex;
                parentRow = "eventRow-" + charaIndex;
                sum = eventCount(talent1.value, talent2.value, talent3.value);

                createHeadTable(table, parentHead, "thead-light");
                createRowTable(parentHead, parentRow, null);
                createDataHeadTable(parentRow, "Event Material", null);
                createDataHeadTable(parentRow, "Need", null);
                createBodyTable(table, parentBody);

                if (sum > 0) {
                    let rowParent = "eventRowSum-" + charaIndex + "-0";
                    let rowImg = "img/week/0.png";
                    let rowName = data.mat_week[0];

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle event-0", sum);
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

    createDivTable("summaryBody", divId);
    createTable(divId, tableId);

    table = document.getElementById(tableId);

    parentHead = "tableHead";
    parentRow = "tableRow";
    
    createHeadTable(table, parentHead, "thead-dark");
    createRowTable(parentHead, parentRow, null);
    createDataHeadTable(parentRow, "Total Material", "2");

    $.getJSON("genshin.json", function(data){
        parentHead = "gemPrintHead";
        parentBody = "gemPrintBody";
        parentRow = "gemPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Gem", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataEle = data.dat_ele;
        for (let eleIndex = 0; eleIndex < Object.keys(dataEle).length; eleIndex++) {
            var dataGem = data.mat_gem[eleIndex];

            for (let gemIndex = 0; gemIndex < Object.keys(dataGem).length; gemIndex++) {
                let className = "gem-"+eleIndex+"-"+gemIndex;
                let sum = sumClass(className);

                if (sum > 0) {
                    let rowParent = "gemPrintRowSum-" + eleIndex + "-" + gemIndex;
                    let rowImg = "img/gem/" + eleIndex + "/" + gemIndex + ".png";
                    let rowName = dataGem[gemIndex];

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle", sum);
                }
            }
        }

        parentHead = "elitePrintHead";
        parentBody = "elitePrintBody";
        parentRow = "elitePrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Elite Boss Material", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataEle = data.dat_ele;
        for (let eliteIndex = 0; eliteIndex < Object.keys(dataEle).length; eliteIndex++) {
            var dataElite = data.mat_elite[eliteIndex];

            let className = "elite-"+eliteIndex;
            let sum = sumClass(className);

            if (sum > 0) {
                let rowParent = "elitePrintRowSum-" + eliteIndex + "-" + eliteIndex;
                let rowImg = "img/elite/" + eliteIndex + ".png";
                let rowName = dataElite;

                createRowTable(parentBody, rowParent, null);
                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                createDataCountTable(rowParent, null, "align-middle", sum);
            }
        }

        parentHead = "specPrintHead";
        parentBody = "specPrintBody";
        parentRow = "specPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Region Speciality", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataSpec = data.mat_spec;
        for (let specIndex = 0; specIndex < Object.keys(dataSpec).length; specIndex++) {
            let className = "spec-"+specIndex;
            let sum = sumClass(className);

            if (sum > 0) {
                let rowParent = "specPrintRowSum-" + specIndex + "-" + specIndex;
                let rowImg = "img/spec/" + specIndex + ".png";
                let rowName = dataSpec[specIndex];

                createRowTable(parentBody, rowParent, null);
                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                createDataCountTable(rowParent, null, "align-middle", sum);
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

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle", sum);
                }
            }
        }
        
        parentHead = "talentPrintHead";
        parentBody = "talentPrintBody";
        parentRow = "talentPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Talent Material", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataTalent = data.mat_talent;
        for (let talentIndex = 0; talentIndex < Object.keys(dataTalent).length; talentIndex++) {
            var arraytalent = data.mat_talent[talentIndex];

            for (let arrayIndex = 0; arrayIndex < Object.keys(arraytalent).length; arrayIndex++) {
                let className = "talent-"+talentIndex+"-"+arrayIndex;
                let sum = sumClass(className);

                if (sum > 0) {
                    let rowParent = "talentPrintRowSum-" + talentIndex + "-" + arrayIndex;
                    let rowImg = "img/talent/" + talentIndex + "/" + arrayIndex + ".png";
                    let rowName = arraytalent[arrayIndex];

                    createRowTable(parentBody, rowParent, null);
                    createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                    createDataCountTable(rowParent, null, "align-middle", sum);
                }
            }
        }

        parentHead = "weekPrintHead";
        parentBody = "weekPrintBody";
        parentRow = "weekPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Weekly Boss Material", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataWeek = data.mat_week;
        for (let weekIndex = 0; weekIndex < Object.keys(dataWeek).length; weekIndex++) {
            let className = "week-"+weekIndex;
            let sum = sumClass(className);

            if (sum > 0) {
                let rowParent = "weekPrintRowSum-" + weekIndex + "-" + weekIndex;
                let rowImg = "img/week/" + weekIndex + ".png";
                let rowName = dataWeek[weekIndex];

                createRowTable(parentBody, rowParent, null);
                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                createDataCountTable(rowParent, null, "align-middle", sum);
            }
        }

        parentHead = "eventPrintHead";
        parentBody = "eventPrintBody";
        parentRow = "eventPrintRow";

        createHeadTable(table, parentHead, "thead-light");
        createRowTable(parentHead, parentRow, null);
        createDataHeadTable(parentRow, "Event Material", null);
        createDataHeadTable(parentRow, "Need", null);
        createBodyTable(table, parentBody);

        var dataEvent = data.mat_week;
        for (let eventIndex = 0; eventIndex < 1; eventIndex++) {
            let className = "event-"+eventIndex;
            let sum = sumClass(className);

            if (sum > 0) {
                let rowParent = "eventPrintRowSum-" + eventIndex;
                let rowImg = "img/week/" + eventIndex + ".png";
                let rowName = dataEvent[eventIndex];

                createRowTable(parentBody, rowParent, null);
                createDataNameTable(rowParent, rowImg, "img-fluid img-thumbnail", "height: 49px;width: 49px;object-fit: contain;", rowName);
                createDataCountTable(rowParent, null, "align-middle", sum);
            }
        }
    })

    let horizontalRule = document.createElement("HR");
    horizontalRule.setAttribute("class", "mt-0 mb-0");
    document.getElementById(divId).appendChild(horizontalRule);
}

// // Summary Table Print
function printTable() {
    var divContents = document.getElementById("printTable").innerHTML; 
    var a = window.open(); 
    a.document.write('<html>'); 
    a.document.write('<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></head><body>'); 
    a.document.write(divContents); 
    a.document.write('<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script><sup class="blockquote-footer">Printed on :  <cite>'+ Date() +'</cite></sup></body></html>'); 
    a.document.close(); 
    a.print(); 
}

// // Summary Table Export to XLSX
function exportTable() {
    var instance = new TableExport(document.getElementById('printTable'), {
        headers: false,
        formats: ["xlsx"],
        bootstrap: true,
        filename: "Genshin Calculator Summary",
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

// // Delete LocalStorage Data
function deleteForm() {
    var localDelete = confirm("Delete all Form Data ?");
    if (localDelete == true) {
        localStorage.clear();
        alert("Form Data has been deleted.");
    }
}