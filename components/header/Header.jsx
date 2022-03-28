import Button from 'components/shared/Button';
import Image from 'next/image';
import React from 'react';
import styles from 'styles/components/Header.module.scss';
import HeaderCards from './HeaderCards';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 order-last order-md-first">
            <Image
              style={{ zIndex: -1 }}
              src={'/img/header-img.png'}
              layout="responsive"
              height={200}
              width={200}
            />
          </div>
          <div className="col-md-6">
            <h4>about us</h4>
            <h1>Plan. Perform. Inspire.</h1>
            <p className="mt-3">
              Our Company is a relationship-based company, meaning that we focus
              on developing and maintaining long-term relationships with all of
              our business partners.{' '}
            </p>
            <Button>read more</Button>
          </div>
        </div>

        <HeaderCards />
      </div>
    </header>
  );
}

export default Header;
