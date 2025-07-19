import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const city = req.query.search;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    );
    res.json(data);
  } catch (err) {
    console.error("Error fetching geocoded data", err.message);
    res.status(500).send("Error fetching geocoded data");
  }
});

export default router;
