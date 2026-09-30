import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./infrastructure/db.js";
import hotelsRouter from "./api/hotel.js";
import usersRouter from "./api/user.js";
import bookingsRouter from "./api/booking.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);
app.use("/api/bookings", bookingsRouter);

const PORT = 8000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error.message);
  process.exit(1);
});