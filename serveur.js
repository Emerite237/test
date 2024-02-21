const express =require("express");
const path  = require('path')

const app = express();

app.use(express.static(__dirname + "/dist/france-etude"))

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+"/dist/france-etude/index.html"));
})

app.listen(process.env.PORT || 3000)