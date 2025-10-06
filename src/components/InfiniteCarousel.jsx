import React, { useEffect, useRef } from "react";


const InfiniteCarousel = ({images}) => {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 1; // pixels per frame (adjust for speed)
  const gap = 16; // gap between images in pixels

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    let position = 0;
    const carousel = carouselRef.current;
    const itemWidth = carousel.firstChild.offsetWidth;
    const totalWidth = (itemWidth + gap) * images.length;

    const animate = () => {
      position -= speed;

      // Reset position when we've scrolled one full set of images
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [images.length, gap]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container that hides overflow */}
      <div className="relative h-[105px] w-full mx-auto">
        {/* Moving carousel track */}
        <div
          ref={carouselRef}
          className="absolute flex items-center gap-12"
          style={{ left: `calc(50% - ${250 / 2}px)` }} // Center first image
        >
          {duplicatedImages.map((img, index) => (
            <div
              key={`${index}-${img}`}
              className="h-[100px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Slide ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/250x150/A0A0A0/FFFFFF?text=Image+Error";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
