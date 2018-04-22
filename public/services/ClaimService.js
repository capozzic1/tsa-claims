app.service('ClaimService', ClaimService);

function ClaimService($http, $q) {
  return {
    getData: function(dataType) {
      var url = dataType === "bargraph"
        ? "https://raw.githubusercontent.com/capozzic1/tsa-claims/master/claimsv3.json"
        : "https://raw.githubusercontent.com/capozzic1/tsa-claims/master/linePlot.json";
      return $q(function(resolve, reject) {
        $http.get(url).then(function(data) {
          resolve(data.data)
        }, function(err) {
          reject('Could not load json');
        })
      })
    }
  }
}
