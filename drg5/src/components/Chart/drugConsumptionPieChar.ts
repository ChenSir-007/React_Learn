//药耗占比分析饼图1
const drugConsumptionPieChar1={
  tooltip: {
    trigger: 'item',
    show:false
  },
  title:{
    text:'药占比',
    subtext:'33.09%',
    right:'-5',
    top:'2',
    subtextStyle:{
      fontFamily: 'DINAlternate-Bold',
      fontSize: 16,
      color: '#000000',
      fontWeight: 700,
    },
    textStyle:{
      fontFamily: 'PingFangSC-Regular',
      fontSize: 12,
      color: '#666666',
      lineHeight: 14,
      fontWeight: 400,
    },
  },
  grid:{
    left:0,
    global:false
  },
  series: [
    {
      name: '药占比',
      type: 'pie',
      center:['25%','50%'],
      radius: ['40%', '80%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [

        {value: 82.76},
        {value: 17.24},
      ],
      itemStyle:{
        color:function (params) {
          const colorList = ['#269A99','#C2C8D5'];
          return colorList[params.dataIndex]
        },
        borderColor: '#fff',
        borderWidth: 2
      }
    }
  ]
}

//药耗占比分析饼图2
const drugConsumptionPieChar2={
  tooltip: {
    trigger: 'item',
    show:false
  },
  title:{
    text:'耗占比',
    subtext:'17.24%',
    right:'-5',
    top:'2',
    subtextStyle:{
      fontFamily: 'DINAlternate-Bold',
      fontSize: 16,
      color: '#000000',
      fontWeight: 700,
    },
    textStyle:{
      fontFamily: 'PingFangSC-Regular',
      fontSize: 12,
      color: '#666666',
      lineHeight: 14,
      fontWeight: 400,
    },
  },
  grid:{
    left:0,
    global:false
  },
  series: [
    {
      name: '耗占比',
      type: 'pie',
      center:['25%','50%'],
      radius: ['40%', '80%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [

        {value: 66.91},
        {value: 33.09},
      ],
      itemStyle:{
        color:function (params) {
          const colorList = ['#5B8FF9','#C2C8D5'];
          return colorList[params.dataIndex]
        },
        borderColor: '#fff',
        borderWidth: 2
      }
    }
  ]
}

export {drugConsumptionPieChar1,drugConsumptionPieChar2};
