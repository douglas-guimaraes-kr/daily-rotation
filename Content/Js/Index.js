
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
    
    loadSpinner();

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

        var title = 'Congratulations, ' + facilitator + '!';
        var message = 'You are the chosen one for this facilitation!';

        Swal.fire({
            title: title,
            html: message,
            icon: 'success',
            confirmButtonText: 'Cool!'
          });

          unloadSpinner();
    }
    else {
        hideFacilitator();
        alert("No facilitators defined. It's so cold here... :(");
    }
}

function loadSpinner(){
    document.getElementById("btnDefine").setAttribute("disabled", true);
    document.getElementById("spinner").style.display = "inline-flex";
}

function unloadSpinner(){
    document.getElementById("btnDefine").removeAttribute("disabled");
    document.getElementById("spinner").style.display = "none";
}