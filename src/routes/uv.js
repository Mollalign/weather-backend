import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`
    );
    res.json(data);
  } catch (err) {
    console.error("Error fetching UV data", err.message);
    res.status(500).send("Error fetching UV data");
  }
});

export default router;
