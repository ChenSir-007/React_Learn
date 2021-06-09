import styles from './ResourceUse.less';
import ReactEcharts from 'echarts-for-react';
import averageCostLineChart from '@/components/Chart/averageCostLineChart';
import averageStayLineChart from '@/components/Chart/averageStayLineChart';
import averageCostBarChart from '@/components/Chart/averageCostBarChart';
import averageStayBarChart from '@/components/Chart/averageStayBarChart';
import {useDispatch, useSelector} from "dva";
import {useEffect, useState} from "react";
import {deepEqualForCommon} from "@/utils/utils";

export default function ResourceUse(){
  const dispatch = useDispatch();
  const [averageCostBarChartC,setaverageCostBarChartC] =useState({})
  const [averageCostLineChartC,setaverageCostLineChartC] =useState({})
  const [averageStayBarChartC,setaverageStayBarChartC] =useState({})
  const [averageStayLineChartC,setaverageStayLineChartC] =useState({})
  useEffect(() => {
    dispatch({type: 'user/resourceUse'});
  },[]);
  const {Resource} = useSelector(({user}:any) => ({
    Resource:user.Resource
  }),deepEqualForCommon);
  console.log(Resource)
  useEffect(()=>{
    // console.log('overSpend', overSpend)
    if(Resource) {
      averageCostBarChart.series[0].data[0].value=Resource[0][0]
      averageCostBarChart.series[0].data[1].value=Resource[0][1]
      setaverageCostBarChartC({...averageCostBarChart})
      averageCostLineChart.series[0].data=Resource[1]
      setaverageCostLineChartC({...averageCostLineChart})
      averageStayBarChart.series[0].data[0].value=Resource[2][0]
      averageStayBarChart.series[0].data[1].value=Resource[2][1]
      setaverageStayBarChartC({...averageStayBarChart})
      averageStayLineChart.series[0].data=Resource[3]
      setaverageStayLineChartC({...averageStayLineChart})
    }
  },[Resource]);
  return(
    <div className={styles.resourceUse}>
      <h4>资源使用效率分析</h4>
      <div>
        <div>
          <span>次均费用分析</span>
          <span className={styles.line}></span>
          <div className={styles.averageCostLineChart}>
            <ReactEcharts
              option={averageCostLineChartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <div className={styles.averageCostBarChart}>
            <ReactEcharts
              option={averageCostBarChartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <span>-988.09</span>
        </div>
        <div>
          <span>平均住院日分析</span>
          <span className={styles.line}></span>
          <div className={styles.averageStayLineChart}>
            <ReactEcharts
              option={averageStayLineChartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <div className={styles.averageStayBarChart}>
            <ReactEcharts
              option={averageStayBarChartC}
              style={{width:'100%',height:'100%'}}
            />
          </div>
          <span>+1.22</span>
        </div>
      </div>
    </div>
  );
}
