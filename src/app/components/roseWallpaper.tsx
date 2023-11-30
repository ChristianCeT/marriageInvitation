import React from "react";
import Image from "next/image";

const RoseWallpaper = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/image/rose-wallpaper.png"
          width={200}
          height={200}
          style={{
            borderRadius: "47% 10%",
            position: "fixed",
            width: 200,
            height: 200,
            top: 22,
            left: -10,
            transform: "rotate(170deg) scale(1.2)",
          }}
          alt="minimalist rose"
          priority={true}
          quality={100}
        ></Image>
        <Image
          src="/image/rose-wallpaper.png"
          width={200}
          height={200}
          style={{
            borderRadius: "47% 10%",
            position: "fixed",
            width: 200,
            height: 200,
            bottom: 22,
            right: 9.5,
            transform: "rotate(-10deg) scale(1.2)",
          }}
          alt="minimalist rose"
          priority={true}
          quality={100}
        ></Image>
      </div>
    </div>
  );
};

export default RoseWallpaper;
