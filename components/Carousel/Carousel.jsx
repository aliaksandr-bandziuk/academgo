import React from 'react'
import styles from './Carousel.module.scss';
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image';

export const Carousel = ({ slides }) => {
  return (
    <div className={styles.carousel}>
      <div className="container">
        <Slider
          width="400px"
          duration={30}
          spacing={0}
          pauseOnHover={true}
          // blurBorders={true}
          // blurBoderColor={'#0170B9'}
          className={styles.slider}
        >
          {slides.map((slide) => (
            <Slider.Slide
              key={slide.alt}
            >
              <div
                className={styles.slideContent}
                style={{
                  aspectRatio: slide.ratio,
                }}
              >
                {slide.image && (
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </div>
  )
}
