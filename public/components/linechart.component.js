app.component('linechart', {
  templateUrl: 'views/linechart.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    $scope.getData = (function() {

      ClaimService.getData().then(function(data) {
        console.log(data)
        $scope.data = [
          {
            key: "Test1",
            values: [2, 3, 4]
          }, {
            key: "Test2",
            values: [2, 3, 4]
          }
        ]
      })
    })();

    $scope.options = {
      chart: {
        type: 'cumulativeLineChart',
        height: 2000,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 65
        },
        x: function(d) {
          //return d.monthlyLoss
        },
        y: function(d) {
          //return d
        },

        color: d3.scale.category10().range(),
        duration: 300,
        useInteractiveGuideline: true,
        clipVoronoi: false,

        xAxis: {
          axisLabel: 'Average monthly loss of all airlines: '
        },

        yAxis: {
          axisLabel: 'Y Axis',

          axisLabelDistance: 0
        }
      }
    };
  }
})
