import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    res.json(data);
  } catch (err) {
    console.error("Error fetching forecast data", err.message);
    res.status(500).send("Error fetching forecast data");
  }
});

export default router;
