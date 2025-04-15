const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const adminroutes = require("./routes/adminRoutes");
const uploadroutes = require("./routes/uploadRoutes"); // Import the upload routes
const certificateRoutes = require("./routes/certificateRoutes"); // Import the certificate routes
const app = express();

app.use(cors({ 
  origin: [
    "http://localhost:3000", 
    "http://localhost:5173",
    "http://172.20.144.1:3000",
  ],
  credentials: true 
}));
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Backend is running...");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admin", adminroutes);
app.use ("/api/upload", uploadroutes); // Ensure this matches your backend route
app.use("/api/certificates", certificateRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port http://localhost:${PORT}`);
});
