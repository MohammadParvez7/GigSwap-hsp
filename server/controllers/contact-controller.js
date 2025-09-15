const Contact = require("../models/contact-model");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const contactForm = async (req, res) => {
  try {
    const { username, email, message, address, date, time } = req.body;

    // Save the booking details to the database
    await Contact.create(req.body);

    // Prepare the email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: email, // Recipient address from the form
      subject: "Service Booking Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">Hello ${username},</h2>
          <p>Thank you for booking a service with us. We are excited to help you!</p>
          <p>Here are your booking details:</p>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;">
              <strong>Service:</strong> ${message}
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Date:</strong> ${new Date(date).toDateString()}
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Time:</strong> ${time}
            </li>
            <li style="margin-bottom: 10px;">
              <strong>Address:</strong> ${address}
            </li>
          </ul>
          <p>If you have any questions, please reply to this email.</p>
          <p>Best regards,<br>Servax.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.error("Error during form submission or email sending:", error);

    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = contactForm;
