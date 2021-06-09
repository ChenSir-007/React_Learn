//费用构成分布环图
const costPieChart = {
  tooltip: {
    trigger: 'item',
    backgroundColor:'#FFFFFF',
    extraCssText:'box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10)',
    borderRadius: '4px',
    textStyle: {
      color: '#333333',
    },
  },
  legend: {
    orient:'vertical',
    icon:'circle',
    left: '75%',
    top: '18%',
    textStyle:{
      fontFamily: 'PingFangSC-Regular',
      fontSize: '12px',
      color: '#000000',
      fontWeight: 400,
    },
    itemGap:16,
  },
  series: [
    {
      name: '费用构成',
      type: 'pie',
      radius: ['40%', '70%'],
      center:['40%','50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [],
      itemStyle:{
        color:function (params) {
          const colorList = ['#5B8FF9','#269A99','rgba(93,112,146,0.85)','rgba(246,189,22,0.85)','rgba(232,104,74,0.85)'];
          return colorList[params.dataIndex]
        },
        borderColor: '#fff',
        borderWidth: 2
      }
    }
  ]
}

export default costPieChart;
