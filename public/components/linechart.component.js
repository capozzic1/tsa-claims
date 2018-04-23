app.component('linechart', {
  templateUrl: 'views/linechart.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    $scope.getData = (function() {

      ClaimService.getData().then(function(data) {

        var coordinates = [];

        var coords;
        for (var i = 0; i < data.length; i++) {
          //console.log(parseInt(data[0].monthlyLoss))
          coords = {
            x: i,
            y: parseInt(data[i].monthlyLoss, 10),
            label: data[i].key
          }
          //  console.log(coords.y)
          coordinates.push(coords);

        }

        $scope.data = [
          {
            key: "Monthly loss",
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
        height: 700,
        width: 2500,
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

            var label = $scope.data[0].values[d].label;
            return label;

          },
          staggerLabels: true,
          axisLabelDistance: 30
        },

        yAxis: {
          axisLabel: 'Monthly loss',

          axisLabelDistance: 0
        }
      }
    };
  }
})
