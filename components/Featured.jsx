import React, { useCallback, useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "../styles/Featured.module.css";
import { NextButton, PrevButton } from "./EmblaCarouselButtons";
import Image from "next/image";

const Featured = () => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const [imageSources, setImageSources] = useState([
    "/images/jw1.jpg",
    "/images/jw2.jpg",
    "/images/jw3.jpg",
    "/images/jw4.jpg",
  ]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {imageSources.map((src, i) => (
            <div className={styles.embla__slide} key={i}>
              <div className={styles.embla__slide__inner}>
                <Image
                  className={styles.embla__slide__img}
                  src={src}
                  layout="fill"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
