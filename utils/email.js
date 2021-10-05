const nodemailer = require("nodemailer");
const schedule = require('node-schedule');
require('dotenv').config();
async function emailer(email) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.E_PW,
    },
  });
  await schedule.scheduleJob('* * * * * *', () => {
    transporter.sendMail({
      from: '"Job Tracker" <trackerjob7@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Hello from Job Tracker ✔", // Subject line
      text: "A remainder to update you job Status", // plain text body
    }).then(info => {
      console.log("Message sent: %s", info.messageId);
    }).catch(console.error);
  })

}


module.exports = emailer;


