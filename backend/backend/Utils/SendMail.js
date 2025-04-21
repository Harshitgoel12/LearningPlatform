const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "hg227575@gmail.com",
    pass: "cpalelauohxolzqb",
  },
});


 async function sendMail(email,subject,otp) {
    
    const info = await transporter.sendMail({
      from: 'hg227575@gmail.com', 
      to: email, 
      subject: subject,
      text:otp.toString()
    //   html: "<b>Hello world?</b>",
    });
  
    console.log("Message sent: %s", info.messageId);
   
  }
  module.exports = sendMail