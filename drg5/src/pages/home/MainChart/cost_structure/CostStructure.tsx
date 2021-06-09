import styles from './CostStructure.less';
import ReactEcharts from 'echarts-for-react';
import costpiechar from '@/components/Chart/costpiechar';
import drugConsumptionLineChar from '@/components/Chart/drugConsumptionLineChar';
import {drugConsumptionPieChar1,drugConsumptionPieChar2} from '@/components/Chart/drugConsumptionPieChar';
import {useDispatch, useSelector} from "dva";
import {useEffect, useState} from "react";
import {deepEqualForCommon} from "@/utils/utils";

export default function CostStructure(){
  const dispatch = useDispatch();
  const [drugConsumptionLineCharC,setdrugConsumptionLineCharC] =useState({})
  const [costpiecharC,setcostpiecharC] =useState({})
  const {Cost} = useSelector(({user}:any) => ({
    Cost:user.Cost
  }),deepEqualForCommon);
  useEffect(() => {
    dispatch({type: 'user/coststructure'});
  },[]);
  useEffect(()=>{
    // console.log('overSpend', overSpend)
    if(Cost) {
      drugConsumptionLineChar.series[0].data=Cost[0][0].value
      drugConsumptionLineChar.series[1].data=Cost[0][1].value
      setdrugConsumptionLineCharC({...drugConsumptionLineChar})
      costpiechar.series[0].data=Cost[1]
      setcostpiecharC({...costpiechar})
    }
  },[Cost]);
  return(
    <div className={styles.costStructure}>
      <h4>费用构成分析</h4>
      <div>
        <div>
          <span>药耗占比分析</span>
          <span className={styles.line}></span>
          <div className={styles.drugConsumptionLineChar}>
            <ReactEcharts
              option={drugConsumptionLineCharC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <div className={styles.drugConsumptionPieChar1}>
            <ReactEcharts
              option={drugConsumptionPieChar1}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <div className={styles.drugConsumptionPieChar2}>
            <ReactEcharts
              option={drugConsumptionPieChar2}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div>
          <span>费用构成分布</span>
          <span className={styles.line}></span>
          <div className={styles.costPieChart}>
            <ReactEcharts
              option={costpiecharC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <ul>
            <li>1312.12</li>
            <li>812.12</li>
            <li>712.12</li>
            <li>312.03</li>
            <li>312.03</li>
          </ul>
          <ul>
            <li>万元</li>
            <li>万元</li>
            <li>万元</li>
            <li>万元</li>
            <li>万元</li>
          </ul>
          <ul>
            <li>44.31%</li>
            <li>20.51%</li>
            <li>16.37%</li>
            <li>14.65%</li>
            <li>1.01%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
