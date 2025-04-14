"use client";

import { ReactElement, useRef, forwardRef, useImperativeHandle } from "react";
import Slider, { Settings } from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderComponentProps = {
  children: ReactElement[];
  options?: Settings;
  showArrows?: boolean;
};

const SliderComponent = forwardRef<Slider, SliderComponentProps>(
  ({ children, options, showArrows = true }, ref) => {
    const sliderRef = useRef<Slider>(null);

    useImperativeHandle(ref, () => sliderRef.current as Slider);

    const defaultSettings: Settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };

    return (
      <div className="p-4 lg:p-7 ring-2 ring-grey-600/50 rounded-xl h-auto flex flex-col">
        <Slider
          ref={sliderRef}
          arrows={false}
          {...defaultSettings}
          {...options}
        >
          {children}
        </Slider>
        {showArrows && (
          <div className="flex justify-center gap-2 mt-4 self-end">
            <button
              type="button"
              title="prev arrow"
              onClick={() => sliderRef.current?.slickPrev()}
              className="custom-arrow cursor-pointer"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              title="next arrow"
              onClick={() => sliderRef.current?.slickNext()}
              className="custom-arrow cursor-pointer"
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    );
  }
);

SliderComponent.displayName = "SliderComponent";
export default SliderComponent;
