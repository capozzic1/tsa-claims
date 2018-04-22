app.component('linechart', {
  templateUrl: 'views/linechart.template.html',
  controller: function($scope, ClaimService) {
    $scope.data = [];
    $scope.getData = (function() {

      ClaimService.getData().then(function(data) {
        data[0]["values"] = "yolo";
        //console.log(data[0]);
        var newData = [];

        for (var i = 0; i < data.length; i++) {
          data[i]["values"] = {
            x: i,
            y: data[i].monthlyLoss
          };
        }
        console.log(data)

        $scope.data = data
      })
    })();

    $scope.options = {
      chart: {
        type: 'lineChart',
        height: 500,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 65
        },
        x: function(d) {
          return d.values.x;
        },
        y: function(d) {
          return d.values.y;
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
