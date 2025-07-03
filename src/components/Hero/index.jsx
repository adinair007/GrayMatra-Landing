import { Typewriter } from "react-simple-typewriter";
import { WebsiteCreation } from "../../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Empowering Your Digital Presence with{" "}
            <span className="text-saffron">
              <Typewriter
                words={["Gray Mātrā", "Innovation", "Excellence"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg">
            We craft cutting-edge native applications, robust software
            solutions, and responsive websites to elevate your digital presence.
          </p>
          <a
            href="#contact"
            className="inline-block bg-saffron text-gray-900 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-500 transition"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={WebsiteCreation}
            alt="Website Creation"
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
