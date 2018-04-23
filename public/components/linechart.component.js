app.component('linechart', {
  templateUrl: 'views/linechart.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    $scope.getData = (function() {

      ClaimService.getData().then(function(data) {

        var coordinates = [];

        var coords;
        for (var i = 0; i < data.length; i++) {
          console.log(data[0].monthlyLoss)
          // coords = {
          //   x: i,
          //   y: parseInt(data[i].monthlyLoss, 10),
          //   label: data[i].key
          // }
          //  console.log(coords.y)
          // coordinates.push(coords);

        }

        $scope.data = [
          {
            key: "Refer to X axis for airline names",
            values: coordinates,
            color: "blue"
          }
        ]
        //console.log(coordinates)
      })
    })();

    $scope.options = {
      chart: {

        type: 'lineChart',
        height: 1000,
        width: 5000,
        x: function(d) {

          return d.x;

        },
        y: function(d) {
          return d.y

        },

        color: d3.scale.category10().range(),
        duration: 300,
        useInteractiveGuideline: true,
        clipVoronoi: false,

        xAxis: {
          axisLabel: "Monthly loss",
          tickFormat: function(d) {

            // var label = $scope.data[0].values[d].label;
            // return label;

          }
        },

        yAxis: {
          axisLabel: 'Y Axis',

          axisLabelDistance: 0
        },
        yDomain: [0, 40000]
      }
    };
  }
})
