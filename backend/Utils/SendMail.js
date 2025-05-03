// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
  // auth: {
  //   user: "hg227575@gmail.com",
  //   pass: "cpalelauohxolzqb",
  // },
// });


//  async function sendMail(email,subject,otp, body=null) {
    
//     const info = await transporter.sendMail({
//       from: 'hg227575@gmail.com', 
//       to: email, 
//       subject: subject,
//       text:otp?.toString()?otp.toString():null,
//       html: `${body}`,
//     });
  
//     console.log("Message sent: %s", info.messageId);
   
//   }
//   module.exports = sendMail




const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service :"gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hg227575@gmail.com",
    pass: "ekunjbnmvznqwxkt",
  },
});

async function sendMail(email, subject, otp = null, body = null) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: otp ? `Your OTP is: ${otp}` : undefined,
      html: body || undefined,
    });

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
}

module.exports = sendMail;
