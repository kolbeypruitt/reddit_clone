var app = angular.module("redditApp", []);
app.controller("PostController", function($scope){
  // $scope.allPosts = ["Severus Snape","Harry Potter", "Ron Weasley"];
  $scope.allPosts = [];
  $scope.postObj = {};
  $scope.newPost = function () {
    $scope.allPosts.push($scope.postObj);
    $scope.postObj = {};
  }
});


// $scope.newContact = {};
//     $scope.contacts = [];
//     $scope.addContact = function () {
//       $scope.contacts.push($scope.newContact);
//       $scope.newContact = {};
//     }
//     $scope.search = function () {
//       for (var i = 0; i < $scope.contacts.length; i++) {
//         $scope.contacts[i]
//       }
//     }