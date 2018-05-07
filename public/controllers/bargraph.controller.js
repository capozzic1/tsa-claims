//Component for the bar graph

export default class BargraphController {
  constructor(ClaimService, $filter) {
    this.ClaimService = ClaimService;
    this._$filter = $filter;
    this.newData = {
      apCode: null,
      claimsPerMonth: null,
      mean: null,
      stDev: null
    };
    this.data = null;
    this.options = {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 7000,

        x: function(d) {
          return d.apCode;
        },
        y: function(d) {
          return d.claimsPerMonth;
        },
        showControls: false,
        showValues: true,
        duration: 500,
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Average claims per month',
          tickFormat: function(d) {
            return d3.format(',.2f')(d);
          }
        },
        tooltip: {
          contentGenerator: function(d) {
            console.log(d.data)

            var apCode = "Airport code: " + d.data.apCode;
            var mean = "Mean: " + d.data.mean;
            var stDev = "Standard deviation: " + d.data.stDev;

            var htmlString = "<div><h4>" + apCode + "</h4>" + "<h4>" + mean + "</h4>" + "<h4>" + stDev + "</h4>" + "</div>"
            return htmlString;
          }
        }
      }
    }
    this.init();
  }

  addData() {}

  init() {
    this.getData();
  }

  sort(data) {
    if (data) {
      data = this._$filter('orderBy')(data, '-claimsPerMonth');
      return data;
    } else {
      this.data[0].values = this._$filter('orderBy')(this.data[0].values, '-claimsPerMonth');

    }
  }
  getData() {

    this.ClaimService.getData("bargraph").then((data) => {
      console.log(data)
      data = this.sort(data);

      this.data = [
        {
          key: "Average claims per month",
          "color": "#107dea",
          values: data
        }
      ]

    })

  }
}

BargraphController.$inject = ['ClaimService', '$filter'];
// BargraphController.$inject = ['$scope', 'ClaimService', '$filter'];
//
// function BargraphController($scope, ClaimService, $filter) {
//
//   $scope.newData = {
//     apCode: null,
//     claimsPerMonth: null,
//     mean: null,
//     stDev: null
//   };
//   adds data to the bar graph
//   $scope.addData = function() {
//     $scope.data[0].values.push($scope.newData);
//
//     $scope.sort();
//
//   }
//   keeps the bargraph sorted by claimsPerMonth after adding new data
//   $scope.sort = function(data) {
//
//     if (data) {
//       data = $filter('orderBy')(data, '-claimsPerMonth');
//       return data;
//     } else {
//       $scope.data[0].values = $filter('orderBy')($scope.data[0].values, '-claimsPerMonth');
//
//     }
//
//   }
//   gets data from the claim service
//   $scope.getData = (function() {
//     ClaimService.getData("bargraph").then(function(data) {
//       console.log(data)
//       data = $scope.sort(data);
//
//       $scope.data = [
//         {
//           key: "Average claims per month",
//           "color": "#107dea",
//           values: data
//         }
//       ]
//
//     })
//   })()
//   options for angular nvd3's bar graph
//   $scope.options = {
//     chart: {
//       type: 'multiBarHorizontalChart',
//       height: 7000,
//
//       x: function(d) {
//         return d.apCode;
//       },
//       y: function(d) {
//         return d.claimsPerMonth;
//       },
//       showControls: false,
//       showValues: true,
//       duration: 500,
//       xAxis: {
//         showMaxMin: false
//       },
//       yAxis: {
//         axisLabel: 'Average claims per month',
//         tickFormat: function(d) {
//           return d3.format(',.2f')(d);
//         }
//       },
//       custom tooltip content
//       tooltip: {
//         contentGenerator: function(d) {
//           console.log(d.data)
//
//           var apCode = "Airport code: " + d.data.apCode;
//           var mean = "Mean: " + d.data.mean;
//           var stDev = "Standard deviation: " + d.data.stDev;
//
//           var htmlString = "<div><h4>" + apCode + "</h4>" + "<h4>" + mean + "</h4>" + "<h4>" + stDev + "</h4>" + "</div>"
//           return htmlString;
//         }
//       }
//     }
//   }
// }
//
// module.exports = BargraphController;