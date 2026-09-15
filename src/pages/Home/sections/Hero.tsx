import Buttons from "../../../components/ButtonsHero/ButtonsHero";

import heroMp4 from "/videos/lyria-hero.mp4";
import heroWebm from "/videos/lyria-hero.webm";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroMp4} type="video/mp4" />
        <source src={heroWebm} type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-10">
        <div className="flex flex-col items-center relative min-h-screen py-[20px] md:py-[32px] lg:py-[60px] px-[20px] md:px-[32px] lg:px-[60px]">
          <div className="flex-1 flex items-end justify-center w-full">
            <h1 className="flex justify-center items-start w-full font-anton-sc font-normal text-[#BBDBFA] text-[length:var(--clamp-xxl)] tracking-[-0.03em] uppercase leading-none tracking-tight mb-[24px] cursor-default">
              <span>l</span>
              <span>y</span>
              <span>r</span>
              <span>i</span>
              <span>a</span>
            </h1>
          </div>

          <div className="flex justify-center flex-wrap items-end gap-[20px] z-10">
            <div>
              <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-[20px] tracking-[-0.03em] text-start text-[#BBDBFA] w-[390px] uppercase">
                Unrehearsed. Unscripted. Unpredictable. A home for the sonic adventurers and the stories that linger
                after the last note fades
              </p>
            </div>

            <div className="flex flex-row gap-[5px]">
              <Buttons href="https://open.spotify.com/">spotify</Buttons>
              <Buttons href="https://podcasts.apple.com/us/new">apple podcast</Buttons>
              <Buttons href="https://www.youtube.com/">youtube</Buttons>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
