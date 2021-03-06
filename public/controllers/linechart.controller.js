// Component for the line chart

export default class LineChartController {
  constructor(ClaimService) {
    this.ClaimService = ClaimService;
    this.data = [];

    this.init();
  }

  init() {
    this.getData();
  }

  getData() {
    this.ClaimService.getData().then((data) => {

      let coordinates = [];

      let coords;
      //make coordinates for the line chart
      for (let i = 0; i < data.length; i++) {

        coords = {
          x: i,
          y: parseInt(data[i].monthlyLoss, 10),
          label: data[i].key
        }

        coordinates.push(coords);

      }

      this.data = [
        {
          key: "Monthly loss",
          values: coordinates,
          color: "blue"
        }
      ]

      this.options = {
        chart: {

          type: 'lineChart',
          height: 500,
          width: 2700,
          x: (d) => {

            return d.x;

          },
          y: (d) => {
            return d.y

          },

          color: d3.scale.category10().range(),
          duration: 300,
          useInteractiveGuideline: true,
          clipVoronoi: false,

          xAxis: {
            axisLabel: "Monthly loss",
            tickFormat: (d) => {

              const label = this.data[0].values[d].label;
              return label;

            },
            staggerLabels: true,
            axisLabelDistance: 30
          },

          yAxis: {
            axisLabel: 'Monthly loss',

            axisLabelDistance: 0
          },
          yTickFormat: (d) => {
            return d3.format('$')(d);
          }
        }
      };

    })
  }
}
LineChartController.$inject = ['ClaimService'];
// LineChartController.$inject = ['$scope', 'ClaimService'];
//
// function LineChartController($scope, ClaimService) {
//   $scope.data = [];
//   Gets data from the claim service
//   $scope.getData = (function() {
//
//     ClaimService.getData().then(function(data) {
//
//       var coordinates = [];
//
//       var coords;
//       make coordinates for the line chart
//       for (var i = 0; i < data.length; i++) {
//
//         coords = {
//           x: i,
//           y: parseInt(data[i].monthlyLoss, 10),
//           label: data[i].key
//         }
//
//         coordinates.push(coords);
//
//       }
//
//       $scope.data = [
//         {
//           key: "Monthly loss",
//           values: coordinates,
//           color: "blue"
//         }
//       ]
//
//     })
//   })();
//
//   $scope.options = {
//     chart: {
//
//       type: 'lineChart',
//       height: 600,
//       width: 2500,
//       x: function(d) {
//
//         return d.x;
//
//       },
//       y: function(d) {
//         return d.y
//
//       },
//
//       color: d3.scale.category10().range(),
//       duration: 300,
//       useInteractiveGuideline: true,
//       clipVoronoi: false,
//
//       xAxis: {
//         axisLabel: "Monthly loss",
//         tickFormat: function(d) {
//
//           var label = $scope.data[0].values[d].label;
//           return label;
//
//         },
//         staggerLabels: true,
//         axisLabelDistance: 30
//       },
//
//       yAxis: {
//         axisLabel: 'Monthly loss',
//
//         axisLabelDistance: 0
//       },
//       yTickFormat: function(d) {
//         return d3.format('$')(d);
//       }
//     }
//   };
// }
//
// module.exports = LineChartController;