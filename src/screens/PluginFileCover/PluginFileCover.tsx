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
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-auto md:h-[120px] bg-[#002a27]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
          alt="Rectangle"
          src="/rectangle-2.svg"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-0">
            <img
              className="w-32 md:w-48 h-auto md:h-[153px] object-contain mb-4 md:mb-0"
              alt="Logo"
              src="/whatsapp-image-2025-10-14-at-21-46-18-bce44a21-removebg-preview-.png"
            />

            <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-4 md:mb-0">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Marmelad',Helvetica] font-normal text-white text-sm md:text-xl tracking-[0.20px] leading-[25px] hover:text-[#ffd422] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
              <img
                className="w-[25px] md:w-[35px] h-[25px] md:h-[35px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                alt="Facebook"
                src="/facebook.png"
              />
              <img
                className="w-[25px] md:w-[35px] h-[25px] md:h-[35px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                alt="Instagram"
                src="/instagram-1.png"
              />
              <Button className="h-[50px] md:h-[62px] w-[180px] md:w-[227px] bg-[#ffd422] hover:bg-[#ffd422]/90 rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-xl md:text-[28px] tracking-[0] leading-[25px]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative w-full min-h-[100vh] md:min-h-[957px] flex items-center justify-center pt-20 md:pt-0">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Hero background"
          src="/rectangle-10.png"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-4">
          <div className="[font-family:'WindSong',Helvetica] font-normal text-white text-2xl md:text-[45px] tracking-[0.45px] leading-[25px] mb-4 md:mb-8">
            Welcome to God's Own Country
          </div>
          <h1 className="[font-family:'Righteous',Helvetica] font-normal text-white text-6xl md:text-[120px] lg:text-[200px] tracking-[2.00px] leading-tight mb-4 md:mb-8">
            KERALA
          </h1>
          <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-base md:text-xl tracking-[0.20px] leading-[25px] mb-6 md:mb-8 max-w-[566px] mx-auto">
            Discover Nature, Culture, and Serenity
          </p>
          <Button className="w-[240px] md:w-[287px] h-[60px] md:h-[70px] bg-[#ffd422] hover:bg-[#ffd422]/90 rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-2xl md:text-[28px] tracking-[0] leading-[25px]">
            Book a Tour
          </Button>
        </div>
      </section>

      <ServicesSection />

      <section className="relative w-full flex justify-center py-8 md:py-12 px-4">
        <Button className="w-[240px] md:w-[287px] h-[60px] md:h-[70px] bg-[#ffd422] hover:bg-[#ffd422]/90 rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-2xl md:text-[28px] tracking-[0] leading-[25px]">
          Explore More
        </Button>
      </section>

      <section className="relative w-full py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-3xl md:text-[65px] tracking-[0.65px] leading-tight mb-8 md:mb-12">
            THE PERFECT TRAVEL PLACE FOR YOU & YOUR FAMILY
          </h2>
          <div className="w-48 h-48 md:w-60 md:h-60 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#ffd422]">
            <img
              className="w-full h-full object-cover"
              alt="Travel van"
              src="/rectangle-7.png"
            />
          </div>
          <p className="[font-family:'Marmelad',Helvetica] font-normal text-white text-base md:text-xl tracking-[0.20px] leading-[25px] mb-8 max-w-2xl mx-auto">
            Experience comfort, safety, and unforgettable memories with our carefully curated travel packages designed for families.
          </p>
          <Button className="w-[240px] md:w-[287px] h-[60px] md:h-[70px] bg-[#ffd422] hover:bg-[#ffd422]/90 rounded-[10px] [font-family:'Palanquin_Dark',Helvetica] font-normal text-[#3f3f44] text-2xl md:text-[28px] tracking-[0] leading-[25px]">
            Explore Tour
          </Button>
        </div>
      </section>

      <HeroSection />

      <FeaturedDestinationsSection />

      <AboutUsSection />

      <TopAttractionsSection />

      <TestimonialsSection />

      <TravelTipsSection />

      <GallerySection />

      <section className="relative w-full py-12 md:py-20 px-4">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-[#ffcd00] text-2xl md:text-3xl tracking-[0.30px] leading-[25px] text-center mb-8 md:mb-[71px]">
            ACTUALS
          </div>
          <div className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-4xl md:text-6xl text-center tracking-[0.60px] leading-[60px] mb-12 md:mb-[129px]">
            FAQs
          </div>
          <div className="w-full">
            {faqItems.map((item, index) => (
              <div key={index}>
                <div className="w-full h-0.5 bg-white/20 mb-8 md:mb-[52px]" />
                <div className="flex flex-col md:flex-row items-start justify-between mb-8 md:mb-[56px] gap-4">
                  <div className="flex-1 w-full">
                    <div className="[font-family:'Marmelad',Helvetica] font-normal text-white text-xl md:text-[35px] tracking-[0.35px] leading-tight md:leading-[25px] break-words">
                      {item.question}
                    </div>
                    {item.isOpen && item.answer && (
                      <div className="mt-6 md:mt-[68px] max-w-full md:max-w-[600px] [font-family:'Marmelad',Helvetica] font-normal text-white text-base md:text-xl tracking-[0.20px] leading-[25px]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                  {item.isOpen ? (
                    <MinusIcon className="w-8 h-8 md:w-12 md:h-12 text-white flex-shrink-0" />
                  ) : (
                    <PlusIcon className="w-8 h-8 md:w-12 md:h-12 text-white flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
            <div className="w-full h-0.5 bg-white/20" />
          </div>
        </div>
      </section>

      <footer className="relative w-full min-h-[600px] md:min-h-[822px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Beautiful volcano"
          src="/beautiful-volcano-landscape-1.png"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center px-4 py-12 md:pt-[48px]">
          <div className="flex items-center gap-3 mb-6 md:mb-[25px]">
            <img
              className="w-12 md:w-[74px] h-12 md:h-[74px] object-cover"
              alt="Suitcase"
              src="/suitcase-1.png"
            />
            <div className="[font-family:'Palanquin_Dark',Helvetica] font-medium text-white text-xl md:text-[28px] tracking-[0.28px] leading-[25px]">
              Kerala
              <br />
              Tours
            </div>
          </div>
          <div className="max-w-[461px] [font-family:'Marmelad',Helvetica] font-normal text-white text-base md:text-xl text-center tracking-[0.20px] leading-[25px] mb-12 md:mb-[127px]">
            Discover the World with Kerala Tours - Your Ultimate Travel Companion!
          </div>
          <div className="w-full max-w-[1441px] h-0.5 bg-white/30 mb-8 md:mb-[101px]" />

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-[87px] mb-12 md:mb-[188px]">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`[font-family:'Palanquin_Dark',Helvetica] font-normal text-base md:text-xl text-center tracking-[0.20px] leading-[25px] hover:text-[#ffd422] transition-colors ${
                  link.isActive ? "text-[#ffd422]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1826px] gap-8 md:gap-0 md:px-[94px] mb-12 md:mb-[197px]">
            <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-base md:text-xl text-center tracking-[0.20px] leading-[25px]">
              Phone: +1-123-456-7890
            </div>
            <div className="flex items-center gap-8 md:gap-[150px]">
              <img
                className="w-8 md:w-10 h-8 md:h-10 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                alt="Instagram"
                src="/instagram.png"
              />
              <img
                className="w-7 md:w-[35px] h-7 md:h-[35px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                alt="Facebook"
                src="/facebook-logo-in-circular-shape.png"
              />
              <img
                className="w-7 md:w-[35px] h-7 md:h-[35px] object-cover cursor-pointer hover:opacity-80 transition-opacity"
                alt="YouTube"
                src="/twitter.png"
              />
            </div>
            <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-base md:text-xl text-center tracking-[0.20px] leading-[25px]">
              Email: info@keralatours.com
            </div>
          </div>

          <div className="[font-family:'Palanquin_Dark',Helvetica] font-normal text-white text-base md:text-xl text-center tracking-[0.20px] leading-[25px] pb-8 md:pb-[67px]">
            © 2025 Kerala Tours. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
