const Articles = require("../models/articles");

const router = require("express").Router();

router.route("/article/:name").get(async (req, res) => {
  let articleName = req.params.name;

  try {
    let article = await Articles.findOne({ name: articleName });
    res.status(200).send({ status: "Article Fetched", article: article });
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .send({ status: "Error with get article", error: err.message });
  }
});

router.route("/article/:name/add-comments").post(async (req, res) => {
  const articleName = req.params.name;
  const { username, text } = req.body;
  const findArticle = await Articles.findOne({ name: articleName });
  await Articles.updateOne(
    { name: articleName },
    { $set: { comments: findArticle.comments.concat({ username, text }) } }
  );
  const updatedArticle = await Articles.findOne({ name: articleName });
  res.status(200).json(updatedArticle);
});

router.route("/allArticles").get(async (req, res) => {
  try {
    const articles = await Articles.find();
    res.status(200).send({ articles });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
