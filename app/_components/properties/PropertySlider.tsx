"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SanityAssetDocument } from "next-sanity";
import { urlFor } from "@/app/_lib/ImageUrl";
import Slider from "react-slick";
import SliderComponent from "../ui/Slider";

type Props = { images: SanityAssetDocument[] };

export default function PropertyImageSlider({ images }: Props) {
  const mainSliderRef = useRef<Slider>(null);
  const thumbSliderRef = useRef<Slider>(null);

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  const mainSettings = {
    asNavFor: nav2 ?? undefined,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    afterChange: (i: number) => setCurrentSlide(i),
  };

  const thumbSettings = {
    asNavFor: nav1 ?? undefined,
    slidesToShow: Math.min(5, images.length),
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <SliderComponent
          showArrows={false}
          options={thumbSettings}
          ref={thumbSliderRef}
        >
          {images.map((img, idx) => (
            <div key={img._key} className="px-1">
              <div
                onClick={() => nav1?.slickGoTo(idx)}
                className={`relative h-16 md:h-20 lg:h-24 rounded-lg overflow-hidden cursor-pointer border-2
                  ${
                    currentSlide === idx
                      ? "border-primary-700"
                      : "border-transparent opacity-50"
                  }
                  transition
                `}
              >
                <Image
                  src={urlFor(img)!.width(200).height(200).url()}
                  alt="thumbnail"
                  fill
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 128px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>

      <SliderComponent options={mainSettings} ref={mainSliderRef}>
        {images.map((img) => (
          <div key={img._key} className="px-2">
            <div className="relative w-full lg:h-[400px] overflow-hidden aspect-video rounded-xl">
              <Image
                src={urlFor(img)!.url()}
                alt="property image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </SliderComponent>
    </div>
  );
}
