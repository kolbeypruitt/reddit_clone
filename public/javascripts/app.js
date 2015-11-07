var app = angular.module("redditApp", []);
app.controller("PostController", function($scope){
  $scope.allPosts = [];
  $scope.newPost = function () {
    var d = new Date();
    $scope.postObj.votes = 0;
    $scope.showNewPost = false;
    $scope.postObj.rightNow = d.getTime();
    $scope.allPosts.push($scope.postObj);
    $scope.postObj = {};
  }

  $scope.rightNow = function () {
    var d = new Date();
    $scope.postObj.rightNow = d.getTime();
  }

  // $scope.addComment = function () {
  //   $scope.post.
  // }
  $scope.vote = function (direction) {
    if (direction==='up') {
      this.post.votes += 1;
    } else if (direction==='down') {
      this.post.votes -= 1;
    }
  }

});
