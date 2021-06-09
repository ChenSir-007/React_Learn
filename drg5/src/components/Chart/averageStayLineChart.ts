//平均住院日分析
const averageStayLineChart={
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
    name:'天',
    interval:2,
    max:8,
  },
  series: [
    {
      name: '平均住院日',
      type: 'line',
      // symbol: 'none',
      itemStyle: {
        color: '#5B8FF9'
      },
      emphasis: {
        focus: 'none'
      },
      data: []
    },
  ]
}

export default averageStayLineChart;
