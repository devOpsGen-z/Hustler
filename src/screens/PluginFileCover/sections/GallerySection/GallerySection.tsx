import React from "react";

const teamMembers = [
  {
    name: "ARTEMIY LEVONOV",
    role: "CHIEF INSTRUCTOR\nTOUR GUIDE",
    image: "/rectangle-72.svg",
  },
  {
    name: "EVELINE MORTAK",
    role: "INSTRUCTOR\nTOUR GUIDE",
    image: "/rectangle-71.svg",
  },
  {
    name: "ALEKSANDRA VISOTSKA",
    role: "TOUR GUIDE",
    image: "/rectangle-69.svg",
  },
  {
    name: "JAYSON MANYER",
    role: "TOUR GUIDE\nDRIVER",
    image: "/rectangle-70.svg",
  },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-[65px] text-center tracking-[0.65px] leading-[60px] mb-8">
          THE BEST TEAM ON YOUR JOURNEY
        </h1>

        <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-3xl tracking-[0.30px] leading-[25px] text-center mb-6">
          OUR TEAM
        </h2>

        <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-[15px] text-center tracking-[0.15px] leading-[25px] max-w-[513px] mx-auto mb-16">
          Our Pridel We Are Happy To Create For You An Unforgettable Adventure
          That You Will Remember For A Lifetime
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="border-2 border-solid border-[#ffcd00] w-[283px] h-[401px] absolute top-2 left-2" />
                <img
                  className="w-[279px] h-[397px] object-cover relative"
                  alt={member.name}
                  src={member.image}
                />
              </div>

              <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-xl tracking-[0.20px] leading-[25px] text-center mb-2">
                {member.name}
              </h3>

              <p className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-[13px] tracking-[0.13px] leading-[15px] text-center whitespace-pre-line">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
