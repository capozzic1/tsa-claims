app.service('ClaimService', ClaimService);

function ClaimService($http, $q) {
  return {
    getData: function() {
      return $q(function(resolve, reject) {
        $http.get("https://raw.githubusercontent.com/capozzic1/tsa-claims/master/claimsv2.json").then(function(data) {
          resolve(data.data)
        }, function(err) {
          reject('Could not load json');
        })
      })
    }
  }
}
