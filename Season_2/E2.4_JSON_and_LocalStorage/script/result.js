"use strict";
var E2_4;
(function (E2_4) {
    let selection = {};
    let storeSelect = localStorage.getItem("selection");
    if (storeSelect) {
        selection = JSON.parse(storeSelect);
    }
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
        window.location.assign("./E2.4.html");
    }
})(E2_4 || (E2_4 = {}));
//# sourceMappingURL=result.js.map