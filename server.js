const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(function (request, response) {
    response.sendFile(path.join(__dirname, "dist/index.html"))
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Port listen: ${PORT}`);
});