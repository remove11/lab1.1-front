import React from 'react';
import { MedicalConditionDTO } from './MedicalConditionDTO';
import styles from '../Style/StyleRow.module.css';

interface MedicalConditionProps {
  medicalCondition: MedicalConditionDTO;
}

const MedicalConditionRow: React.FC<MedicalConditionProps> = ({ medicalCondition }) => (
  <div className={styles.Row}>
    <h2 className={styles.Title}>{medicalCondition.diagnos} for {medicalCondition.patientName}</h2>
    <p className={styles.Details}>Doctor: {medicalCondition.doctorName}</p>
    <p className={styles.Details}>Diagnosis: {medicalCondition.diagnos}</p>
    <p className={styles.Date}>Date: {medicalCondition.createdAt}</p>
  </div>
);

export default MedicalConditionRow;