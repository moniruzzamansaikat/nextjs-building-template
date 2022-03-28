import Button from 'components/shared/Button';
import React from 'react';
import styles from 'styles/components/AboutUs.module.scss';

function AboutUs() {
  return (
    <section className={styles.about_us}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <img
              src="/img/crop-architect-opening-blueprint-min.jpg"
              alt=""
              className="img-fluid"
            />
            <ul className="mt-3">
              <li>Design-Build</li>
              <li>General Contracting</li>
              <li>Concerte Work</li>
              <li>Fabrication Services</li>
              <li>Industrial Services</li>
              <li>Roofing & Siding</li>
              <li>Site selection Services</li>
              <li>Steel building</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className={styles.title_box}>
              <h6>building company</h6>
              <h2>About Us</h2>
            </div>
            <div className="content">
              <p>
                Dictum sit amet justo donec enim diam vulputate. Sociis natoque
                penatibus et magnis dis parturient.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
              <Button>read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
