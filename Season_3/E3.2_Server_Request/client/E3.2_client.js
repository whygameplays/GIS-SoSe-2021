"use strict";
var E3_2;
(function (E3_2) {
    let formData;
    let url;
    // FUNKTION: Legt die URL für den Server fest, an welchen die Daten gesendet und von welchem diese wieder empfangen werden
    function serverURL() {
        url = "https://whygis-sose-2021.herokuapp.com/";
    }
    let submitHTML = document.getElementById("submitHTML");
    submitHTML.addEventListener("click", submitHTMLdata);
    let submitJSON = document.getElementById("submitHTLM");
    submitJSON.addEventListener("click", submitJSONdata);
    // FUNKTION: Empfängt URL, wandelt diese in plain HTML um und schickt diese wieder zurück
    async function submitHTMLdata() {
        formData = new FormData(document.forms[0]);
        serverURL();
        // tslint:disable-next-line
        let query = new URLSearchParams(formData);
        url += "/html" + "?" + query.toString();
        let response = await fetch(url);
        let answer = await response.text();
        let display = document.getElementById("response");
        display.innerText = answer;
    }
    // FUNKTION: Empfängt URL, wandelt diese in einen JSON string um und schickt diese wieder zurück
    async function submitJSONdata() {
        formData = new FormData(document.forms[0]);
        serverURL();
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "/json" + "?" + query.toString();
        let response = await fetch(url);
        let outConsoleJSON = await response.json();
        console.log(outConsoleJSON);
    }
})(E3_2 || (E3_2 = {}));
//# sourceMappingURL=E3.2_client.js.map