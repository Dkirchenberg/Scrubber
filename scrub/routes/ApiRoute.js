const axios = require("axios");
const router = require("express").Router();

router.get("/newsArticles", (req, res) => {
  axios
    .get("https://www.nytimes.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


router.get("/startyear", (req, res) => {
  axios
    .get("https://www.nytimes.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.get("/endyear", (req, res) => {
  axios
    .get("https://www.nytimes.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


module.exports = router;