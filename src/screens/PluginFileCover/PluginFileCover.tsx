import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FeaturedDestinationsSection } from "./sections/FeaturedDestinationsSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TopAttractionsSection } from "./sections/TopAttractionsSection";
import { TravelTipsSection } from "./sections/TravelTipsSection";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destination", href: "#destination" },
  { label: "Gallery", href: "#gallery" },
];

const faqItems = [
  {
    question: "How Do I Place An Order?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What Payment Methods Do You Accept?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What Is Your Cancellation Policy?",
    answer:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam.",
    isOpen: true,
  },
  {
    question: "How Do I Contact Customer Support?",
    answer: "",
    isOpen: false,
  },
  {
    question: "What Is Your Privacy Policy?",
    answer: "",
    isOpen: false,
  },
];

const footerLinks = [
  { label: "Home", href: "#", isActive: true },
  { label: "About Us", href: "#about", isActive: false },
  { label: "Destination", href: "#destination", isActive: false },
  { label: "Exclusive Tour", href: "#tour", isActive: false },
  { label: "Reviews", href: "#reviews", isActive: false },
  { label: "FAQS", href: "#faqs", isActive: false },
];

export const PluginFileCover = (): JSX.Element => {
  return (
    <div className="bg-[#002a27] overflow-hidden w-full relative">
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-[120px]">
        <img
          className="absolute top-0 left-0 w-full h-[120px]"
          alt="Rectangle"
          src="/rectangle-2.svg"
        />
        <img
          className="absolute top-0 left-[34px] w-48 h-[153px] object-cover"
          alt="Whatsapp image"
          src="/whatsapp-image-2025-10-14-at-21-46-18-bce44a21-removebg-preview-.png"
        />
        <nav className="absolute top-[31px] left-1/2 -translate-x-1/2 flex items-center gap-[23px]">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="[font-family:'Marmelad',Helvetica] font-normal text-white text-xl tracking-[0.20px] leading-[25px] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-[513px]">
            <img
              className="w-[35px] h-[35px] object-cover"
              alt="Facebook"
              src="/facebook.png"
            />
            <img
              className="w-[35px] h-[35px] object-cover"
              alt="Instagram"
              src="/instagram-1.png"
            />
          </div>
          <Button className="h-[62px] w-[227px] bg-[#ffd422] rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-[28px] tracking-[0] leading-[25px]">
            Contact Us
          </Button>
        </nav>
      </header>

      <section className="relative w-full min-h-[957px]">
        <img
          className="absolute top-0 left-0 w-full h-[957px] object-cover"
          alt="Rectangle"
          src="/rectangle-10.png"
        />
        <img
          className="absolute top-0 left-[3px] w-full h-[957px] object-cover"
          alt="Rectangle"
          src="/rectangle-10.png"
        />
        <img
          className="absolute top-[454px] right-[171px] w-12 h-12"
          alt="Arrow up circle"
          src="/arrow-up-circle.svg"
        />
        <img
          className="absolute top-[454px] left-[82px] w-12 h-12"
          alt="Arrow up circle"
          src="/arrow-up-circle-1.svg"
        />
        <div className="absolute top-[305px] left-1/2 -translate-x-1/2 w-[321px] [font-family:'WindSong',Helvetica] font-normal text-white text-[45px] tracking-[0.45px] leading-[25px] text-center">
          Amazing Tour
        </div>
        <div className="absolute top-[375px] left-1/2 -translate-x-1/2 w-[838px] [font-family:'Righteous',Helvetica] font-normal text-white text-[200px] tracking-[2.00px] leading-[25px] text-center">
          KERALA
        </div>
        <div className="absolute top-[539px] left-1/2 -translate-x-1/2 w-[566px] [font-family:'Marmelad',Helvetica] font-normal text-white text-xl tracking-[0.20px] leading-[25px] whitespace-nowrap text-center">
          &quot; Beyond The Horizon, Into The Wild. Live The Adventure.&quot;
        </div>
        <Button className="absolute top-[593px] left-1/2 -translate-x-1/2 w-[287px] h-[70px] bg-[#ffd422] rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-[28px] tracking-[0] leading-[25px]">
          Book A Tour
        </Button>
      </section>

      <ServicesSection />

      <section className="relative w-full flex justify-center py-8">
        <Button className="w-[287px] h-[70px] bg-[#ffd422] rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-[28px] tracking-[0] leading-[25px]">
          Explore More
        </Button>
      </section>

      <FeaturedDestinationsSection />

      <AboutUsSection />

      <TopAttractionsSection />

      <TestimonialsSection />

      <TravelTipsSection />

      <GallerySection />

      <section className="relative w-full py-20">
        <div className="flex flex-col items-center">
          <div className="w-[131px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-3xl tracking-[0.30px] leading-[25px] whitespace-nowrap text-center mb-[71px]">
            ACTUALS
          </div>
          <div className="w-[164px] [font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-6xl text-center tracking-[0.60px] leading-[60px] whitespace-nowrap mb-[129px]">
            Faqs
          </div>
          <div className="w-full max-w-[1086px] px-4">
            {faqItems.map((item, index) => (
              <div key={index}>
                <img
                  className="w-full h-0.5 mb-[52px]"
                  alt="Line"
                  src="/line-11.svg"
                />
                <div className="flex items-start justify-between mb-[56px]">
                  <div className="flex-1">
                    <div className="[font-family:'Marmelad',Helvetica] font-normal text-white text-[35px] tracking-[0.35px] leading-[25px] whitespace-nowrap">
                      {item.question}
                    </div>
                    {item.isOpen && item.answer && (
                      <div className="mt-[68px] w-[600px] [font-family:'Marmelad',Helvetica] font-normal text-white text-xl tracking-[0.20px] leading-[25px]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                  {item.isOpen ? (
                    <MinusIcon className="w-12 h-12 text-white flex-shrink-0" />
                  ) : (
                    <PlusIcon className="w-12 h-12 text-white flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
            <img className="w-full h-0.5" alt="Line" src="/line-11.svg" />
          </div>
        </div>
      </section>

      <footer className="relative w-full">
        <img
          className="absolute top-0 left-0 w-full h-[822px]"
          alt="Beautiful volcano"
          src="/beautiful-volcano-landscape-1.png"
        />
        <div className="relative z-10 flex flex-col items-center pt-[48px]">
          <div className="flex items-center gap-3 mb-[25px]">
            <img
              className="w-[74px] h-[74px] object-cover"
              alt="Suitcase"
              src="/suitcase-1.png"
            />
            <div className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-[28px] tracking-[0.28px] leading-[25px]">
              Urban
              <br />
              Explorers
            </div>
          </div>
          <div className="w-[461px] [font-family:'Marmelad',Helvetica] font-normal text-white text-xl text-center tracking-[0.20px] leading-[25px] mb-[127px]">
            Discover the World with Urban Explorers Your Ultimate Travel
            Companion!
          </div>
          <img
            className="w-[1441px] h-0.5 mb-[101px]"
            alt="Line"
            src="/line-12.svg"
          />
          <nav className="flex items-center gap-[87px] mb-[188px]">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`[font-family:'Palanquin_Dark',Helvetica] font-normal text-xl text-center tracking-[0.20px] leading-[25px] whitespace-nowrap ${
                  link.isActive ? "text-[#ffd422]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between w-full max-w-[1826px] px-[94px] mb-[197px]">
            <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xl text-center tracking-[0.20px] leading-[25px] whitespace-nowrap">
              Phone: +1-123-456-7890
            </div>
            <div className="flex items-center gap-[150px]">
              <img
                className="w-10 h-10 object-cover"
                alt="Instagram"
                src="/instagram.png"
              />
              <img
                className="w-[35px] h-[35px] object-cover"
                alt="Facebook logo in"
                src="/facebook-logo-in-circular-shape.png"
              />
              <img
                className="w-[35px] h-[35px] object-cover"
                alt="Twitter"
                src="/twitter.png"
              />
            </div>
            <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xl text-center tracking-[0.20px] leading-[25px] whitespace-nowrap">
              Email: info@FLYFLYgency.com
            </div>
          </div>
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-xl text-center tracking-[0.20px] leading-[25px] whitespace-nowrap pb-[67px]">
            all rights reserved © 2023
          </div>
        </div>
      </footer>

      <ContactUsSection />
      <HeroSection />
      <FooterSection />
    </div>
  );
};
