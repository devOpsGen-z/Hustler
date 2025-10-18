import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const profileImages = [
  { src: "/ellipse-1.svg", alt: "Profile 1" },
  { src: "/ellipse-2.svg", alt: "Profile 2" },
  { src: "/ellipse-3.svg", alt: "Profile 3" },
  { src: "/ellipse-4.svg", alt: "Profile 4" },
  { src: "/ellipse-5.svg", alt: "Profile 5" },
  { src: "/ellipse-6.svg", alt: "Profile 6" },
];

const statistics = [
  { number: "10", label: "Years Of Experience" },
  { number: "2000", label: "Satisfied Clients" },
  { number: "100", label: "Countries Covered" },
];

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 px-4">
      <div className="max-w-[1630px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col gap-8">
            <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px]">
              We Are The Best
            </h2>

            <p className="[font-family:'Marmelad',Helvetica] font-normal text-neutral-100 text-6xl tracking-[0.60px] leading-[50px]">
              The Perfect Travel Place For You &amp; Your Family
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-1">
                {profileImages.map((image, index) => (
                  <img
                    key={index}
                    className="w-[67px] h-[67px] object-cover"
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
                <div className="w-[67px] h-[67px] bg-white rounded-[33.5px] border-[1.5px] border-solid border-[#ffd422]" />
              </div>

              <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-3xl tracking-[0.30px] leading-[25px]">
                60+
              </div>
            </div>

            <Separator className="w-[282px] h-0.5 bg-white" />

            <p className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px]">
              500k+ Happy Customer
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-full max-w-[470px] h-auto"
              alt="Decorative shape"
              src="/rectangle-8.svg"
            />
          </div>

          <div className="flex flex-col gap-8 items-end">
            <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl text-right tracking-[0] leading-[35px]">
              <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0] leading-[35px]">
                W
              </span>
              <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0] leading-[35px]">
                aiting for{" "}
              </span>
              <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0] leading-[35px]">
                A
              </span>
              <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0] leading-[35px]">
                dventures? don`t miss them
              </span>
            </h2>

            <p className="[font-family:'Marmelad',Helvetica] font-normal text-neutral-100 text-[25px] text-right tracking-[0.25px] leading-[30px]">
              We Believe That A Vacation Should Be More Than A Hotel Room, A
              Flight And A Rental Car. It Should Be More Than The Sum Of Its
              Parts.
            </p>

            <div className="flex flex-col gap-6 items-center w-full">
              <div className="flex justify-center gap-12">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-semibold text-[#f4f4f4] text-3xl text-center tracking-[0.30px] leading-[50px]">
                      {stat.number}
                    </span>
                    <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-[17px] text-center tracking-[0.17px] leading-[18px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="h-auto border-2 border-[#ffd422] bg-transparent rounded-[10px] px-12 py-6 hover:bg-[#ffd422]/10"
              >
                <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#f4f4f4] text-[28px] tracking-[0] leading-[25px]">
                  Explore More
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
