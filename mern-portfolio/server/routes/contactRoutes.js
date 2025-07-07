import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: true, msg: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
  }
});

export default router;
