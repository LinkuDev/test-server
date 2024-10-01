const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3301;

// Đường dẫn tới file key.txt
const keyFilePath = path.join(__dirname, "key.txt");

// Route để nhận request
app.get("/get-key", (req, res) => {
  // Đọc nội dung từ file key.txt
  fs.readFile(keyFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading key file:", err);
      return res.status(500).send("Internal Server Error");
    }
    // Gửi nội dung của file như là response
    res.send(data);
  });
});

// Khởi động server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
