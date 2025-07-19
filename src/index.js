import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import weatherRoute from "./routes/weather.js";
import fivedayRoute from "./routes/fiveday.js";
import geocodedRoute from "./routes/geocoded.js";
import airPollutionRoute from "./routes/airPollution.js";
import uvRoute from "./routes/uv.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Mount routes with their base paths
app.use("/api/weather", weatherRoute);
app.use("/api/fiveday", fivedayRoute);
app.use("/api/geocoded", geocodedRoute);
app.use("/api/pollution", airPollutionRoute);
app.use("/api/uv", uvRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
