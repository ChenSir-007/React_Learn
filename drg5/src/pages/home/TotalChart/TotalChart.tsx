import styles from './TotalChart.less';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'dva';
import ReactEcharts from 'echarts-for-react';
import trendcharOption from '@/components/Chart/trendcharts';
import {Tooltip} from "antd";
import {deepEqualForCommon} from "@/utils/utils";

export default function TotalChart(){
  const text = <span>按院内结算时间统计出的出院病例数</span>
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'user/totalChart'});
  },[]);
  const {chartNumber} = useSelector(({user}:any) => ({
    chartNumber:user.chartNumber
  }),deepEqualForCommon);
  return(
    <div className={styles.totalChart}>
      <div className={styles.totalChart1}>
        <div className={styles.devChart1}>
          <span>全院出院病例数</span>
          <span>{chartNumber.dischargedCaseNumber}</span>
          <span style={{left:'115px'}}>例</span>
          <span></span>
          <span>DRG结算病例</span>
          <span>{chartNumber.DRG}</span>
          <span></span>
          <span></span>
          <span>非DRG结算病例</span>
          <span style={{left:'110px'}}>{chartNumber.noDRG}</span>
          <span></span>
          <span></span>
          <Tooltip placement="top" title={text} style={{clear: "both"}}>
            <img src={require("@/assets/warn.svg")} alt=""/>
          </Tooltip>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.devChart2}>
          <span>总结余</span>
          <span>{chartNumber.Summary}</span>
          <span style={{left:'115px'}}>万元</span>
          <span></span>
          <span>医疗总费用</span>
          <span>{chartNumber.caseCoast}万元</span>
          <span></span>
          <span></span>
          <span>结算总金额</span>
          <span>{chartNumber.totalAmount}万元</span>
          <span></span>
          <span></span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
      </div>
      <div className={styles.totalChart2}>
        <div className={styles.devChart3}>
          <span>总点数</span>
          <span>{chartNumber.points}</span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.devChart3}>
          <span>总权重</span>
          <span>{chartNumber.weight}</span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.devChart3}>
          <span>费用消耗指数</span>
          <span>{chartNumber.consume}</span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.devChart3}>
          <span>病组数</span>
          <span>{chartNumber.diseaseGroups}</span>
          <span>组</span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.devChart3}>
          <span>CMI</span>
          <span>{chartNumber.CMI}</span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
        <div className={styles.devChart3}>
          <span>时间消耗指数</span>
          <span>{chartNumber.timeConsumptionIndex}</span>
          <div className={styles.devChart}>
            <ReactEcharts
              option={trendcharOption}
              style={{width:'100%',height:'100%'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
