"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { createBrowserClient } from "@supabase/ssr";
import { Carousel } from "react-responsive-carousel";

import RoseWallpaper from "../roseWallpaper";
import Map from "./map";
import Line from "@/app/components/line";

import { TypeAnimation } from "react-type-animation";

type GuestSupa = {
  id: number;
  name: string;
  family: string;
  confirmation: string;
  created_at: string;
};

const CarouselT = ({ guest }: any) => {
  const [dataGuest, setDataGuest] = useState<GuestSupa>();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const dataSupaBase = async () => {
      const { data: guests, error } = await supabase
        .from("Guest")
        .select("*")
        .eq("name", guest.name);

      if (error) return console.log(error);

      setDataGuest(guests[0]);
    };

    dataSupaBase();
  }, []);

  const onClick = async () => {
    const { data, error } = await supabase
      .from("Guest")
      .update({ confirmation: "CONFIRMADO" })
      .eq("name", guest.name)
      .select();

    if (error) return console.log(error);

    setDataGuest(data[0]);
    setIsConfirm(true);
  };

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      onChange={(index) => {
        if (index === 1) setIsAnimation(true);
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) => {
        if (hasPrev) {
          return (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute top-1/2 left-0 z-10 w-12 h-12 ml-1 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out"
            >
              <Image
                onClick={onClickHandler}
                src="/arrow-left.svg"
                priority
                alt="arrow_left"
                width={30}
                height={30}
              ></Image>
            </button>
          );
        }
      }}
      renderArrowNext={(onClickHandler, hasPrev, label) => {
        if (hasPrev) {
          return (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute top-1/2 right-0 z-10 w-12 h-12 mr-1 animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out"
            >
              <Image
                onClick={onClickHandler}
                src="/arrow-right.svg"
                priority
                alt="arrow_left"
                width={30}
                height={30}
              ></Image>
            </button>
          );
        }
      }}
    >
      <div>
        <RoseWallpaper></RoseWallpaper>
        <div className="absolute flex h-screen w-screen items-center justify-center">
          <div className="animate-pulse animate-infinite animate-duration-[3000ms] animate-ease-out">
            <Image
              src="/image/ringflower.png"
              alt="ring_flower"
              width={170}
              height={170}
              style={{
                width: 230,
                height: 230,
                zIndex: -4,
                opacity: 0.14,
                transform: "scale(1.2)",
              }}
              priority={true}
            ></Image>
          </div>
        </div>
        <div className="w-screen h-screen">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="font-bold font-thirdText text-[1.3rem] animate-fade-up animate-duration-[3000ms] animate-ease-out">
                ¡Estás invitado a la boda de!
              </p>
              <div className="flex">
                <p className="mt-3 mr-3 font-extrabold font-mainText text-4xl text-primaryColorTitle2 animate-fade-up animate-duration-[3000ms] animate-ease-out ">
                  Teodoro
                </p>
                <p className="mt-5 font-mainText text-2xl animate-fade-up animate-duration-[3000ms] animate-ease-out">
                  &
                </p>
                <p className="mt-3 ml-3 font-extrabold font-mainText text-4xl text-primaryColorTitle animate-fade-up animate-duration-[3000ms] animate-ease-out">
                  Nicida
                </p>
              </div>
            </div>
            <div className="flex gap-7 items-center w-screen px-9">
              <div className="w-[40%] animate-fade-left animate-duration-[3000ms] animate-ease-out">
                <Line color={"bg-primaryColorTitle2"} />
                <div className="text-center my-[2px] font-mono font-[550]">
                  Miércoles
                </div>
                <Line color={"bg-primaryColorLetter"} />
              </div>

              <div className="flex flex-col items-center w-[20%]">
                <p
                  className="mb-1 font-semibold text-transparent w-[36vw] text-center text-[1.85rem] font-mainText 
                bg-gradient-to-r from-primaryColorTitle2 to-primaryColorTitle bg-clip-text animate-fade-up animate-once animate-duration-[4000ms] animate-ease-out"
                >
                  Diciembre
                </p>
                <p className="font-extrabold text-5xl text-primaryColorLetter font-mainText animate-pulse animate-infinite animate-duration-[3000ms] animate-ease-out">
                  06
                </p>
                <p className="font-extrabold mt-1 text-2xl font-mainText animate-fade-up animate-once animate-duration-[4000ms] animate-ease-out">
                  2023
                </p>
              </div>

              <div className="w-[40%] animate-fade-right animate-duration-[3000ms] animate-ease-out">
                <Line color={"bg-primaryColorLetter"} />
                <div className="text-center my-[2px] font-mono font-[550]">
                  3pm
                </div>
                <Line color={"bg-primaryColorTitle2"} />
              </div>
            </div>

            <div className="absolute bottom-10 left-4 text-start">
              <div className="flex flex-col flex-start pb-14">
                <p className="font-mainText text-2xl text-primaryColorTitle font-semibold animate-fade-left animate-once animate-duration-[4000ms] animate-ease-out">
                  Para:
                </p>
                <p
                  className="capitalize font-mainText font-semibold text-2xl bg-gradient-to-r
              from-primaryColorLetter to-primaryColorTitle2 text-transparent bg-clip-text animate-fade-right animate-once animate-duration-[4000ms] animate-ease-out"
                >
                  {guest.name}
                </p>
                {guest.family ? (
                  <p
                    className="capitalize font-mainText font-semibold text-2xl bg-gradient-to-r
                    from-primaryColorLetter to-primaryColorTitle2 text-transparent bg-clip-text animate-fade-right animate-once animate-duration-[4000ms] animate-ease-out"
                  >
                    & {guest.family}
                  </p>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="absolute h-screen w-screen -z-10">
          <div className="animate-pulse animate-infinite animate-duration-[3000ms] animate-ease-out">
            <Image
              src="/image/Firefly1.png"
              width={300}
              height={300}
              alt="firefly_1"
              style={{
                borderRadius: "20% 60%",
                width: 300,
                height: 300,
                position: "absolute",
                top: "-20%",
                right: "5%",
                zIndex: -4,
                opacity: 0.25,
                transform: "rotate(240deg) scale(1.2)",
              }}
              priority={true}
            ></Image>
          </div>

          <div className="animate-pulse animate-infinite animate-duration-[3000ms] animate-ease-in ">
            <Image
              src="/image/Firefly2.png"
              width={300}
              height={300}
              alt="firefly_2"
              style={{
                borderRadius: "10% 60%",
                width: 400,
                height: 400,
                position: "absolute",
                bottom: "6%",
                left: "32%",
                zIndex: -4,
                opacity: 0.25,
                transform: "scale(1.2)",
              }}
              priority={true}
            ></Image>
          </div>
        </div>

        <div className="py-[28%] pl-12 pr-5 flex items-center flex-col gap-5 h-full">
          {isAnimation ? (
            <p
              className="font-bold 
            font-mainText text-[1.35em] animate-fade-down 
            animate-duration-[3000ms] animate-ease-in-out animate-fill-both leading-8"
            >
              {guest.message}
            </p>
          ) : (
            <div></div>
          )}

          <div className="flex w-full items-center justify-between px-5">
            {isAnimation ? (
              <div className="flex flex-col w-[40vw] animate-fade-right animate-once animate-duration-[4000ms] animate-ease-in-out animate-fill-both">
                <p className="text-start text-primaryColorTitle font-bold font-mono">
                  Dirección:
                </p>
                <p className="text-start font-[350] font-mono text-[13px]">
                  Mz5 Lote 3 Jr Quillabamba Nueva Esperanza
                </p>
              </div>
            ) : (
              <div></div>
            )}
            <Map isAnimation={isAnimation}></Map>
          </div>

          {dataGuest && dataGuest.confirmation === "CONFIRMADO" ? (
            <TypeAnimation
              sequence={[
                "¡Estaremos encantados de recibirte de la mejor manera!",
                8000,
              ]}
              wrapper="div"
              className="text-transparent text-center font-bold font-mainText text-[1.41em] 
              animate-fade-up animate-once animate-duration-[5000ms] animate-ease-in-out 
              animate-fill-both bg-gradient-to-r from-black to-primaryColorTitle bg-clip-text text-ellipsis
              "
              speed={5}
              preRenderFirstString={isConfirm ? false : true}
            ></TypeAnimation>
          ) : isAnimation ? (
            <button
              onClick={onClick}
              className="relative animate-fade-up animate-once animate-duration-[4000ms] animate-ease-in-out animate-fill-both"
              type="button"
            >
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-primaryColorLetter"></span>
              <span className="font-semibold relative inline-block h-full w-full rounded border-[1.7px] border-black bg-primaryColorTitle px-6 py-1 text-base text-white transition duration-100">
                ASISTIRÉ
              </span>
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <div></div>
      </div>
    </Carousel>
  );
};

export default CarouselT;
