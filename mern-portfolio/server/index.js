import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

// ✅ Allow only your frontend domain
app.use(cors({
  origin: 'https://mern-portfolio-self.vercel.app',
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { username, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kaviya21103@gmail.com',
        pass: 'mmxzismzuwubglpn', // App password
      },
    });

    const mailOptions = {
      from: email,
      to: 'kaviya21103@gmail.com',
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






