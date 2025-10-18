import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const categories = [
  {
    title: "Adventure",
    tours: "12 Tours",
    price: "$150",
    icon: "/traveler.png",
    bgClass: "bg-white",
    textColor: "text-black",
    priceFromColor: "text-[#7b7b7b]",
  },
  {
    title: "Beaches",
    tours: "9 Tours",
    price: "$150",
    icon: "/beach-umbrella.png",
    bgClass: "bg-white",
    textColor: "text-black",
    priceFromColor: "text-[#7b7b7b]",
  },
  {
    title: "Boat Tours",
    tours: "7 Tours",
    price: "$150",
    icon: "/kayaking.png",
    bgClass: "bg-white",
    textColor: "text-black",
    priceFromColor: "text-[#7b7b7b]",
  },
  {
    title: "City Tours",
    tours: "5 Tours",
    price: "$150",
    icon: "/city-buildings.png",
    bgClass: "bg-[url('/rectangle-52.svg')] bg-cover",
    textColor: "text-white",
    priceFromColor: "text-[#d9d9d9]",
  },
  {
    title: "Food",
    tours: "10 Tours",
    price: "$150",
    icon: "/meal.png",
    bgClass: "bg-white",
    textColor: "text-black",
    priceFromColor: "text-[#7b7b7b]",
  },
  {
    title: "Hiking",
    tours: "7 Tours",
    price: "$150",
    icon: "/hiking.svg",
    bgClass: "bg-white",
    textColor: "text-black",
    priceFromColor: "text-[#7b7b7b]",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px] mb-6">
            Browse By Category
          </h3>
          <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-[65px] tracking-[0.65px] leading-[60px]">
            FIND INSPIRATION FOR
            <br />
            YOUR NEXT TRIP
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`${category.bgClass} rounded-[5px] border-[6px] border-solid border-[#ffd422] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <CardContent className="p-6 flex flex-col items-center h-[368px]">
                <div className="w-[70px] h-[70px] mb-8 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    alt={category.title}
                    src={category.icon}
                  />
                </div>

                <h4
                  className={`[font-family:'Palanquin_Dark',Helvetica] font-normal ${category.textColor} text-3xl text-center tracking-[0.30px] leading-[60px] mb-0`}
                >
                  {category.title}
                </h4>

                <p className="[font-family:'Marmelad',Helvetica] font-normal text-black text-[15px] text-center tracking-[0.15px] leading-[60px] mb-0">
                  {category.tours}
                </p>

                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`[font-family:'Palanquin_Dark',Helvetica] font-normal ${category.priceFromColor} text-2xl text-center tracking-[0.24px] leading-[60px]`}
                  >
                    from
                  </span>
                  <span className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#eebf00] text-2xl text-center tracking-[0.24px] leading-[60px]">
                    {category.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <img className="w-[70px] h-[92px]" alt="Vector" src="/vector.svg" />
        </div>
      </div>
    </section>
  );
};
