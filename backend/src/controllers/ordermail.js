const nodemailer = require('nodemailer');

const sendMail = (mail,name,no,total) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ehabatef205@gmail.com',
            pass: 'sfrkmthwtbkxqsfm'
        }
    });

    const mailOptions = {
        from: 'ehabatef205@gmail.com', // sender address
        to: mail, // list of receivers
        subject: 'Email from custom mind', // Subject line
        text: `Hello, ${name} this email is a confirmation order #${no} for a total of ${total}$ `, // plain text body
        // You can also use html: '<b>Hello, this is a test email!</b>' for HTML emails
    };

    transporter.sendMail(mailOptions, (error, info) => {


})}

const returnsMail = (name,no,state) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ehabatef205@gmail.com',
            pass: 'sfrkmthwtbkxqsfm'
        }
    });

    const mailOptions = {
        from: 'ehabatef205@gmail.com', // sender address
        to: mail, // list of receivers
        subject: 'Email from custom mind', // Subject line
        text: `Hello, ${name} Your order's (#${no} for a total) return request has been  ${state} `, // plain text body
        // You can also use html: '<b>Hello, this is a test email!</b>' for HTML emails
    };

    transporter.sendMail(mailOptions, (error, info) => {


})}


module.exports = {sendMail,returnsMail}