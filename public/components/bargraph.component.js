app.component('bargraph', {
  templateUrl: "views/bargraph.template.html",
  controller: [
    '$scope',
    'ClaimService',
    '$filter',
    function($scope, ClaimService, $filter) {

      $scope.newData = {
        apCode: null,
        claimsPerMonth: null,
        mean: null,
        stDev: null
      };

      $scope.addData = function() {
        $scope.data[0].values.push($scope.newData);

        $scope.sort();

      }
      //keeps the bargraph sorted by claimsPerMonth after adding new data
      $scope.sort = function(data) {

        if (data) {
          data = $filter('orderBy')(data, '-claimsPerMonth');
          return data;
        } else {
          $scope.data[0].values = $filter('orderBy')($scope.data[0].values, '-claimsPerMonth');

        }

      }

      $scope.getData = (function() {
        ClaimService.getData("bargraph").then(function(data) {
          //console.log(data)
          data = $scope.sort(data);

          $scope.data = [
            {
              key: "Average claims per month",
              "color": "#107dea",
              values: data
            }
          ]

          console.log($scope.data[0]);

          //{apCode: "JFK", claimsPerMonth: 237, mean: 0.06825, stDev: 26.231}

        })
      })()

      $scope.options = {
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
              //Remember to put in Airport code to help with navigation
              var mean = "Mean: " + d.data.mean;
              var stDev = "Standard deviation: " + d.data.stDev;
              return mean + "\n" + stDev;
            }
          }
        }
      }
    }
  ]
});
