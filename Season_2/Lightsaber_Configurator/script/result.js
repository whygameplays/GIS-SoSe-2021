"use strict";
var E2_5;
(function (E2_5) {
    let selection = {};
    let storeSelect = localStorage.getItem("selection");
    if (storeSelect) {
        selection = JSON.parse(storeSelect);
    }
    async function sendRequest(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let output = await response.json();
        let displayResponse = document.getElementById("selectionWrapper");
        if (output.error) {
            displayResponse.classList.add("error");
            displayResponse.innerText = output.error;
        }
        else {
            displayResponse.classList.add("message");
            displayResponse.innerText = output.message;
        }
    }
    sendRequest("https://gis-communication.herokuapp.com");
    let wrap = document.getElementById("resultDisplay");
    if (selection.saber) {
        wrap.appendChild(createImage(selection.saber.image));
    }
    if (selection.top) {
        wrap.appendChild(createImage(selection.top.image));
    }
    if (selection.connector) {
        wrap.appendChild(createImage(selection.connector.image));
    }
    if (selection.connector) {
        wrap.appendChild(createImage(selection.bottom.image));
    }
    function createImage(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
    document.getElementById("tryagain").addEventListener("click", restart);
    function restart() {
        localStorage.clear();
        window.location.assign("./E2.5.html");
    }
})(E2_5 || (E2_5 = {}));
//# sourceMappingURL=result.js.map