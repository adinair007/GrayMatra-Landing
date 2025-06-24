import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:adityanair@graymatra.com?subject=Contact%20from%20GrayMatra%20Website&body=Name:%20${encodeURIComponent(
    name
  )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
    message
  )}`;

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-500 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Get in <span className="text-saffron">Touch</span>
        </h2>
        <p className="text-base sm:text-lg text-center mb-8">
          Ready to elevate your online presence? Contact us today!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full sm:w-1/2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full sm:w-1/2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full max-w-2xl h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <a
            href={mailtoLink}
            className="bg-saffron text-gray-900 dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-500 transition"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
