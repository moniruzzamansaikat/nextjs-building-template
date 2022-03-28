import React from 'react';
import styles from 'styles/components/HeaderCards.module.scss';
import HeaderCard from './HeaderCard';

function HeaderCards() {
  const cards = [
    {
      title: 'ANALYSIS',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      background: '#E3B700',
    },
    {
      title: 'PLANNING',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      background: '#F1C50E',
    },
    {
      title: 'DESIGN',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      background: '#F5D654',
    },
    {
      title: 'BUILDING',
      content:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      background: '#F9E79B',
    },
  ];

  return (
    <div className={`${styles.header_cards}`}>
      {cards.map((card) => (
        <div key={card.title}>
          <HeaderCard
            title={card.title}
            content={card.content}
            background={card.background}
          />
        </div>
      ))}
    </div>
  );
}

export default HeaderCards;
