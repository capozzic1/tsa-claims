app.component('linegraph', {
  templateUrl: 'views/linegraph.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    ClaimService.getData().then(function(data) {})
  }
})
