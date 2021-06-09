const overspendchart={
  tooltip:{
    trigger:'item',
    backgroundColor:'#FFFFFF',
    extraCssText:'box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10)',
    borderRadius: '4px',
    textStyle: {
      color: '#333333',
    },
  },
  title:{
    text:'123',
    subtext: '超支科室',
    left:'center',
    top:'33%',
    textStyle:{
      fontFamily: 'PingFangSC-Semibold',
      fontSize: 20,
      color: '#000000',
      // letterSpacing: 0,
      textAlign: 'center',
      fontWeight: 600,
    },
    subtextStyle:{
      fontFamily: 'PingFangSC-Semibold',
      fontSize: 14,
      color: '#000000',
      // letterSpacing: 0,
      textAlign: 'center',
      fontWeight: 600,
    },
  },
  series:[{
    data:[],
    type: 'pie',
    radius: ['60%','90%'],
    label:{
      formatter:'{d}%',
      show: true,
      position:'inside',
      fontSize:10,
      color:'#FFFFFF',
    },
    selectedMode:true,
    selectedOffset:5,
    labelLine:{
      show:false
    },
    itemStyle:{
      normal:{
        color: function (params) {
          var colorList = ['#E8684A','#5B8FF9'];
          return colorList[params.dataIndex]
        }
      }
    }
  }]
}

export default overspendchart;
