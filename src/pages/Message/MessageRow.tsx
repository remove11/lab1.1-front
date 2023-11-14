import React from 'react';
import { MessageDTO } from './MessageDTO';
import styles from '../Style/StyleRow.module.css';

interface MessageRowProps {
  message: MessageDTO;
}

const MessageRow: React.FC<MessageRowProps> = ({ message }) => (
  <div className={styles.Row}>
    <p className={styles.Title}>
      {message.senderName} to {message.receiverName}
    </p>
    <p className={styles.Details}>{message.content}</p>
    <p className={styles.Date}>Sent: {message.createdAt}</p>
  </div>
);

export default MessageRow;
