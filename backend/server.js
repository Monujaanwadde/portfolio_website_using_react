require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use("/api/contact", contactRoute);


app.get("/", (req, res) => {
    res.json({ status: "ok", message: "Portfolio backend running" });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));