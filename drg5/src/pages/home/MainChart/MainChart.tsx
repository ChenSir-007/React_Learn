import styles from './MainChart.less';
import OverSpend from "@/pages/home/MainChart/overspend/OverSpend";
import CostStructure from "@/pages/home/MainChart/cost_structure/CostStructure";
import ResourceUse from "@/pages/home/MainChart/resource_use/ResourceUse";
import CaseGroupMedicalRecord
  from "@/pages/home/MainChart/casegroup_medicalrecord/CaseGroupMedicalRecord";

export default function MainChart(){
  return(
    <div className={styles.mainChart}>
      <OverSpend></OverSpend>
      <CostStructure></CostStructure>
      <ResourceUse></ResourceUse>
      <CaseGroupMedicalRecord></CaseGroupMedicalRecord>
    </div>
  );
}
