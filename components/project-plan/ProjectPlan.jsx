import Button from 'components/shared/Button';
import React from 'react';
import styles from 'styles/components/ProjectPlan.module.scss';

function ProjectPlan() {
  return (
    <section className={styles.project_plan}>
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className={styles.content}>
              <h2>Project Planing</h2>
              <p>
                Facilisi morbi tempus iaculis urna id volutpat lacus. Est
                placerat in egestas erat imperdiet sed euismod nisi porta. Eget
                arcu dictum varius duis. Adipiscing vitae proin sagittis nisl
                rhoncus. Sit amet commodo nulla facilisi nullam.
              </p>
              <Button>read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPlan;
