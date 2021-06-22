"use strict";
var E3_4;
(function (E3_4) {
    let formData;
    let url;
    let fdata;
    function setServerURL() {
        url = "https://whygis-sose-2021-e3-4.herokuapp.com";
    }
    document.getElementById("submitToDB").addEventListener("click", submitToDB);
    function submitToDB() {
        handleRequest(0);
    }
    document.getElementById("receiveFromDB").addEventListener("click", receiveFromDB);
    function receiveFromDB() {
        handleRequest(1);
    }
    document.getElementById("deleteInDB").addEventListener("click", deleteInDB);
    function deleteInDB() {
        handleRequest(2);
        deletedInfo();
    }
    async function handleRequest(type) {
        setServerURL();
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        if (type == 0) {
            url += "/submitToDB" + "?" + query.toString();
            let response = await fetch(url);
            let replyString = await response.text();
            console.log("SUBMITTED: Data to database: ", fdata);
            console.log("URL:", url);
            document.getElementById("output").innerHTML += replyString + "\n\n";
        }
        else if (type == 1) {
            url += "/receiveFromDB" + "?" + query.toString();
            let reply = await fetch(url);
            let replyJSON = await reply.json();
            document.getElementById("output").innerHTML += JSON.stringify(replyJSON) + "\n\n";
            console.log("RECEIVED: All Data from Database\nURL: " + url);
        }
        else {
            url += "/deleteInDB" + "?" + query.toString();
            let reply = await fetch(url);
            let replyString = await reply.text();
            console.log("DELETET: All database entrys connected to this request token (" + fdata.token + ")\nURL: " + url);
            document.getElementById("output").innerHTML += replyString + "\n\n";
        }
        setServerURL();
    }
    function deletedInfo() {
        document.getElementById("output").innerHTML += "INFO: Entrys will be deletet by your request token.\n";
    }
})(E3_4 || (E3_4 = {}));
//# sourceMappingURL=E3.4_client.js.map