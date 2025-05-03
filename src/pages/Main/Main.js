import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css';
import Bottom from '../../components/Bottom/Bottom';

export default function Main() {
  const navigate = useNavigate();

  const handleRusianEquip = () => {
    navigate('/russian-equip');
  };

  const handleForeignEquip = () => {
    navigate('/foreign-equip');
  };

  return (
    <div className={'container'}>
      <div
        onClick={handleRusianEquip}
        className={'leftColumn' + ' ' + styles.column}
      >
        <img
          src="/images/russian-equipment.png" // путь к изображению российского вооружения
          alt="Российское вооружение"
          className={styles.image}
        />
        <div className={styles.caption}>
          Российское <br /> вооружение
        </div>
      </div>

      <div
        onClick={handleForeignEquip}
        className={'rightColumn' + ' ' + styles.column}
      >
        <img
          src="/images/foreign-equipment.png" // путь к изображению вооружения противника
          alt="Вооружение противника"
          className={styles.image}
        />
        <div className={styles.caption}>
          Вооружение <br /> противника
        </div>
      </div>

      <Bottom backUrl={'/'} />
    </div>
  );
}
