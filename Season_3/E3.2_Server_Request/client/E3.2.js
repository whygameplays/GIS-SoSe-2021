"use strict";
var E3_2;
(function (E3_2) {
    //const serverOutContainer = document.getElementById("serverOutContainer");
    const serverOutHeader = document.getElementsByClassName("serverOutHeader");
    const serverOutText = document.getElementsByClassName("serverOutText");
    let formData;
    let url;
    document.getElementById("submitHTML").addEventListener("click", handleClickHTML);
    document.getElementById("submitJSON").addEventListener("click", handleClickJSON);
    async function handleClickHTML() {
        serverOutHeader[0].innerHTML = "Server output - HTML:";
        handleRequest(true);
    }
    async function handleClickJSON() {
        serverOutHeader[0].innerHTML = "Server output - JSON:";
        handleRequest(false);
    }
    function setURL() {
        url = "https://whygis-sose-2021.herokuapp.com/";
    }
    async function handleRequest(isHTML) {
        setURL();
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        if (isHTML) {
            url += "/html" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Response String:", responseString);
            serverOutText[1].innerHTML = responseString;
        }
        else {
            url += "/json" + "?" + query.toString();
            let response = await fetch(url);
            let responseJSON = await response.json();
            console.log("Response JSON", responseJSON);
            serverOutText[1].innerHTML = "Look in the console of this page to see the restult!";
        }
        setURL();
    }
})(E3_2 || (E3_2 = {}));
//# sourceMappingURL=E3.2.js.map