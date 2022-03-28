import React from 'react';
import styles from 'styles/components/InformationPartner.module.scss';

function InformationPartner() {
  return (
    <section className={styles.inf_partner}>
      <div className="container py-4">
        <h2>Information partners</h2>
        <p>
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
        <div className={styles.box}>
          <img src="/img/cmps/1.png" alt="" />
          <img src="/img/cmps/2.png" alt="" />
          <img src="/img/cmps/3.png" alt="" />
          <img src="/img/cmps/4.png" alt="" />
          <img src="/img/cmps/5.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default InformationPartner;
