require('dotenv').config();

const express = require('express');
const app = express();

const cmd = require('node-cmd');

app.get('/', function(req, res) {
    res.send('okay bye');
});

app.get('/reboot', function(req, res) {
    if(req.query.secret === process.env.SECRET) {
        // do reboot
        res.send('ok');
        console.log("starting reboot");
        cmd.run('shutdown -r -t 0');
    } else {
        res.send('no');
    }
});

app.listen(process.env.PORT, function() {
    console.log("app is now running on port", process.env.PORT);
});