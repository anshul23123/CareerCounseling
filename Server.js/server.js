const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();
app.use(bodyParser.json());

 
mongoose.connect("mongodb://localhost:27017/jwt_auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

 
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
