import { Collaboration } from "../../assets";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-gray-500 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src={Collaboration}
            alt="Team Collaboration"
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-saffron">Gray Mātrā</span>
          </h2>
          <p className="text-base sm:text-lg">
            Gray Mātrā is dedicated to transforming your digital vision into
            reality. With a passion for innovation and expertise in web
            development, we deliver solutions that drive results. Our team
            combines creativity and technology to build websites that stand out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
