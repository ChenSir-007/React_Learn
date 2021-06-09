//次均费用分析折线图
const averageCostLineChart={
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      label: {
        backgroundColor: '#FFFFFF'
      }
    },
    backgroundColor:'#FFFFFF',
    extraCssText:'box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10)',
    borderRadius: '4px',
    textStyle: {
      color: '#333333',
    },
  },
  legend: {
    show:false
  },
  grid: {
    left: 0,
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
    axisTick:{
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name:'万元',
    interval:300,
    max:1200,
  },
  series: [
    {
      name: '次均费用',
      type: 'line',
      // symbol: 'none',
      itemStyle: {
        color: '#269A99'
      },
      emphasis: {
        focus: 'none'
      },
      data: []
    },
  ]
}

export default averageCostLineChart;
