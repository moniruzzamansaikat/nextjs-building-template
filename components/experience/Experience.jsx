import Button from 'components/shared/Button';
import React from 'react';
import styles from 'styles/components/Experience.module.scss';

function Experience() {
  return (
    <section className={styles.experience}>
      <div className="container">
        <div className={styles.bg}></div>
        <div className="content">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img
                src="/img/5da03891-cde7-5ff9-6ffe-2bdac41249d0.jpg"
                alt="my img"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.text}>
                <h4>We have 10+ years of experience</h4>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <Button>read more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
