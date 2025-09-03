import express from "express";
import hotelsRouter from "./api/hotel.js";

// Create an Express instance
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

app.use("/api/hotels", hotelsRouter);


// Define the port to run the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));