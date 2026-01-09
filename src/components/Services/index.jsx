import {
  CodingInterface,
  ResponsiveDesign,
  NativeApps,
  TechSupport,
} from "../../assets";
import Vortex from "../Vortex"

const Services = () => {
  const services = [
    {
      title: "Native Application Development",
      description:
        "High-performance native mobile apps for iOS and Android, tailored to your business needs.",
      image: NativeApps,
      alt: "Native App Development",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions to optimize workflows and enhance business scalability.",
      image: CodingInterface,
      alt: "Software Development",
    },
    {
      title: "Website Development",
      description:
        "Responsive, user-centric websites designed to engage and convert your audience.",
      image: ResponsiveDesign,
      alt: "Website Development",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing support to ensure your apps, software, and websites remain secure and up-to-date.",
      image: TechSupport,
      alt: "Support Team",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Vortex Background */}
      <Vortex className="absolute inset-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Our <span className="text-saffron">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-saffron hover:text-white transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base group-hover:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
