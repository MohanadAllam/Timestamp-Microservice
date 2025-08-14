const express = require("express");
const app = express();

app.use(express.static("views"));

// Route for Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// API For the Timestamp
app.get("/api/timestamp/:date?", (req, res) => {
  let dateString = req.params.date;
  let date;

  if (!dateString) {
    date = new Date();
  } else {
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
