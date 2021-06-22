"use strict";
var E2_5;
(function (E2_5) {
    let parts;
    let selection = {};
    let storedSelection = localStorage.getItem("selection");
    let cParts = [];
    let cPart = "";
    let responseJSON = "";
    if (storedSelection) {
        selection = JSON.parse(storedSelection);
    }
    async function getData(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        responseJSON = await response.text();
        parts = JSON.parse(responseJSON);
        console.log(parts);
    }
    function createPartDiv(_part) {
        let div = document.createElement("div");
        div.classList.add("saberpart");
        let img = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
        let span = document.createElement("span");
        span.innerText = _part.origin;
        div.appendChild(span);
        let btn = document.createElement("button");
        btn.innerText = "Select";
        btn.addEventListener("click", handleSelection);
        div.appendChild(btn);
        return div;
        function handleSelection(_e) {
            switch (cPart) {
                case "saber":
                    selection.saber = _part;
                    break;
                case "top":
                    selection.top = _part;
                    break;
                case "connector":
                    selection.connector = _part;
                    break;
                case "bottom":
                    selection.bottom = _part;
                    break;
            }
            localStorage.setItem("selection", JSON.stringify(selection));
            switch (cPart) {
                case "saber":
                    window.location.assign("./LSC_tops.html");
                    break;
                case "top":
                    window.location.assign("./LSC_connectors.html");
                    break;
                case "connector":
                    window.location.assign("./LSC_bottoms.html");
                    break;
                case "bottom":
                    window.location.assign("./LSC_result.html");
                    break;
            }
        }
    }
    getData("https://whygameplays.github.io/GIS-SoSe-2021/Season_2/Lightsaber_Configurator/script/data.json").then(function () {
        parts = JSON.parse(responseJSON);
        console.log(parts);
        switch (document.title) {
            case "LSC - Sabers":
                cPart = "saber";
                cParts = parts.sabers;
                break;
            case "LSC - Tops":
                cPart = "top";
                cParts = parts.tops;
                break;
            case "LSC - Connectors":
                cPart = "connector";
                cParts = parts.connectors;
                break;
            case "LSC - Bottoms":
                cPart = "bottom";
                cParts = parts.bottoms;
                break;
            default:
                break;
        }
        showPossibilities(cParts);
        if (localStorage) {
            let selectPrev = document.getElementById("alreadySelected");
            if (selection.saber) {
                selectPrev.appendChild(createImage(selection.saber.image));
            }
            if (selection.top) {
                selectPrev.appendChild(createImage(selection.top.image));
            }
            if (selection.connector) {
                selectPrev.appendChild(createImage(selection.connector.image));
            }
            if (selection.bottom) {
                selectPrev.appendChild(createImage(selection.bottom.image));
            }
        }
    });
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i]);
            wrapper.appendChild(div);
        }
    }
    function createImage(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
})(E2_5 || (E2_5 = {}));
//# sourceMappingURL=script.js.map