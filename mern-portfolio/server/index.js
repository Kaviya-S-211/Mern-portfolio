import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { username, email, message } = req.body;

  try {
    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'hotmail', 'yahoo'
      auth: {
        user: 'kaviya21103@gmail.com',       // 🔒 Your email
        pass: 'mmxzismzuwubglpn',     // 🔑 App password (not normal password)
      },
    });

    const mailOptions = {
      from: email,
      to: 'kaviya21103@gmail.com', // your inbox to receive message
      subject: `Portfolio Contact from ${username}`,
      text: `Message: ${message}\n\nSender: ${username}\nEmail: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ msg: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





