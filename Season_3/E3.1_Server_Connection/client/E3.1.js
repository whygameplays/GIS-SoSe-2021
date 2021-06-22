"use strict";
var E3_1;
(function (E3_1) {
    const serverout_id = document.getElementById("serverout_id");
    const serverout_class = document.getElementsByClassName("serverout_class");
    // Erstellung: FormData wird erstellt und es wird dem Button mit der id / class "send" ein EventListener angehhängt
    let formDataCollector;
    let submit = document.getElementById("submit");
    submit.addEventListener("click", clickSubmit);
    // Klick: Nach dem auf den Button "submit" geklickt wird die Kommunikationsverbindungs zu Server aufgebaut
    function clickSubmit(_event) {
        communicate("https://whygis-sose-2021.herokuapp.com/");
    }
    async function communicate(_url) {
        formDataCollector = new FormData(document.forms[0]);
        let query = new URLSearchParams(formDataCollector);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseString = await response.text();
        console.log(responseString);
        // Output 1: Erstellt ein Textfeld in dem "div" mit der id "serverout_id"
        serverout_class[0].innerHTML = "Server output:";
        let textfield;
        if (document.getElementsByTagName("textarea")[1] == undefined) {
            textfield = document.createElement("textarea");
            serverout_id.appendChild(textfield);
        }
        else {
            textfield = document.getElementsByTagName("textarea")[1];
        }
        // Output 2: Gibt die Daten des Servers in dem neu erstellten Textfeld aus
        textfield.innerHTML = "URL: " + _url + "\n\n";
        let output = "\n";
        for (let entry of query) {
            output += "Method: " + entry[0] + "\nOutput: " + entry[1] + "\n\n";
            console.log(entry);
        }
        console.log(output);
        textfield.innerHTML += output;
    }
})(E3_1 || (E3_1 = {}));
//# sourceMappingURL=E3.1.js.map