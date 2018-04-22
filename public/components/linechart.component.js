app.component('linechart', {
  templateUrl: 'views/linechart.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    $scope.getData = (function() {

      ClaimService.getData().then(function(data) {

        var coordinates = [];

        var coords;
        for (var i = 0; i < data.length; i++) {

          coords = {
            x: i,
            y: data[i].monthlyLoss,
            label: data[i].key
          }

          coordinates.push(coords);

        }

        $scope.data = [
          {
            key: "Refer to X axis for airline names",
            values: coordinates,
            color: "blue"
          }
        ]

      })
    })();

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 500,
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
            console.log(d)
            var label = $scope.data[0].values[d].label;
            return label;

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
