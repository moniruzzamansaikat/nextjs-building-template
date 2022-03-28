import React from 'react';
import styles from 'styles/components/Company.module.scss';

function CompanyCard({ title = '', background }) {
  return (
    <div className={styles.company_card}>
      <div
        className={styles.card_bg}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <h4>{title}</h4>
    </div>
  );
}

export default CompanyCard;
