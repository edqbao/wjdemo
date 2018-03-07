const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.use('/src/js', express.static(__dirname + '/src/js/'));


app.listen(process.env.PORT || 8080);