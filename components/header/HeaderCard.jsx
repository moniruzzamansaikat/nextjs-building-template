import Button from 'components/shared/Button';
import React from 'react';
import { BiAlignMiddle } from 'react-icons/bi';
import styles from 'styles/components/HeaderCard.module.scss';

function HeaderCard({ title, content, background }) {
  return (
    <div className={styles.header_card} style={{ backgroundColor: background }}>
      <div className={styles.icon_box}>
        <BiAlignMiddle />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button bgWhite>more</Button>
    </div>
  );
}

export default HeaderCard;
