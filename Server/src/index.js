const http = require("http");
const characters = require("./utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character/")) {
      let id = req.url.split("/").pop();
      console.log(id);
      const character = characters.find((character) => character.id == id);
      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Character no encontrado");
      }
    }
  })

  .listen(3001, "localhost");
console.log("Server running at http://localhost:3001/");
