//次均费用分析柱状图
const averageCostBarChart={
  xAxis: {
    type: 'category',
    data: ['去年同期','当前'],
    axisTick:{
      show: false
    },
    axisLabel:{
      fontFamily: 'PingFangSC-Regular',
      fontSize: '12px',
      color: '#666666',
      fontWeight: 400,
    },
    splitArea: {
      interval:0
    }
  },
  yAxis: {
    show:false,
  },
  grid:{
    left: 0,
    right: 0,
    bottom: '15%',
    top:'10%',
  },
  series: [{
    data: [{
      value:'',
      itemStyle:{
        color: '#C2C8D5',
      },
    },{
      value:'',
      itemStyle: {
        color: '#269A99',
      }
    }],
    type: 'bar',
    barWidth: 16,
    label:{
      show:true,
      position:'top'
    }
  }]
}

export default averageCostBarChart;
