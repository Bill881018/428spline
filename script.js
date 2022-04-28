Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: '台灣與中國每年入境人數'
  },
  subtitle: {
    text: '台灣與中國外島旅遊人數差'
  },
  xAxis: {
    categories: ['2015', '2016', '2017', '2018', '2019', '2020']
  },
  yAxis: {
    title: {
      text: '每年旅遊入境人數'
    },
    labels: {
      formatter: function () {
        return this.value + '人';
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },


  series: [{name: '大陸',marker: {symbol: 'square'},data: [56.9,59.3,60.7,62.9,65.7,8.0]}, {name: '台灣',marker: {symbol: 'diamond'},data: [10.4,10.7,10.7,11.1,11.9,1.4]




    
  }]
});

