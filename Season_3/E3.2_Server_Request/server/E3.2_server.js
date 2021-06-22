"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P3_2 = void 0;
const Http = require("http");
var P3_2;
(function (P3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    // BEREITSCHAFT: Wartet auf Daten
    function handleListen() {
        console.log("Listening");
    }
    // FUNKTION: Empfängt die URL und liest die Daten aus und gitbt diese, je nach Auswahl als HTML oder JSON wieder zurück
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            // AUSGABE: HTML
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + ",");
                }
            }
            // AUSGABE: JSON
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                console.log(url.query);
                _response.write(jsonString);
            }
            // ENDE: Beendet den Arbeitsauftrag
            _response.end();
        }
    }
})(P3_2 = exports.P3_2 || (exports.P3_2 = {}));
//# sourceMappingURL=E3.2_server.js.map