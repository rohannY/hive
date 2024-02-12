require("dotenv").config({ path: "./configs/.env" });
require("colors");
// packages
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./configs/db");
const PORT = process.env.PORT || 7000;
const cors = require("cors");
const app = express();

app.use(cors());

// Parse json
app.use(express.json());
// Parse cookies
app.use(cookieParser());
// static
app.use(express.static(path.join(__dirname, "public")));

const post = require("./routes/post");
app.use("/api/v1/post", post);

// Create server
const server = app.listen(PORT, () => {
  console.log(
    `Server Running On ${PORT} in ${process.env.NODE_ENV} mode`.bgMagenta
  );
  connectDB();
});

// Handle promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Err: ${err.message}`.bgRed);
  server.close(() => process.exit(1));
});
