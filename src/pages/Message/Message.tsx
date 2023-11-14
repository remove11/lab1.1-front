import React, { useState } from 'react';
import MessageRow from './MessageRow';
import { MessageDTO } from './MessageDTO'; 
import styles from '../Style/Style.module.css';

const Message: React.FC = () => {
  const messages: MessageDTO[] = [
    {
      id: 1,
      senderName: 'Me',
      receiverName: 'Jane Smith',
      content: 'Hey Jane, how are you doing today?',
      createdAt: '2022-07-24T09:00:00'
    },
    {
      id: 2,
      senderName: 'Jane Smith',
      receiverName: 'Me',
      content: 'Hi John, I am good! Just got back from my trip.',
      createdAt: '2022-07-24T09:02:00'
    },
    {
      id: 3,
      senderName: 'Me',
      receiverName: 'Jane Smith',
      content: 'That’s great! How was it?',
      createdAt: '2022-07-24T09:05:00'
    },
    {
      id: 4,
      senderName: 'Jane Smith',
      receiverName: 'Me',
      content: 'It was fantastic! So much to tell you about.',
      createdAt: '2022-07-24T09:10:00'
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Message Conversation</h1>
      <div className={styles.ContainerB}>
        <button className={styles.Button} onClick={togglePopup}>New Message</button>
      </div>

      {/* Popup for new message */}
      {showPopup && (
        <div className={styles.Popup}>
          <form>
            <input type="text" placeholder="Sender Name" />
            <input type="text" placeholder="Receiver Name" />
            <input type="text" placeholder="Message Content" />
            <div className={styles.ContainerB}>
              <button className={styles.Button} type="submit">Send Message</button>
              <button className={styles.Button} onClick={togglePopup}>Close</button>
            </div>
          </form>
        </div>
      )}

      {/* Existing messages */}
      {messages.map(message => (
        <MessageRow key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Message;