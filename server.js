const express = require('express');
const path = require('path');
const app = express();
console.log("__dirname ===> " + __dirname);
app.use(express.static(__dirname + '/dist/SampleApp1'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/SampleApp1/index.html'));});
app.listen(process.env.PORT || 8080);
