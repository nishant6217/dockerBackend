const express = require("express");
const app = express();

app.use(express.json());

const port = 8833;

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password123") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => console.log(`Server running on port${port} `));
