const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
	res.send("<p>test paragraph</p>");
});

app.use(authRoutes);
