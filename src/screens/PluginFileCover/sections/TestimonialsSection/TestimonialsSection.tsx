import React from "react";
import { Separator } from "../../../../components/ui/separator";

const features = [
  {
    title: "Quality Service",
    description:
      "We provide exceptional service with attention to every detail, ensuring your journey is comfortable, safe, and memorable from start to finish.",
    icon: "⭐",
  },
  {
    title: "Expert Guides",
    description:
      "Our certified local guides have extensive knowledge of Kerala's culture, history, and hidden gems, bringing each destination to life.",
    icon: "🎓",
  },
  {
    title: "Great Value",
    description:
      "Competitive prices without compromising on quality. We offer the best experiences at the most reasonable rates with transparent pricing.",
    icon: "💎",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 md:py-20 px-4">
      <div className="flex flex-col items-center gap-6 md:gap-8 max-w-7xl mx-auto">
        <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] text-center">
          Why Us
        </div>

        <h2 className="max-w-full md:max-w-[639px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-3xl md:text-5xl lg:text-[65px] text-center tracking-[0.65px] leading-tight md:leading-[60px]">
          REASONS WHY YOU SHOULD CHOOSE US
        </h2>

        <div className="relative w-full mt-8 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#ffd422] rounded-full mb-6 text-4xl md:text-5xl shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-xl md:text-[25px] tracking-[0.25px] leading-tight mb-4 md:mb-6">
                  {feature.title}
                </h3>
                <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-sm md:text-base tracking-[0.13px] leading-relaxed md:leading-[25px] max-w-[350px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
