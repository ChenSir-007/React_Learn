import {useEffect,useState} from 'react'
import styles from './OverSpend.less';
import ReactEcharts from 'echarts-for-react';
import overspendchart from '@/components/Chart/overspendchart';
import overspendbarchart from "@/components/Chart/overspendbarchart";
import caseDistribution from '@/components/Chart/casedistribution';
import {useDispatch, useSelector} from "dva";
import {deepEqualForCommon} from "@/utils/utils";
// import { Row, Col } from 'antd';

export default ()=>{
  const dispatch = useDispatch();
  const [overspendchartC,setOverspendchartC] =useState({})
  const [overspendbarchartC,setOverspendbarchartC] =useState({})
  const [caseDistributionC,setcaseDistributionC] =useState({})
  const {overSpend} = useSelector(({user}:any) => ({
    overSpend:user.overSpend
  }),deepEqualForCommon);
  useEffect(() => {
    dispatch({type: 'user/overspend'});
  },[]);
  useEffect(()=>{
    // console.log('overSpend', overSpend)
    if(overSpend) {
      overspendchart.series[0].data=overSpend[0]
      setOverspendchartC({...overspendchart})
      overspendbarchart.series.data=overSpend[1].map(d=>d.value)
      overspendbarchart.yAxis.data=overSpend[1].map(d=>d.name)
      setOverspendbarchartC({...overspendbarchart})
      caseDistribution.series[0].data=overSpend[2][0].value
      caseDistribution.series[1].data=overSpend[2][1].value
      setcaseDistributionC({...caseDistribution})
    }
  },[overSpend]);
  // console.log(overSpend, overspendchartC)
  return(
    <div className={styles.overspend}>
      <h4>超支结余分析</h4>
      <div>
        <div>
          <span>超支结余科室分布</span>
          <span className={styles.line}></span>
          <ul>
            <li style={{border: '1px solid #3367D6',color: '#3367D6'}}>分布</li>
            <li>趋势</li>
          </ul>
          <div className={styles.overspendchart}>
            <ReactEcharts
              option={overspendchartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <div className={styles.overspendbarchart}>
            <ReactEcharts
              option={overspendbarchartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div>
          <span>高低倍率病例分布</span>
          <span className={styles.line}></span>
          <ul>
            <li>分布</li>
            <li style={{border: '1px solid #3367D6',color: '#3367D6'}}>趋势</li>
          </ul>
          <div className={styles.caseDistribution}>
            <ReactEcharts
              option={caseDistributionC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
