const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname)));
app.get("/*", function (req, res) {
  res.sendFile(__dirname);
});
app.listen(process.env.PORT || 8000);

