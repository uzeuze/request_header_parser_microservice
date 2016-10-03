var express = require('express');
var app = express();
var apiRouter = require("./routes/api_router");

app.set("port", process.env.PORT || 3000);

app.use("/api", apiRouter);

app.listen(app.get("port"));
