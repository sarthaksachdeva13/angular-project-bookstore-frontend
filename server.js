const express = require('express');
const app = express();



app.use(express.static('./dist/store-front'));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname,'/dist/store-front/index.html'));
});

app.listen(process.env.PORT || 8080);
