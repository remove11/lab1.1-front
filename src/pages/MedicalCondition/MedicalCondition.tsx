import React, { useState } from 'react';
import MedicalConditionRow from './MedicalConditionRow'; 
import { MedicalConditionDTO } from './MedicalConditionDTO';
import styles from '../Style/Style.module.css';


const MedicalCondition: React.FC = () => {
  const medicalConditions: MedicalConditionDTO[] = [
    {
      id: '1',
      patientSocialNr: '123-45-6789',
      patientName: 'John Doe',
      doctorEmployeeId: 'd456',
      doctorName: 'Dr. Smith',
      diagnos: 'Diabetes Type 2',
      createdAt: '2022-07-20T14:48:00'
    },
    {
      id: '2',
      patientSocialNr: '987-65-4321',
      patientName: 'Jane Smith',
      doctorEmployeeId: 'd789',
      doctorName: 'Dr. Alice',
      diagnos: 'Hypertension',
      createdAt: '2022-07-21T09:30:00'
    },
    {
      id: '3',
      patientSocialNr: '321-54-6789',
      patientName: 'Michael Brown',
      doctorEmployeeId: 'd234',
      doctorName: 'Dr. Johnson',
      diagnos: 'Asthma',
      createdAt: '2022-07-22T10:20:00'
    },
    {
      id: '4',
      patientSocialNr: '567-89-0123',
      patientName: 'Linda Green',
      doctorEmployeeId: 'd567',
      doctorName: 'Dr. Martinez',
      diagnos: 'Chronic Kidney Disease',
      createdAt: '2022-07-23T15:45:00'
    },
  ];


  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  

 return (
    <div className={styles.Container}> 
      <h1 className={styles.Title}>Medical Condition</h1>
      <div className={styles.ContainerB}>
        <button className={styles.Button} onClick={togglePopup}>New Medical Condition</button>
      </div>

      {/* Popup for new medical condition */}
      {showPopup && (
        <div className={styles.Popup}>
          <form>
            <input type="text" placeholder="Patient Social Number" />
            <input type="text" placeholder="Patient Name" />
            <input type="text" placeholder="Doctor Employee ID" />
            <input type="text" placeholder="Doctor Name" />
            <input type="text" placeholder="Diagnosis" />
            <input type="datetime-local" placeholder="Date and Time" />
            <div className={styles.ContainerB}>
              <button className={styles.Button} type="submit">Add Condition</button>
              <button className={styles.Button} onClick={togglePopup}>Close</button>
            </div>
          </form>
        </div>
      )}

      {medicalConditions.map(medicalCondition => (
        <MedicalConditionRow key={medicalCondition.id} medicalCondition={medicalCondition} />
      ))}
    </div>
  );
}


export default MedicalCondition;