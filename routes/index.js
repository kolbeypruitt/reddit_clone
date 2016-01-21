var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/redditclone');
var postdb = db.get('posts');


/* GET home page. */
router.get('/api/v1/posts', function (req, res, next) {
  return postdb.find().then(function (posts) {
    res.json(posts);
  });
});

router.post('/api/v1/posts', function (req, res, next) {
  var post = req.body;
  return postdb.insert({
    title: post.title
    , author: post.author
    , image: post.image
    , description: post.description
  }).then(function () {
    return storydb.find().then(function (posts) {
      res.json(posts);
    })
  })
});


module.exports = router;