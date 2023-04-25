const app = require("express")();
const fs = require("fs");
const port = 3000;

app

.get("/json", (req, res) => {
    res.send(require("./my.json"))
})

.get("/", (req, res) => {
    res.send(fs.readFileSync("index.html", "utf-8"));
})
.get("/img", (req, res) => {
    res.send(`<img src="data:image/png;base64,${fs.readFileSync("./T0ALL74SY-UMWEQAGV8-0673c96e7f8b-512.png", "base64")}">`);
});

app.listen(port)