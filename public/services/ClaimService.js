//Gets data from my github api from my github. There's 2 data sets, one for each chart.
//If its a bar graph, get the bar graph data, else get the line chart data
//Returns a promise

export default class ClaimService {
  constructor($http, $q) {
    this._$http = $http;
    this._$q = $q;
  }

  getData(dataType) {
    const url = dataType === "bargraph"
      ? "https://raw.githubusercontent.com/capozzic1/tsa-claims/master/claimsv3.json"
      : "https://raw.githubusercontent.com/capozzic1/tsa-claims/master/linePlot2.json";
    return this._$q((resolve, reject) => {
      this._$http.get(url).then((data) => {
        resolve(data.data);
      }, (err) => {
        reject('Could not load json');
      })
    })
  }

}

ClaimService.$inject = ['$http', '$q'];
