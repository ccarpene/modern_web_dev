//import libraries
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();


const app = express();
const PORT = 5050;

//manually handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //allows request from any origin (fine to leave if we are just using it locally not deploying publicly)
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');//allows thises http methods
  res.header('Access-Control-Allow-Headers', '*');//allows all headers
  

  //handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Preflight received.');
    return res.status(200).end();
  }

  next();
});

//parse JSON requests
app.use(express.json());

//get email and coupon code
app.post('/send-email', (req, res) => {
  console.log('POST /send-email hit');
  const { to, couponCode } = req.body;

  //set up nodemailer using gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, //get from .env
      pass: process.env.EMAIL_PASS  //get from .env
    }
  });

  //email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: '🎉 Welcome to South Bend 🎉!',
    html: `<h2>Thanks for joining us! We’re thrilled to welcome you to this beautiful city. 
    As a token of our appreciation, enjoy 15% off any purchase at the locations listed on our 
    website using the coupon code below!</h2><p>Here's your coupon: <strong>${couponCode}</strong></p>`
  };

  //send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      return res.send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
