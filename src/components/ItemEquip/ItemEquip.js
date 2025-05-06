import React from 'react';
import styles from './ItemEquip.module.css';
import Bottom from '../Bottom/Bottom';

export default function ItemEquip({ title, description, src, titleColor }) {
  return (
    <div className={'container'} style={{ '--title-bg-color': titleColor }}>
      <div className={'leftColumn'}>
        <h3 className={styles.title}>{title}</h3>
        <img src={src} alt={title} className={styles.image} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={'rightColumn'}></div>

      <Bottom backUrl={-1} />
    </div>
  );
}
