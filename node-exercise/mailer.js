const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'ayush.bhusal0@gmail.com',
        pass: '',
    },
});

const mailOptions = {
    from: '"Ecabott" <ayush.bhusal0@gmail.com>', // sender address
    to: "ayush.bhusal0000@gmail.com", // list of receivers
    subject: "?", // Subject line
    text: "?", // plain text body
    html: "<b>?</b>", // html body
};

const mailer = async (mailOptions, transporter) => {
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent:'+info.response);
        }
    });
};

mailer(mailOptions, transporter).catch(console.error);