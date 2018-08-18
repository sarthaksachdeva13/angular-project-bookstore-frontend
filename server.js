const express = require('express');
const app = express();



app.use(express.static('./dist/webdev-summer2-project-angular-storefront'));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname,'/dist/webdev-summer2-project-angular-storefront/index.html'));
});

app.listen(process.env.PORT || 8080);
