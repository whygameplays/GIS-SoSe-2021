"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E3_4 = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var E3_4;
(function (E3_4) {
    let databaseURL = "mongodb+srv://testuser:isOAoCxzMx4YV0fk@whygameplays.iba9w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoDBDatabase = "E3-4";
    let mongoDBCollection = "FormData";
    console.log("--- STARTING SERVER ---");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("---     IDELING     ---");
    }
    async function handleRequest(_request, _response) {
        console.log("---    LISTENING    ---");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let fdata = {
                name: url.query.name + "",
                email: url.query.email + "",
                token: url.query.token + "",
                date: url.query.date + "",
                time: url.query.time + "",
                message: url.query.message + ""
            };
            if (url.pathname == "/submitToDB") {
                let response = await submitToDB(fdata);
                _response.write(response);
            }
            if (url.pathname == "/receiveFromDB") {
                let response = await receiveFromDB();
                _response.write(JSON.stringify(response));
            }
            if (url.pathname == "/deleteInDB") {
                let response = await deleteInDB(fdata);
                _response.write(response);
            }
            _response.end();
        }
    }
    async function connectToDB() {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(databaseURL, options);
        await mongoClient.connect();
        let requestData = mongoClient.db(mongoDBDatabase).collection(mongoDBCollection);
        return requestData;
    }
    async function submitToDB(fdata) {
        let requestData = await connectToDB();
        let output = "";
        requestData.insertOne(fdata);
        output = "DATA INPUT: " + fdata.name + " (" + fdata.token + ") " + "addet to database";
        return output;
    }
    async function receiveFromDB() {
        let requestData = await connectToDB();
        let cursor = requestData.find();
        let result = await cursor.toArray();
        return result;
    }
    async function deleteInDB(fdata) {
        let requestData = await connectToDB();
        let output = "";
        requestData.deleteOne({ "token": fdata.token });
        output = "DELETET: All entrys connected to this request token (" + fdata.token + ")";
        return output;
    }
})(E3_4 = exports.E3_4 || (exports.E3_4 = {}));
//# sourceMappingURL=E3.4_server.js.map