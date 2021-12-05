var express = require("express");
var router = express.Router();
const https = require("https");

// middleware
router.use(function (req, res, next) {
  next();
});

// base route
router.get("/commits", function (req, res) {
  const options = {
    hostname: "api.github.com",
    path: "/repos/leoBravoRain/git-history/commits",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
    OAUth: "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",
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

