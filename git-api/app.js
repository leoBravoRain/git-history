const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 3000;

const commitsApi = require("./routes/commits");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", commitsApi);

// listening
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})