"use strict";
var E2_3_2;
(function (E2_3_2) {
    function createPartDiv(_part, _index) {
        let div = document.createElement("div");
        div.classList.add("Lightsaberparts");
        let img = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
        let span = document.createElement("span");
        span.innerText = _part.origin;
        div.appendChild(span);
        let btn = document.createElement("button");
        btn.innerText = "Select";
        btn.addEventListener("click", hselect);
        btn.addEventListener("click", hselect2);
        btn.dataset.index = _index.toString();
        div.appendChild(btn);
        return div;
        function hselect(_e) {
            console.log("Function 1", _part);
        }
    }
    function hselect2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("Function 2 A", E2_3_2.parts.A_Sabers[index]);
        console.log("Function 2 B", E2_3_2.parts.B_Tops[index]);
        console.log("Function 2 C", E2_3_2.parts.C_Connectors[index]);
        console.log("Function 2 D", E2_3_2.parts.D_Bottoms[index]);
    }
    function options(_parts) {
        let wrapper = document.getElementById("selection_box");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    options(E2_3_2.parts.A_Sabers);
    options(E2_3_2.parts.B_Tops);
    options(E2_3_2.parts.C_Connectors);
    options(E2_3_2.parts.D_Bottoms);
})(E2_3_2 || (E2_3_2 = {}));
//# sourceMappingURL=E2.3.2_script.js.map