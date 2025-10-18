import React from "react";

const timelineItems = [
  {
    side: "left",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    textSize: "text-[15px]",
    markerTop: "top-[340px]",
    contentTop: "top-80",
    contentLeft: "left-[396px]",
    contentWidth: "w-[406px]",
  },
  {
    side: "right",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. lorem Ipsum Dolor Sit Amet,",
    textSize: "text-[15px]",
    markerTop: "top-[532px]",
    contentTop: "top-[512px]",
    contentLeft: "left-[868px]",
    contentWidth: "w-[272px]",
  },
  {
    side: "right",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    textSize: "text-sm",
    markerTop: "top-[724px]",
    contentTop: "top-[696px]",
    contentLeft: "left-[868px]",
    contentWidth: "w-[273px]",
  },
  {
    side: "left",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    textSize: "text-sm",
    markerTop: "top-[919px]",
    contentTop: "top-[895px]",
    contentLeft: "left-[411px]",
    contentWidth: "w-[383px]",
  },
  {
    side: "right",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
    textSize: "text-sm",
    markerTop: "top-[1114px]",
    contentTop: "top-[1067px]",
    contentLeft: "left-[868px]",
    contentWidth: "w-[423px]",
  },
];

const decorativeImages = [
  {
    top: "top-80",
    left: "left-0",
    width: "w-[494px]",
    height: "h-[494px]",
    src: "/rectangle-11.svg",
    objectFit: "object-cover",
  },
  {
    top: "top-[181px]",
    left: "left-[1138px]",
    width: "w-[494px]",
    height: "h-[494px]",
    src: "/rectangle-21.svg",
    objectFit: "",
  },
  {
    top: "top-[428px]",
    left: "left-[291px]",
    width: "w-[318px]",
    height: "h-[318px]",
    src: "/rectangle-20.svg",
    objectFit: "",
  },
  {
    top: "top-[786px]",
    left: "left-[900px]",
    width: "w-[210px]",
    height: "h-[209px]",
    src: "/rectangle-23.svg",
    objectFit: "object-cover",
  },
  {
    top: "top-[1114px]",
    left: "left-[642px]",
    width: "w-[186px]",
    height: "h-[186px]",
    src: "/rectangle-27.svg",
    objectFit: "",
  },
  {
    top: "top-[759px]",
    left: "left-[1023px]",
    width: "w-[209px]",
    height: "h-[216px]",
    src: "/rectangle-24.svg",
    objectFit: "",
  },
  {
    top: "top-[1151px]",
    left: "left-[745px]",
    width: "w-[186px]",
    height: "h-[186px]",
    src: "/rectangle-28.svg",
    objectFit: "",
  },
  {
    top: "top-[875px]",
    left: "left-[118px]",
    width: "w-[198px]",
    height: "h-[199px]",
    src: "/rectangle-26.svg",
    objectFit: "",
  },
  {
    top: "top-[289px]",
    left: "left-[1023px]",
    width: "w-[318px]",
    height: "h-[318px]",
    src: "/rectangle-22.svg",
    objectFit: "",
  },
  {
    top: "top-[821px]",
    left: "left-[223px]",
    width: "w-[197px]",
    height: "h-[198px]",
    src: "/rectangle-25.svg",
    objectFit: "",
  },
];

export const HeroSection = (): JSX.Element => {
  const reasons = [
    {
      title: "Natural Beauty",
      description: "Experience breathtaking landscapes, lush greenery, pristine beaches, and serene backwaters that make Kerala a paradise on earth.",
      image: "/rectangle-11.svg",
    },
    {
      title: "Rich Culture",
      description: "Immerse yourself in Kerala's vibrant traditions, classical dance forms, festivals, and warm hospitality that welcomes you home.",
      image: "/rectangle-21.svg",
    },
    {
      title: "Ayurvedic Wellness",
      description: "Rejuvenate your body and soul with authentic Ayurvedic treatments and wellness therapies in the birthplace of this ancient healing tradition.",
      image: "/rectangle-20.svg",
    },
    {
      title: "Wildlife & Nature",
      description: "Explore diverse ecosystems, spot exotic wildlife in national parks, and witness the harmony between nature and civilization.",
      image: "/rectangle-23.svg",
    },
    {
      title: "Culinary Delights",
      description: "Savor the unique flavors of Kerala cuisine with its perfect blend of spices, fresh seafood, and traditional recipes passed down through generations.",
      image: "/rectangle-27.svg",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-2xl md:text-3xl tracking-[0.30px] leading-[25px]">
            Reasons
          </div>
        </div>

        <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-2xl md:text-4xl lg:text-[65px] text-center tracking-[0.65px] leading-tight md:leading-[60px] mb-12 md:mb-16">
          FIVE REASONS WHY YOU SHOULD VISIT KERALA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl hover:shadow-[#ffd422]/20 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  className="w-full h-[300px] md:h-[400px] object-cover"
                  alt={reason.title}
                  src={reason.image}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-[#ffd422] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] mb-4">
                    {reason.title}
                  </h3>
                  <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-sm md:text-base tracking-[0.15px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
              <div className="absolute -inset-2 border-2 border-[#ffd422] rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
