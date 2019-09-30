const nodemailer = require('nodemailer');
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

var Transport = nodemailer.createTransport({
    service: "gmail",
    host:"GMAIL_USER",
    auth: {
        user: "GMAIL_USER",
        pass: "GMAIL_PASS"

    }
});

module.exports = function(app, flag) {

    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });
    app.post('/send', function(req, res) {
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
