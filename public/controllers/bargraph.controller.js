//Controller for the bar graph

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

        x: (d) => {
          return d.apCode;
        },
        y: (d) => {
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
          tickFormat: (d) => {
            return d3.format(',.2f')(d);
          }
        },
        tooltip: {
          contentGenerator: (d) => {

            const apCode = `Airport code: ${d.data.apCode}`;
            const mean = `Mean: ${d.data.mean}`;
            const stDev = `Standard Deviation: ${d.data.stDev}`;

            const htmlString = `<div><h4>${apCode}</h4><h4>${mean}</h4><h4>${stDev}</h4></div>`;
            return htmlString;
          }
        }
      }
    }
    this.init();
  }

  addData() {
    this.data[0].values.push(this.newData);

    this.sort();
  }

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
