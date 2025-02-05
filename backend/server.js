const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const blogRoutes = require("./routes/blogRoutes");
const serviceRoutes = require('./routes/serviceRoutes')
const cors = require("cors");

const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const connectToMongoDB = async () => {
  try {
    const connectionString = "mongodb+srv://veera:Railand%40Veera@cluster0.fydvm4t.mongodb.net/test";
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectToMongoDB();

// Use the blog routes
app.use("/blogs", blogRoutes);
app.use("/services", serviceRoutes);

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // TODO: Add server-side validation

  try {
    // Send email using nodemailer (configure transporter with your email service)
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'manager@rudine.pro', // Replace with your email
        pass: 'Business2025!@#', // Replace with your password
      },
    });

    const mailOptions = {
      from: 'manager@rudine.pro', // Using the user's email as the sender
      to: 'director@brandx-esp.com', // Replace with your designated email
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the app for testing or other potential use
