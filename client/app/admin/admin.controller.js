'use strict';

angular.module('umm3601ursamajorApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.submissions = Submission.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
      $scope.delete = function(submission) {
          Submission.remove({ id: submission._id });
          angular.forEach($scope.submissions, function (u, i) {
              if (u === submission) {
                  $scope.submissions.splice(i, 1);
              }
          });
      };
  });
