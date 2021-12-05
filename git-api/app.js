const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 5000;

const api = require("./routes/commits");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", api);

// listening
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})