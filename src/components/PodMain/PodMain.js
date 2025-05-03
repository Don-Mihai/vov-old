import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './PodMain.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bottom from '../Bottom/Bottom';

function NextArrow({ className, style, onClick }) {
  return (
    <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
      <img src={'/images/arrow.png'} alt="Next" className={styles.arrowIcon} />
    </div>
  );
}

function PrevArrow({ className, style, onClick }) {
  return (
    <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
      <img src={'/images/arrow.png'} alt="Next" className={styles.arrowIcon} />
    </div>
  );
}

export default function PodMain({ titleColor, title, slides, tabs }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [dragging, setDragging] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // включаем стрелки
    nextArrow: <NextArrow />, // используем кастомную кнопку «вперед»
    prevArrow: <PrevArrow />,
    beforeChange: () => {
      // Начало перелистывания
      setDragging(true);
    },
    afterChange: (index) => {
      // Конец перелистывания
      setDragging(false);
      setCurrentSlide(index);
    },
  };

  const handleSlideClick = (link) => {
    if (!dragging) {
      navigate(link);
    }
  };
  console.log(slides, activeTab);
  return (
    <div className={'container'} style={{ '--title-bg-color': titleColor }}>
      <div className={'leftColumn' + ' ' + styles.column}>
        <h3 className={styles.title}>{title}</h3>
        <Slider {...sliderSettings} className={styles.slider}>
          {slides[activeTab].map((slide) => (
            <div className={styles.slide} key={slide.id}>
              <img
                src={slide.src}
                alt={slide.title}
                className={styles.slideImage}
                onClick={() => handleSlideClick(slide.link)}
              />
            </div>
          ))}
        </Slider>
        <button className={styles.buttonDetail}>Подробнее</button>
        <h2 className={styles.slideTitle}>
          {slides[activeTab][currentSlide].title}
        </h2>
      </div>

      <div className={'rightColumn'}>
        <h3 className={styles.subtitle}>
          выберите раздел, чтобы узнать подробнее
        </h3>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.activeTab : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div></div>
      </div>

      <Bottom backUrl={'/main'} />
    </div>
  );
}
