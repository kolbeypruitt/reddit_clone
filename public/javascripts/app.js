var app = angular.module("redditApp", []);
app.controller("PostController", function($scope){
  $scope.allPosts = [];
  $scope.newPost = function () {
    var d = new Date();
    $scope.postObj.rightNow = d.getTime();
    $scope.allPosts.push($scope.postObj);
    $scope.postObj = {};
  }

  $scope.rightNow = function () {
    var d = new Date();
    $scope.postObj.rightNow = d.getTime();
  }
  // $scope.vote = function (direction) {
  //   if (direction==='up') {

  //   }
  // }
});
