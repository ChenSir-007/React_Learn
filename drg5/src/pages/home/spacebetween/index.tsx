import {Select,DatePicker} from "@firesoon/ant-ui";
import styles from './index.less';
import './index.less';
import {useState} from "react";
import moment from "moment";

const { RangePicker } = DatePicker;

export default function Spacebetween(){
  const [startMonth, setStartMonth] = useState(moment().subtract(4, 'month'));
  const [endMonth, setEndMonth] = useState(moment());
  return(
    <div className={styles.spacebetween}>
      <div>
        <Select
          data={[{
            name: 'DRG结算病例'
          },{
            name: '非DRG结算病例'
          }]}
          defaultValue="DRG结算病例"
          style={{width:'136px'}}
          label="病例范围"
        />
      </div>
      <div>
        <ul>
          <li>年</li>
          <li>季</li>
          <li>月</li>
        </ul>
        <RangePicker
          isMonth={true}
          startProps={{
            value: startMonth
          }}
          endProps={{
            value: endMonth
          }}
          onChange={(time, type) => {
            if (type === 'start') {
              setStartMonth(time);
            }
            if (type === 'end') {
              setEndMonth(time);
            }
          }}
        />
      </div>
    </div>
  );
}
