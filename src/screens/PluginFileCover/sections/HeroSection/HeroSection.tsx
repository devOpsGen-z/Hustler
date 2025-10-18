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
  return (
    <section className="relative w-full h-[1337px]">
      <div className="absolute top-0 left-[calc(50.00%_-_47px)] w-[116px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffd422] text-3xl tracking-[0.30px] leading-[25px] whitespace-nowrap">
        <span className="tracking-[0.09px]">R</span>
        <span className="tracking-[0.09px]">easons</span>
      </div>

      <h2 className="absolute top-[93px] left-[calc(50.00%_-_379px)] w-[779px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-neutral-100 text-[65px] text-center tracking-[0.65px] leading-[60px]">
        FIVE REASONS WHY YOU SHOULD VISIT KERALA
      </h2>

      <img
        className="absolute top-[249px] left-[834px] w-0.5 h-[1020px]"
        alt="Timeline line"
        src="/line-2.svg"
      />

      {timelineItems.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={`absolute ${item.markerTop} left-[824px] w-[22px] h-[22px] bg-white rounded-[11px] border-[1.5px] border-solid border-[#002a28]`}
          />
          <p
            className={`absolute ${item.contentTop} ${item.contentLeft} ${item.contentWidth} text-[#ffffff99] ${item.textSize} ${item.side === "left" ? "text-right" : ""} tracking-[${item.textSize === "text-sm" ? "0.14px" : "0.15px"}] [font-family:'Marmelad',Helvetica] font-normal leading-[25px]`}
          >
            {item.text}
          </p>
        </React.Fragment>
      ))}

      {decorativeImages.map((image, index) => (
        <img
          key={index}
          className={`absolute ${image.top} ${image.left} ${image.width} ${image.height} ${image.objectFit}`}
          alt="Decorative image"
          src={image.src}
        />
      ))}
    </section>
  );
};
