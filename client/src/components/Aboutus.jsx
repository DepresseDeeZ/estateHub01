import { useEffect, useState } from "react";
import aboutImg from "../assets/about.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import CountUp from "react-countup";

const Aboutus = () => {
  const statistics = [
    { label: "Happy Clients", value: 12 },
    { label: "Different Cities", value: 3 },
    { label: "Projects Completed", value: 45 },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="max-padd-container py-16 xl:py-28">
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex-1 relative">
          <img
            src={aboutImg}
            alt="About"
            className="rounded-3xl rounded-tr-[155px] w-[488px]"
          />
          <div className="bg-white absolute bottom-16 left-16 max-w-xs p-4 rounded-lg flexCenter flex-col shadow-lg">
            <span className="relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full">
              <RiDoubleQuotesL className="text-2xl" />
            </span>
            <p className="text-center text-slate-700 relative bottom-3">
              Need a new place to call home? Estate Hub offers a wide range of
              rental properties to suit your needs.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center flex-col">
          <span className="medium-18 text-slate-700">
            Unveiling Our Journey
          </span>
          <h2 className="text-3xl font-bold text-slate-700">
            Our Commitment Crafting Extraordinary Real Estate Experience
          </h2>
          <p className="py-5 text-gray-600">
            At Estate Hub, we believe in creating exceptional real estate
            experiences. Our journey is driven by a commitment to understanding
            your needs and delivering solutions that exceed expectations.
            Whether you’re searching for a cozy rental or an expansive property,
            we are here to guide you every step of the way. Our team of
            dedicated professionals works tirelessly to offer a seamless and
            rewarding experience, helping you find the perfect place to call
            home. With a strong presence across multiple cities and a growing
            list of satisfied clients, we’re proud to be at the forefront of the
            real estate industry.
          </p>
          <div className="flex flex-wrap gap-4">
            {statistics.map((statistic, index) => (
              <div
                key={index}
                className="bg-primary p-4 rounded-lg  text-slate-700"
              >
                <div className="flex items-center gap-1">
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={10}
                    delay={3}
                  >
                    {({ countUpRef }) => (
                      <h3
                        ref={countUpRef}
                        className="text-2xl font-semibold"
                      ></h3>
                    )}
                  </CountUp>
                  <h4 className="font-bold text-2xl">k+</h4>
                </div>
                <p className=" text-slate-700">{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
