//各RW区间病组分布图表
const caseGroupChart={
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
  xAxis: {
    show:false
  },
  yAxis: {
    show: true,
    type:'category',
    data:['RW>3', '2<RW≤3', '1.5<RW≤2', '1<RW≤1.5', '0.5<RW≤1', '0<RW≤0.5'],
    axisLabel:{
      fontFamily: 'PingFangSC-Regular',
      fontSize: 12,
      color: '#333333',
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
    name:'病组数',
    type: 'bar',
    data: [],
    itemStyle:{
      color:'#5B8FF9',
      borderRadius: 1,
    },
    barWidth:12,
  },
  grid:{
    top:0,
    bottom:0,
    left:'15%',
    // right:0
  }
}

export default caseGroupChart;
