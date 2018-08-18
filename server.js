const express = require('express');
const app = express();
app.use(express.static('./dist'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
