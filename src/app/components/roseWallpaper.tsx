import React from "react";
import Image from "next/image";

const RoseWallpaper = () => {
  return (
    <div>
      <div className="relative">
        <div className="animate-fade-right animate-once animate-ease-in">
          <Image
            src="/image/rose-wallpaper.png"
            width={160}
            height={160}
            style={{
              borderRadius: "47% 10%",
              position: "fixed",
              width: 160,
              height: 160,
              top: 22,
              left: -10,
              transform: "rotate(170deg) scale(1.2)",
            }}
            alt="minimalist rose"
            priority={true}
            quality={100}
          ></Image>
        </div>
        <div className="animate-pulse animate-infinite animate-duration-[8000ms] animate-ease-linear">
          <Image
            src="/image/Couple.png"
            alt="couple"
            width={160}
            height={160}
            style={{
              borderRadius: "47% 80% 40%",
              position: "fixed",
              width: 160,
              height: 160,
              top: 20,
              opacity: 0.15,
              transform: " scale(1.2)",
            }}
          ></Image>
        </div>

        <div className="animate-fade-left animate-once animate-ease-linear fixed bottom-4 right-1 scale-[1.2]">
          <Image
            src="/image/rose-wallpaper.png"
            width={160}
            height={160}
            style={{
              borderRadius: "47% 10%",
              width: 160,
              height: 160,
              transform: "rotate(-10deg) scale(1.2)",
            }}
            alt="minimalist rose"
            priority={true}
            quality={100}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default RoseWallpaper;
