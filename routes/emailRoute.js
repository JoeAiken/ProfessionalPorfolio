const nodemailer = require('nodemailer');

var Transport = nodemailer.createTransport({
    service: "gmail",
    host: process.env.EMAIL,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD

    }
});

module.exports = function(app, flag) {

    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });
    app.get('/send', function(req, res) {
        var mailOptions = {
            to: req.query.to,
            subject: req.query.subject,
            html: req.query.html
        };
        console.log(mailOptions);
        Transport.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            }
            else {
                console.log("Message sent: " + response.message);
                res.end("sent");
            }
        });
    });
};
