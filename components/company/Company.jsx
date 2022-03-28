import Button from 'components/shared/Button';
import React from 'react';
import styles from 'styles/components/Company.module.scss';
import CompanyCard from './CompanyCard';

function Company() {
  const companies = [
    {
      title: 'Design-Build',
      img: '/img/low-angle-plain-concrete-structure-city-with-copy-space_23-2148814201.jpg',
    },
    {
      title: 'Renovation',
      img: '/img/low-angle-plain-concrete-structure-city-with-copy-space_23-2148814201.jpg',
    },
    {
      title: 'City Spaces',
      img: '/img/plain-concrete-structure-city-with-copy-space_23-2148814198.jpg',
    },
    {
      title: 'Civil Engineers',
      img: '/img/5da03891-cde7-5ff9-6ffe-2bdac41249d0.jpg',
    },
  ];

  return (
    <section className={styles.company}>
      <div className="container">
        <h2>Building Company</h2>
        <p>
          From renovations and room additions to masonry and other handyman
          services
        </p>
        <div className="row">
          {companies.map((company) => (
            <div
              key={company.title}
              className="col-md-4 col-lg-3 col-sm-6 mb-4"
            >
              <CompanyCard background={company.img} title={company.title} />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button>view more</Button>
        </div>
      </div>
    </section>
  );
}

export default Company;
