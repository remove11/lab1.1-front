import React from 'react';
import styles from '../Style/StyleRow.module.css';

interface EncounterProps {
  encounter: {
    patient: {
      name: string;
    };
    createdBy: {
      name: string;
    };
    description: string;
    createdAt: string;
  };
}

const EncounterRow: React.FC<EncounterProps> = ({ encounter }) => (
  <div className={styles.Row}>
    <h2 className={styles.Title}>Encounter with {encounter.patient.name}</h2>
    <p className={styles.Details}>Created by: {encounter.createdBy.name}</p>
    <p className={styles.Details}>{encounter.description}</p>
    <p className={styles.Date}>Date: {encounter.createdAt}</p>
  </div>
);

export default EncounterRow;