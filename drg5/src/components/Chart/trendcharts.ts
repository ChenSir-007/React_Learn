//自绘的趋势小图
const trendcharOption = {
    xAxis:{
      type: 'category',
      show: false
    },
    yAxis:{
      type: 'value',
      show: false
    },
    series:[{
      data:[2,3,1.5,4.5,3,4],
      type: 'line',
      symbol: 'none',
      smooth: true,
      areaStyle:{
        color:'#FFFFFF',
        opacity:0.3
      },
      lineStyle:{
        color:'#FFFFFF',
        opacity: 0.5
      }
    }]
}

export default trendcharOption;
