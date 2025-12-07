const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


// Basic validation helper
function validateContact(data) {
    const { name, email, message } = data || {};
    if (!name || !email || !message) return false;
    // rudimentary email check
    if (!/^\S+@\S+\.\S+$/.test(email)) return false;
    return true;
}


router.post("/", async (req, res) => {
    const { name, email, message } = req.body;


    if (!validateContact(req.body)) {
        return res.status(400).json({ success: false, msg: "Invalid input" });
    }


    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: `Message from portfolio: ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
            html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
        };


        await transporter.sendMail(mailOptions);


        res.json({ success: true, msg: "Message sent successfully" });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ success: false, msg: "Error sending message" });
    }
});


module.exports = router;