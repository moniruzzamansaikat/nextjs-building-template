import Button from 'components/shared/Button';
import React from 'react';
import styles from 'styles/components/Features.module.scss';
import Image from 'next/image';

function Features() {
  return (
    <section className={`${styles.features}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-7 pe-5">
            <h5>
              OUR PROJECTS ARE WELL KNOWN. OUR PEOPLE SET US APART. WE INSPIRE
              GREATNESS. JOIN US TO BUILD A BETTER FUTURE.
            </h5>
            <div className="d-flex justify-content-end pe-5">
              <Image
                src={'/img/billionphotos-926461-min.png'}
                layout="fixed"
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="col-md-5">
            <h2>Let's Do Great Things Together - Join Us</h2>
            <p>
              Facilisi morbi tempus iaculis urna id volutpat lacus. Est placerat
              in egestas erat imperdiet sed euismod nisi porta. Eget arcu dictum
              varius duis. Adipiscing vitae proin sagittis nisl rhoncus. Sit
              amet commodo nulla facilisi nullam.
            </p>
            <p>
              Cursus sit amet dictum sit amet. Nisl vel pretium lectus quam id
              leo in. Elementum tempus egestas sed sed risus. Feugiat in ante
              metus dictum at tempor commodo ullamcorper a.
            </p>
            <Button>read more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
