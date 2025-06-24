import { CodingInterface, ResponsiveDesign, SEOOptimization, TechSupport } from '../../assets';

const Services = () => {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'Tailored websites built with modern technologies to meet your unique needs.',
      image: CodingInterface,
      alt: 'Coding Interface',
    },
    {
      title: 'Responsive Design',
      description: 'Seamless user experiences across all devices, from mobile to desktop.',
      image: ResponsiveDesign,
      alt: 'Responsive Mockups',
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your visibility with search engine-optimized websites.',
      image: SEOOptimization,
      alt: 'SEO Analytics',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support to keep your website secure and up-to-date.',
      image: TechSupport,
      alt: 'Support Team',
    },
  ];

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-500 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Our <span className="text-saffron">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-saffron hover:text-white transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base group-hover:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;