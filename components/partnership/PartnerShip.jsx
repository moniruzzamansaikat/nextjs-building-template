import Button from 'components/shared/Button';
import React from 'react';
import styles from 'styles/components/PartnerShip.module.scss';

function PartnerShip() {
  return (
    <section className={styles.partnership}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className={styles.title_bar}></div>
            <h2>Results & Partnerships</h2>
            <p>
              Our Company is the developer of a revolutionary system of building
              using 21st century components of exceptional manufacture and build
              accuracy. It enables very fast building by unskilled staff and
              provides superior ecological and social benefits in providing
              affordable housing at reasonable costs.
            </p>
            <Button>read more</Button>
          </div>
          <div className="col-md-4">
            <img
              src="/img/architect-woman_329181-8770.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerShip;
