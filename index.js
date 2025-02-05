const express = require("express");
const cors = require("cors");
// const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const port = 8833;

// const db = mysql.createConnection({
//   host: "172.17.0.3",
//   user: "myuser",
//   password: "mypassword",
//   database: "mydb",
//   port: 3306,
// });

// db.connect((err) => {
//   if (err) {
//     console.error("❌ Database connection failed:", err.message);
//   } else {
//     console.log("✅ Connected to MySQL database!");
//   }
// });

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
  }

  if (username !== "admin" && password !== "admin") {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  if (username === "admin" && password === "admin") {
    return res.status(200).json({ success: true, message: "Login successful" });
  }

  return res.status(500).json({ success: false, message: "An error occurred" });
});

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
