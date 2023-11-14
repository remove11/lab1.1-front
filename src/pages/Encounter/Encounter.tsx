import React, { useState } from 'react';
import EncounterRow from './EncounterRow'; 
import styles from '../Style/Style.module.css';


const Encounter: React.FC = () => {


  const encounters = [
    {
      id: 1,
      patient: {
        id: 'p123',
        name: 'John Doe',
        social: '123-45-6789'
      },
      createdBy: {
        id: 'd456',
        name: 'Dr. Smith'
      },
      description: 'Regular check-up and flu vaccine.',
      createdAt: '2022-07-20T14:48:00'
    },
    {
      id: 2,
      patient: {
        id: 'p456',
        name: 'Jane Smith',
        social: '987-65-4321'
      },
      createdBy: {
        id: 'd789',
        name: 'Dr. Alice'
      },
      description: 'Consultation about persistent cough and cold symptoms.',
      createdAt: '2022-07-21T09:30:00'
    },
    {
      id: 3,
      patient: {
        id: 'p789',
        name: 'Alice Johnson',
        social: '321-54-6789'
      },
      createdBy: {
        id: 'd012',
        name: 'Dr. Bob'
      },
      description: 'Annual physical examination.',
      createdAt: '2022-07-22T16:00:00'
    },
    {
      id: 4,
      patient: {
        id: 'p101',
        name: 'Chris Martin',
        social: '567-89-0123'
      },
      createdBy: {
        id: 'd345',
        name: 'Dr. Rachel'
      },
      description: 'Follow-up for medication review.',
      createdAt: '2022-07-23T11:15:00'
    }
  ];

  

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Encounter Page</h1>
      <div className={styles.ContainerB}>
      <button className={styles.Button} onClick={togglePopup}>New Encounter</button>
      </div>
      

      {/* Popup for new encounter */}
      {showPopup && (
        <div className={styles.Popup}>
          <form>
            <input type="text" placeholder="Patient Name" />
            <input type="text" placeholder="Doctor's Name" />
            <input type="text" placeholder="Description" />
            <input type="date" />
            <div className={styles.ContainerB}>
              <button className={styles.Button} type="submit">Add Encounter</button>
            <button className={styles.Button} onClick={togglePopup}>Close</button>
            </div>
            
          </form>
        </div>
      )}

      {/* Existing encounters */}
      {encounters.map(encounter => (
        <EncounterRow key={encounter.id} encounter={encounter} />
      ))}
    </div>
  );
}


export default Encounter;