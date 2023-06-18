const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BrandName = require("./model")
const app = express();
const dbUrl = "mongodb+srv://Surya:Surya951@cluster0.vtslqsa.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());


mongoose
  .connect(
    dbUrl,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database failed", err));

app.post("/RegisterPage", async (req, res) => {
  const { firstName, lastName, age, gender, dateofbirth } = req.body;
  console.log(req.body)
  try {
    const newData = new BrandName({
      firstName,
      lastName,
      age,
      gender,
      dateofbirth,
    });
    await newData.save();
    const allData = await BrandName.find();
    return res.json(allData);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "Server error" });
  }
});

app.get("/getaddbrands", async (req, res) => {
  try {
    const allData = await BrandName.find();
    return res.json(allData);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

