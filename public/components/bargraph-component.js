app.component('bargraph', {
  templateUrl: "views/BarGraph.template.html",
  controller: function($scope, ClaimService, $filter) {
    console.log(ClaimService)
    $scope.data1 = [];
    $scope.getData = (function() {
      ClaimService.getData("bargraph").then(function(data) {
        //console.log(data)
        data = $filter('orderBy')(data, '-claimsPerMonth')
        console.log(data);

        $scope.data = [
          {
            key: "Average claims per month",
            "color": "#107dea",
            values: data
          }
        ]
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
});

// $scope.data = [
//   {
//     "key": "Series1",
//     "color": "#d62728",
//     "values": [
//       {
//         "label": "Group A",
//         "value": -1.8746444827653
//       }, {
//         "label": "Group B",
//         "value": -8.0961543492239
//       }, {
//         "label": "Group C",
//         "value": -0.57072943117674
//       }, {
//         "label": "Group D",
//         "value": -2.4174010336624
//       }, {
//         "label": "Group E",
//         "value": -0.72009071426284
//       }, {
//         "label": "Group F",
//         "value": -0.77154485523777
//       }, {
//         "label": "Group G",
//         "value": -0.90152097798131
//       }, {
//         "label": "Group H",
//         "value": -0.91445417330854
//       }, {
//         "label": "Group I",
//         "value": -0.055746319141851
//       }
//     ]
//   }, {
//     "key": "Series2",
//     "color": "#1f77b4",
//     "values": [
//       {
//         "label": "Group A",
//         "value": 25.307646510375
//       }, {
//         "label": "Group B",
//         "value": 16.756779544553
//       }, {
//         "label": "Group C",
//         "value": 18.451534877007
//       }, {
//         "label": "Group D",
//         "value": 8.6142352811805
//       }, {
//         "label": "Group E",
//         "value": 7.8082472075876
//       }, {
//         "label": "Group F",
//         "value": 5.259101026956
//       }, {
//         "label": "Group G",
//         "value": 0.30947953487127
//       }, {
//         "label": "Group H",
//         "value": 0
//       }, {
//         "label": "Group I",
//         "value": 0
//       }
//     ]
//   }
// ]