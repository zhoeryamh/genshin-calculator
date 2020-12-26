// Constructor
// // Create Div Table
function createDivTable(parent, id) {
    let div = document.createElement("DIV");
    div.setAttribute("id", id);
    document.getElementById(parent).appendChild(div);
}

// // Create Table
function createTable(parent, id) {
    let table = document.createElement("TABLE");
    table.setAttribute("id", id);
    table.setAttribute("class", "table table-hover mb-0");
    document.getElementById(parent).appendChild(table);
}

// // Create Table Head
function createHeadTable(parent, id, classes) {
    let data = document.createElement("THEAD");
    data.setAttribute("id", id);
    data.setAttribute("class", classes);
    parent.appendChild(data);
}

// // Create Table Body
function createBodyTable(parent, id) {
    let data = document.createElement("TBODY");
    data.setAttribute("id", id);
    parent.appendChild(data);
}
// // Create Row
function createRowTable(parent, id, classes) {
    let row = document.createElement("TR");
    row.setAttribute("id", id);
    if (!!classes) {
        row.setAttribute("class", classes);
    }
    document.getElementById(parent).appendChild(row);
}

// // Create Data Head
function createDataHeadTable(parent, text, colspan) {
    let data = document.createElement("TH");
    if (!!colspan) {
        data.setAttribute("colspan", colspan);
    }
    let value = document.createTextNode(text);
    data.appendChild(value);
    document.getElementById(parent).appendChild(data);
}

// // Create Data Name
function createDataNameTable(parent, src, classes, style, text) {
    let data = document.createElement("TD");
    let dataImg = document.createElement("IMG");
    dataImg.setAttribute("src", src);
    dataImg.setAttribute("class", classes);
    dataImg.setAttribute("style", style);
    let value = document.createTextNode(" "+text);
    data.appendChild(dataImg);
    data.appendChild(value);
    document.getElementById(parent).appendChild(data);
}

// // Create Data Count
function createDataCountTable(parent, id, classes, text) {
    let data = document.createElement("TD");
    if (!!id) {
        data.setAttribute("id", id);
    }
    if (!!classes) {
        data.setAttribute("class", classes);
    }
    let value = document.createTextNode(text);
    data.appendChild(value);
    document.getElementById(parent).appendChild(data);
}