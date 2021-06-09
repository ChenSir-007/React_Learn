const overspendbarchart={
  tooltip:{
    trigger:'axis',
    axisPointer:{
      type:'shadow',
    },
    backgroundColor:'#FFFFFF',
    extraCssText:'box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10)',
    borderRadius: '4px',
    textStyle: {
      color: '#333333',
    },
  },
  grid:{
    left:'25%',
    top:0,
    bottom:0,
  },
  xAxis: {
    show:false
  },
  yAxis: {
    show: true,
    type:'category',
    data:[],
    axisLabel:{
      fontFamily: 'PingFangSC-Regular',
      fontSize: 12,
      color: '#000000',
      fontWeight: 400,
    },
    axisLine:{
      show:false,
    },
    axisTick:{
      show:false
    },
  },
  series:{
    type: 'bar',
    data: [],
    itemStyle:{
      color:'#C2C8D5',
      borderRadius: 2,
    },
    barWidth:12,
  }
}

export default overspendbarchart;
