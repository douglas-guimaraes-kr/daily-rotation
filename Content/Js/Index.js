
function init() {
    var facilitatorsList = [
        "Douglas",
        "Pavlina",
        "Reginaldo",
        "Livia",
        "Alisson",
        "Cristian",
        "Brandon",
        "Djeefther",
        "Nil",
    ];

    facilitatorsList.sort();

    var facilitatorsDiv = document.getElementById("facilitatorsList");
    facilitatorsList.forEach((item, index) => {

        //input checkbox
        var input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        input.checked = true;
        input.defaultValue = item;
        input.style.marginRight = "5";

        //label
        var label = document.createElement('label');
        label.innerText = item;

        //div
        var div = document.createElement('div');
        div.appendChild(input);
        div.appendChild(label);

        // final div
        facilitatorsDiv.appendChild(div);

    });
}

function facilitatorOnClick() {
    
    loadFacilitator();

    window.setTimeout(getFacilitator, 500);

    
}

function getFacilitator() {
    let inputs = document
        .getElementById("facilitatorsList")
        .querySelectorAll('input');

    var facilitatorsArray = [];
    inputs.forEach((item, index) => {
        if (item.checked)
            facilitatorsArray.push(item.defaultValue);

    });

    if (facilitatorsArray.length > 0) {
        var randomNumber = Math.floor(Math.random() * facilitatorsArray.length);
        var facilitator = facilitatorsArray[randomNumber];
        document.getElementById("facilitator").innerText = facilitator;
        unloadFacilitator();
    }
    else {
        hideFacilitator();
        alert("No facilitators defined. It's so cold here... :(");
    }
}

function loadFacilitator(){
    document.getElementById("facilitatorCard").style.display = "none";
    document.getElementById("spinner").style.display = "inline";
}

function unloadFacilitator(){
    document.getElementById("facilitatorCard").style.display = "inline";
    document.getElementById("spinner").style.display = "none";
}

function hideFacilitator(){
    document.getElementById("facilitatorCard").style.display = "none";
    document.getElementById("spinner").style.display = "none";
}