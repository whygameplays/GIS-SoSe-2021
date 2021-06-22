"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E3_1 = void 0;
const Http = require("http");
var E3_1;
(function (E3_1) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    // Absicherung: Sollte dem Port kein Wert zugewiesen sein worden, wir er auf 8100 gesetzt
    if (!port)
        port = 8100;
    // Erstellung: Server wird aufgesetzt / erstellt
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    // Warten (Idle): Wenn der Server auf anweisungen wartet / hört wird in dieser Zeit "Listening" ansegeben
    function handleListen() {
        console.log("Listening");
    }
    // Anfrage: Wird eine Angrage ausgeführt wird diese Funktion ausgeführt
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Antwort: Die Antwort des Servers wird in die URL übertragen
        _response.write(_request.url);
        _response.end();
    }
})(E3_1 = exports.E3_1 || (exports.E3_1 = {}));
//# sourceMappingURL=server.js.map