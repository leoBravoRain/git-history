var express = require("express");
var router = express.Router();
const https = require("https");

// middleware
router.use(function (req, res, next) {
  next();
});

// base route
// As there are a few resources to get (< 20), It is getting all resources at once
// but it can be refactored to get them by a limited number (using pagination)
router.get("/commits", function (req, res) {
  const options = {
    hostname: "api.github.com",
    path: "/repos/leoBravoRain/git-history/commits",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
    OAUth: process.env.USER_TOKEN,
  };
  // request to github api
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      res.status(500).send("Something went wrong!");
    });
});

// export module
module.exports = router;
