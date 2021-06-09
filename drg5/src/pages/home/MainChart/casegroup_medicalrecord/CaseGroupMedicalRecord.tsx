import styles from './CaseGroupMedicalRecord.less';
import ReactEcharts from 'echarts-for-react';
import casegroupchart from '@/components/Chart/casegroupchart';
import medicalRecordChart from '@/components/Chart/medicalRecordChart';
import {Row,Col,Tooltip} from "antd";
import {useDispatch, useSelector} from "dva";
import {useEffect, useState} from "react";
import {deepEqualForCommon} from "@/utils/utils";

export default function CaseGroupMedicalRecord(){
  const text1 = <span>病案首页与电子病例首页相比，DRG分组不一致病例</span>
  const text2 = <span>病案首页总点数 - 电子病历首页总点数。<br/>即编码后总点数 - 编码前总点数</span>
  const dispatch = useDispatch();
  const [casegroupchartC,setcasegroupchartC] =useState({})
  const [medicalRecordChartC,setmedicalRecordChartC] =useState({})
  useEffect(() => {
    dispatch({type: 'user/case'});
  },[]);
  const {caseGroup} = useSelector(({user}:any) => ({
    caseGroup:user.caseGroup
  }),deepEqualForCommon);
  useEffect(()=>{
    // console.log('overSpend', overSpend)
    if(caseGroup) {
      casegroupchart.series.data=caseGroup[0]
      setcasegroupchartC({...casegroupchart})
      medicalRecordChart.series[0].data=caseGroup[1][0].data
      medicalRecordChart.series[1].data=caseGroup[1][1].data
      setmedicalRecordChartC({...medicalRecordChart})
    }
  },[caseGroup]);
  return(
    <div>
      <h4><Row>
        <Col span={12}>病组构成分析</Col>
        <Col span={12} style={{paddingLeft:'18px'}}>病案质量分析</Col>
      </Row></h4>
      <div>
        <div className={styles.caseGroup}>
          <span>各RW区间病组分布</span>
          <span className="line"></span>
          <span>RW区间设置</span>
          <div className={styles.caseGroupChart}>
            <ReactEcharts
              option={casegroupchartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.medicalRecord}>
          <span>编码前后分组不一致分析</span>
          <span className={styles.line}></span>
          <div className={styles.medicalRecordChart}>
            <ReactEcharts
              option={medicalRecordChartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <Tooltip placement="topLeft" title={text1}>
            <img src={require("@/assets/sign.svg")} alt=""/>
          </Tooltip>
          <span>分组不一致病例</span>
          <span>32341</span>
          <span>例</span>
          <span>13.49%</span>
          <span>点数差</span>
          <Tooltip placement="right" title={text2}>
            <img src={require("@/assets/sign.svg")} alt=""/>
          </Tooltip>
          <span>-2376.92</span>
          <span>点</span>
          <span>结余差</span>
          <span>-343.34</span>
          <span>万元</span>
        </div>
      </div>
    </div>
  );
}
