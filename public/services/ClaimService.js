app.service('ClaimService', ClaimService);
//Gets data from my github api from my github. There's 2 data sets, one for each chart.
//If its a bar graph, get the bar graph data, else get the line chart data
//Returns a promise
function ClaimService($http, $q) {
  return {
    getData: function(dataType) {
      var url = dataType === "bargraph"
        ? "https://raw.githubusercontent.com/capozzic1/tsa-claims/master/claimsv3.json"
        : "https://raw.githubusercontent.com/capozzic1/tsa-claims/master/linePlot2.json";
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
