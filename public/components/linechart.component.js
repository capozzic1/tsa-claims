app.component('linechart', {
  templateUrl: 'views/linechart.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    $scope.getData = (function() {

      ClaimService.getData().then(function(data) {
        //data[0]["values"] = "yolo";
        //console.log(data[0]);
        var coordinates = [];
        var airLineName = [];
        //console.log(data);

        var coords;
        for (var i = 0; i < data.length; i++) {
          //console.log(i)

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

        debugger;
      })
    })();

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 700,
        width: 5000,
        x: function(d) {
          //console.log(d)
          return d.x;
          //return d[0].values[0].x;
        },
        y: function(d) {
          return Number(d.y);
          //return d[0].values.y;
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
            //debugger;
          },
          axisLabelDistance: 100
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
