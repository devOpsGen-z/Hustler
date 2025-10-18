import React from "react";
import { Separator } from "../../../../components/ui/separator";

const features = [
  {
    title: "Safety First",
    description:
      "All Our Guides And Trek Leaders Have Been Trained By Medical Specialists In Handling Altitude Illness And Are Proficient In First.",
  },
  {
    title: "Trek Experts",
    description:
      "All Our Guides Are Certified Local Tour Guides And Trained In-house On Intrepid Safety Policies. Guide Also Receives Intrepid Training.",
  },
  {
    title: "Rainforest Alliance",
    description:
      "We Have The Tick Of Approval Indicating That We Meet And Operate At The Highest Standards In Environmental.",
  },
  {
    title: "Local Matters",
    description:
      "Our Team Members Live And Work In The Andean Region, Which Means Revenue From All Our Treks Benefit The Local Economy.",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20">
      <div className="flex flex-col items-center gap-8 px-4">
        <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-3xl tracking-[0.30px] leading-[25px]">
          <span className="tracking-[0.09px]">W</span>
          <span className="tracking-[0.09px]">hy </span>
          <span className="tracking-[0.09px]">U</span>
          <span className="tracking-[0.09px]">s</span>
        </div>

        <h2 className="max-w-[639px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-[65px] text-center tracking-[0.65px] leading-[60px]">
          REASONS WHY YOU SHOULD CHOOSE US
        </h2>

        <div className="relative w-full max-w-[1644px] mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center px-6 lg:px-8">
                  <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-[25px] text-center tracking-[0.25px] leading-10 mb-6">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-[13px] tracking-[0.13px] leading-[25px] text-center max-w-[287px]">
                    {feature.description}
                  </p>
                </div>
                {index < features.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="hidden lg:block h-[207px] self-center bg-white/20"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative w-full mt-16">
          <img
            className="w-full h-[331px] object-cover"
            alt="Rectangle"
            src="/rectangle-67.svg"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-60 h-[57px] bg-white rounded-[5px]" />
              <div className="absolute -top-[21px] -left-[25px] w-[289px] h-[102px] rounded-[5px] border-[2.5px] border-solid border-[#ffd422]" />
              <div className="absolute top-[8px] left-[39px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#002a28] text-xl text-center tracking-[0.20px] leading-10 whitespace-nowrap">
                TRAVEL TOGETHER
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
