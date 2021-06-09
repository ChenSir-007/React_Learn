export default {
  // 支持值为 Object 和 Array
  // 'GET /api/users': { users: [1, 2] },
  // GET 可忽略
  'GET /api/UserInfo': {
    httpCode:200,
    data: {
      actualName: '王晓明',
      employeeCode: '001',
      hospitalName: '浙江大学医学院附属杭州市第一人民医院',
      departmentName: '儿科',
      roleId: '1',
      version: "v5.0.0"
    }
  },

  'GET /api/role': {
    httpCode: 200,
    data: [{
      name: '院级管理员',
      value: '1'
    }],
  },

  'GET /api/TotalChart':{
    data:{
      dischargedCaseNumber:'8,880.000',
      Summary:'-3,236.28',
      points:'471,746.15',
      weight:'1,746.15',
      consume:'12.07',
      diseaseGroups:'1,200',
      CMI:'1.5',
      timeConsumptionIndex:'3.23',
      DRG:'85.23%',
      noDRG:'14.77%',
      caseCoast:'3,36.28',
      totalAmount:'6,36.28',
    },
  },

  '/api/overspend':{
    data:[
      [{value: 36,selected:true,name:'超支科室'},
      {value: 64,name:'结余科室'}],
      [{name: '其他',value: 80},
        {name: '儿科',value: 29},
        {name: '整形外科',value: 75},
        {name: '呼吸科',value: 86},
        {name: '重症医学科',value: 134},
        {name: '消化内科',value: 150}],
      [{name: '高倍率病例',value: [50, 40, 68, 72, 76, 72, 85, 74, 85, 75, 84, 75]},
        {name: '低倍率病例',value: [35, 38, 30, 33, 48, 43, 50, 45, 50, 35, 24, 31]}]
    ],
  },

  '/api/coststructure':{
    data:[
      [{name:'药占比',value:[50, 40, 68, 72, 76, 72, 85, 74, 85, 75, 84, 75]},
        {name: '耗占比',value: [35, 38, 30, 33, 48, 43, 50, 45, 50, 35, 24, 31]}],
      [
        {value: 1312.12, name: '床位费'},
        {value: 812.12, name: '诊查费'},
        {value: 712.12, name: '检查费'},
        {value: 312.03, name: '化验费'},
        {value: 312.03, name: '治疗费'}
      ],
    ],
  },

  '/api/resourceUse':{
    data:[
      [3222.32,2234.23],
      [678, 736, 581, 640, 930, 833, 969, 872, 969, 678, 465, 601],
      [4.12,5.34],
      [4.25, 4.62, 3.65, 4.01, 5.84, 5.23, 6.08, 5.47, 6.08, 4.26, 2.92, 3.77]
    ],
  },

  '/api/case':{
    data:[
      [140,192,525,365.5,301,353],
      [{name:'分组不一致病例',data:[148.39, 38.76, 103.36, 100, 190.57, 161.5, 54.91, 80.75, 129.2, 29.07, 180.88, 161.5]},
        {name: '点数差',data:[75, 60, 70, 80, 75, 76.98, 50, 45, 50, 22, 52, 60]}]
    ],
  }
}
