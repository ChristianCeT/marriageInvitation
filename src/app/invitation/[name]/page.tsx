"use client";
interface InvitationPageProps {
  params: {
    name: string;
    person: string;
  };
}
import { redirect } from "next/navigation";

import RoseWallpaper from "@/app/components/roseWallpaper";
import { People } from "../../../../public/data/invitated-people";

import Line from "@/app/components/line";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

async function getDataGuest(name: string) {
  const res = await fetch(`http://localhost:3000/api/guests/${name}`, {
    cache: "no-cache",
  });
  const { guest } = await res.json();

  return guest[0];
}

const InvitationPage = async ({ params }: InvitationPageProps) => {
  if (!params) return null;
  const guest: People = await getDataGuest(params.name);

  if (!guest) {
    redirect("/404");
  }

  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => {
          if (hasPrev)
            return (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-0 z-10 w-12 h-12 text-4xl text-white bg-black bg-opacity-50 rounded-full"
              >
                +
              </button>
            );
        }}
        renderArrowNext={(onClickHandler, hasPrev, label) => {
          if (hasPrev) {
          }
          return (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 right-0 z-10 w-12 h-12 text-4xl text-white bg-black bg-opacity-50 rounded-full"
            >
              +
            </button>
          );
        }}
      >
        <div>
          <RoseWallpaper></RoseWallpaper>
          <div className="absolute flex h-screen w-screen items-center justify-center">
            <Image
              src="/image/ringflower.png"
              alt="ring_flower"
              width={200}
              height={200}
              style={{
                width: 300,
                height: 300,
                zIndex: -4,
                opacity: 0.13,
                transform: "scale(1.2)",
              }}
              priority={true}
            ></Image>
          </div>
          <div className="w-screen h-screen">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <div className="flex flex-col justify-center items-center mb-5">
                <p className="font-semibold font-thirdText text-[1.3rem]">
                  ¡Estás invitado a la boda de!
                </p>
                <div className="flex">
                  <p className="mt-3 mr-3 font-bold font-mainText text-4xl text-primaryColorTitle2">
                    Teodoro
                  </p>
                  <p className="mt-5 font-mainText text-2xl">&</p>
                  <p className="mt-3 ml-3 font-bold font-mainText text-4xl text-primaryColorTitle">
                    Nicida
                  </p>
                </div>
              </div>
              <div className="flex gap-7 items-center w-screen px-9">
                <div className="w-[40%]">
                  <Line />
                  <div className="text-center my-[2px] font-thirdText">
                    Miércoles
                  </div>
                  <Line />
                </div>

                <div className="flex flex-col items-center w-[20%]">
                  <p className="mb-1 font-semibold text-transparent w-[30vw] text-center text-[1.9rem] font-mainText bg-gradient-to-r from-primaryColorTitle2 to-primaryColorTitle bg-clip-text">
                    Diciembre
                  </p>
                  <p className="font-bold text-5xl text-primaryColorLetter font-secondText">
                    06
                  </p>
                  <p className="font-bold mt-1 text-2xl font-secondText">
                    2023
                  </p>
                </div>

                <div className="w-[40%]">
                  <Line />
                  <div className="text-center my-[2px] font-thirdText">3pm</div>
                  <Line />
                </div>
              </div>

              <div className="absolute bottom-10 left-4">
                <div className="flex flex-col">
                  <p className="font-thirdText">Para:</p>
                  <p className="capitalize font-thirdText">{guest.name} &</p>
                  <p className="capitalize font-thirdText">{guest.family}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="submit">Confirmar Asistencia</button>
        </div>
      </Carousel>
    </div>
  );
};

export default InvitationPage;
