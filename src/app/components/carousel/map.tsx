import React from "react";
import Image from "next/image";

const Map = ({ isAnimation }: any) => {
  const handleButtonClick = () => {
    if (navigator.geolocation) {
      const latitude = -12.153633939183926;
      const longitude = -76.97476400552624;
      const isMobileAndroid = /Android/i.test(navigator.userAgent);
      const isMobileIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobileAndroid) {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
          "_blank"
        );
      } else if (isMobileIOS) {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
          "_blank"
        );
      } else {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
          "_blank"
        );
      }
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex flex-start">
      <button onClick={handleButtonClick}>
        <Image
          src="/location.svg"
          alt="ubication"
          width={30}
          height={30}
          style={{
            width: 40,
            height: 40,
          }}
          className="animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out"
        ></Image>
        {isAnimation ? (
          <p className="text-end text-primaryColorTitle font-bold font-mono animate-fade-left animate-once animate-duration-[4000ms] animate-ease-in-out animate-fill-both ">
            Ubicación
          </p>
        ) : (
          <p></p>
        )}
      </button>
    </div>
  );
};

export default Map;
