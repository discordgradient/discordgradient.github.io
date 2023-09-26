const express = require('express');
const { join } = require('node:path');

const app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, () => {
    console.log("Website server ready!");
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "home.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(join(__dirname, "about.html"));
});

app.get("/commands", (req, res) => {
    res.sendFile(join(__dirname, "commands.html"));
});

app.get("/invite", (req, res) => {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=683053587215024213&scope=bot+applications.commands");
});