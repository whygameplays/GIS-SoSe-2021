"use strict";
var E2_3_1;
(function (E2_3_1) {
    function cRect() {
        let div = document.createElement("div");
        div.classList.add("rect");
        div.style.top = getRandom(0, 500) + "px";
        div.style.left = getRandom(0, 500) + "px";
        div.style.width = getRandom(20, 200) + "px";
        div.style.height = getRandom(20, 200) + "px";
        div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        document.body.appendChild(div);
    }
    document.getElementById("new").addEventListener("click", cRect);
    document.getElementById("rset").addEventListener("click", rset);
    function cInitRect() {
        for (let i = 0; i < 0; i++) {
            cRect();
        }
    }
    cInitRect();
    function getRandom(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    function rset() {
        let oldRects = document.querySelectorAll("div.rect");
        for (let oldRect of oldRects) {
            oldRect.remove();
        }
        cInitRect();
    }
})(E2_3_1 || (E2_3_1 = {}));
//# sourceMappingURL=E2.3.1.js.map