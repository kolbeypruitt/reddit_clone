var app = angular.module("redditApp", ['angularMoment']);
app.controller("PostController", function($scope, $http){
  $scope.allPosts = $http.get('/api/v1/posts').then(function (response) {
    $scope.allPosts = response.data;
  })
  $scope.newPost = function () {
    this.postObj.votes = 0;
    this.showNewPost = false;
    this.commentsShown = false;
    this.postObj.rightNow = Date.now();
    this.postObj.allComments = [];
    this.allPosts.push(this.postObj);
    return $http.post('/api/v1/posts', this.postObj ).then(function (post) {
      this.postObj = {};
      $http.get('/api/v1/posts').then(function (response) {
        $scope.allPosts = response.data;
      })
    })
  }

  $scope.rightNow = function () {
    var d = new Date();
    $scope.postObj.rightNow = d.getTime();
  }

  $scope.toggleComments = function () {
    if (this.commentsShown===true) {
      this.commentsShown = false;
    } else if (this.commentsShown===false) {
      this.commentsShown = true;
    }
  }
  
  $scope.newComment = function (post, a, c) {
    console.log(post);
    this.showNewComment = false;
    this.commentsShown = true;
    commentObj = {
      'author': a,
      'body': c
    }
    post.allComments.push(commentObj);
    this.author = null;
    this.body = null;
  }

  $scope.vote = function (direction) {
    if (direction==='up') {
      this.post.votes += 1;
    } else if (direction==='down') {
      this.post.votes -= 1;
    }
  }

});
