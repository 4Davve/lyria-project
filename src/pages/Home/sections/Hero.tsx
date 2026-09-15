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
        <div className="flex flex-col items-center relative min-h-screen py-[20px] px-[20px]">
          <div className="flex-1 flex items-end justify-center w-full">
            <h1 className="flex justify-center items-start w-full font-anton-sc font-normal leading-none text-[#BBDBFA] text-[196px] tracking-[-0.03em] uppercase leading-none tracking-tight mb-[24px]">
              <span>l</span>
              <span>y</span>
              <span>r</span>
              <span>i</span>
              <span>a</span>
            </h1>
          </div>

          <div className="flex justify-center flex-wrap items-end gap-[20px] z-10">
            <div>
              <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.03em] text-start text-[#BBDBFA] w-[390px] uppercase">
                Unrehearsed. Unscripted. Unpredictable. A home for the sonic adventurers and the stories that linger
                after the last note fades
              </p>
            </div>

            <div className="flex flex-row gap-[5px]">
              <button className="flex items-center justify-center font-inter text-[12px] px-[30px] py-[10px] text-[#FFFFFF] uppercase cursor-pointer">
                spotify
              </button>
              <button className="flex items-center justify-center font-inter text-[12px] px-[30px] py-[10px] text-[#FFFFFF] uppercase w-[180px] cursor-pointer">
                apple podcast
              </button>
              <button className="flex items-center justify-center font-inter text-[12px] px-[30px] py-[10px] text-[#FFFFFF] uppercase cursor-pointer">
                youtube
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
