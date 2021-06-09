//高低倍率病例分布
const caseDistribution={
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
    bottom: 0,
    //设置折线图例
    icon:'path://M887.91102 288.032042L627.32405 590.56024c-1.329275 1.477654-3.02694 2.511193-5.021363 2.511194h-0.295736a7.495718 7.495718 0 0 1-4.872984-1.847068L328.340585 318.528614 66.571696 592.628342l64.832588 64.020082 196.566888-203.284892c1.328251-1.551332 3.174296-2.363837 5.021363-2.363838 1.697665 0 3.470031 0.665149 4.799306 1.994424l289.975301 275.281647 330.146209-379.915729-70.002331-60.327994z',
    itemWidth: 14,
    itemHeight: 5,
  },
  grid: {
    left: 0,
    right: '5%',
    bottom: '15%',
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
    name:'%',
    interval:25,
    max:100
  },
  series: [
    {
      name: '高倍率病例',
      type: 'line',
      // symbol:'none',
      areaStyle: {
        color:{
          type:'linear',
          x0:0,
          y0:0,
          x2:0,
          y2:1,
          global: false,
          colorStops:[{
            offset: 0,color:'rgba(232,104,74,1)',
          },{
            offset: 1,color: 'rgba(232,104,74,0)'
          }],
        },
        opacity:0.4,
      },
      itemStyle:{
        color:' #E8684A',
      },
      emphasis: {
        focus: 'none'
      },
      data: []
    },
    {
      name: '低倍率病例',
      type: 'line',
      // symbol: 'none',
      areaStyle: {
        color:{
          type:'linear',
          x0:0,
          y0:0,
          x2:0,
          y2:1,
          global: false,
          colorStops:[{
            offset: 0,color:'rgba(246,189,22,1)',
          },{
            offset: 1,color: 'rgba(246,189,22,0)'
          }],
        },
        opacity:0.4
      },
      itemStyle: {
        color: '#F6BD16'
      },
      emphasis: {
        focus: 'none'
      },
      data: []
    },
  ]
}

export default caseDistribution;
