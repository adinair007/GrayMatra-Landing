import { useState, useEffect } from "react";
import { Navbar, Hero, Services, About, Contact, Footer } from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // console.log("Initial theme from localStorage:", savedTheme); // Debug
    return savedTheme === "dark" ? true : false;
  });

  useEffect(() => {
    // console.log("isDarkMode changed:", isDarkMode); // Debug
    document.documentElement.classList.remove("dark");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
