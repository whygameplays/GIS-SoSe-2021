import * as Http from "http";
import * as Url from "url";

<<<<<<< HEAD:Season_3/E3.2_Server_Request/server/server.ts
export namespace P3_2 {
=======
// EXPORT: Exportiert den Namespace für die E3.2_client.ts
export namespace E3_2 {
>>>>>>> 739b5e4 (E3.2 fix):Season_3/E3.2_Server_Request/server/E3.2_server.ts
    console.log("Starting server");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;
  
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    // BEREITSCHAFT: Wartet auf Daten
    function handleListen(): void {
        console.log("Listening");
    }

    // FUNKTION: Empfängt die URL und liest die Daten aus und gitbt diese, je nach Auswahl als HTML oder JSON wieder zurück
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
<<<<<<< HEAD:Season_3/E3.2_Server_Request/server/server.ts
        
=======

        // UMWANDLUNG: Wandelt die URL um
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

>>>>>>> 739b5e4 (E3.2 fix):Season_3/E3.2_Server_Request/server/E3.2_server.ts
        if (_request.url) {
            
            // AUSGABE: HTML
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + ",");
                }
            }

            // AUSGABE: JSON
            if (url.pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                console.log(url.query);
                _response.write(jsonString);
            }

            // ENDE: Beendet den Arbeitsauftrag
            _response.end();
        }
    }
}
