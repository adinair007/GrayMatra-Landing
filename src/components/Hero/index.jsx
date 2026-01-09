import { Typewriter } from "react-simple-typewriter";
import { useParallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { WebsiteCreation } from "../../assets";

const Hero = () => {
  const imageParallax =
    useParallax <
    HTMLDivElement >
    {
      speed: -10,
    };

  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave Layer 1 - Lightest */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-100">
          <svg
            className="absolute bottom-0 w-full h-auto"
            style={{ minHeight: "400px" }}
            viewBox="0 0 1440 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(254, 159, 6, 0.2)"
              d="M0,300 C240,350 480,250 720,300 C960,350 1200,250 1440,300 L1440,600 L0,600 Z"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M0,300 C240,350 480,250 720,300 C960,350 1200,250 1440,300 L1440,600 L0,600 Z;
                  M0,250 C240,300 480,200 720,250 C960,300 1200,200 1440,250 L1440,600 L0,600 Z;
                  M0,300 C240,350 480,250 720,300 C960,350 1200,250 1440,300 L1440,600 L0,600 Z
                "
              />
            </path>
          </svg>
        </div>

        {/* Wave Layer 2 - Medium */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-100">
          <svg
            className="absolute bottom-0 w-full h-auto"
            style={{ minHeight: "400px" }}
            viewBox="0 0 1440 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(254, 159, 6, 0.3)"
              d="M0,350 C240,400 480,300 720,350 C960,400 1200,300 1440,350 L1440,600 L0,600 Z"
            >
              <animate
                attributeName="d"
                dur="15s"
                repeatCount="indefinite"
                values="
                  M0,350 C240,400 480,300 720,350 C960,400 1200,300 1440,350 L1440,600 L0,600 Z;
                  M0,320 C240,270 480,370 720,320 C960,270 1200,370 1440,320 L1440,600 L0,600 Z;
                  M0,350 C240,400 480,300 720,350 C960,400 1200,300 1440,350 L1440,600 L0,600 Z
                "
              />
            </path>
          </svg>
        </div>

        {/* Wave Layer 3 - Darkest/Most visible */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-100">
          <svg
            className="absolute bottom-0 w-full h-auto"
            style={{ minHeight: "400px" }}
            viewBox="0 0 1440 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(254, 159, 6, 0.4)"
              d="M0,400 C240,450 480,350 720,400 C960,450 1200,350 1440,400 L1440,600 L0,600 Z"
            >
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
                  M0,400 C240,450 480,350 720,400 C960,450 1200,350 1440,400 L1440,600 L0,600 Z;
                  M0,380 C240,330 480,430 720,380 C960,330 1200,430 1440,380 L1440,600 L0,600 Z;
                  M0,400 C240,450 480,350 720,400 C960,450 1200,350 1440,400 L1440,600 L0,600 Z
                "
              />
            </path>
          </svg>
        </div>

        {/* Additional top waves for more coverage */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-100">
          <svg
            className="absolute bottom-0 w-full h-auto"
            style={{ minHeight: "400px" }}
            viewBox="0 0 1440 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(254, 159, 6, 0.15)"
              d="M0,200 C360,280 720,180 1080,240 C1260,270 1380,220 1440,240 L1440,600 L0,600 Z"
            >
              <animate
                attributeName="d"
                dur="25s"
                repeatCount="indefinite"
                values="
                  M0,200 C360,280 720,180 1080,240 C1260,270 1380,220 1440,240 L1440,600 L0,600 Z;
                  M0,240 C360,180 720,280 1080,200 C1260,170 1380,260 1440,200 L1440,600 L0,600 Z;
                  M0,200 C360,280 720,180 1080,240 C1260,270 1380,220 1440,240 L1440,600 L0,600 Z
                "
              />
            </path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
                delaySpeed={1500}
              />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg"
          >
            We craft cutting-edge native applications, robust software
            solutions, and responsive websites to elevate your digital presence.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            href="#contact"
            className="inline-block bg-saffron text-gray-900 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-500 transition"
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <div ref={imageParallax.ref}>
            <img
              src={WebsiteCreation}
              alt="Website Creation"
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
