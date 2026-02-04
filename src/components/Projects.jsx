import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Employee Management Express JS",
    subtitle: "Backend CRUD API using Express.js",
    color: "from-green-500 to-green-400",
    logo: "https://img.icons8.com/color/96/nodejs.png",
    link: "https://github.com/AnjanaInda01/Employee-Management-Express-JS-project",
  },
  {
    title: "Handle API React",
    subtitle: "React frontend for API integration",
    color: "from-blue-600 to-blue-400",
    logo: "https://img.icons8.com/color/96/react-native.png",
    link: "https://github.com/AnjanaInda01/Handle-API-React",
  },
  {
    title: "Java EE Employee Management",
    subtitle: "Web app using Java EE",
    color: "from-red-600 to-red-400",
    logo: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
    link: "https://github.com/AnjanaInda01/Java-EE-Employee-Management-Project",
  },
  {
    title: "Java Simple FX",
    subtitle: "JavaFX Desktop Application",
    color: "from-indigo-600 to-indigo-400",
    logo: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
    link: "https://github.com/AnjanaInda01/Java-simple-FX-project",
  },
  {
    title: "NIC Checker React",
    subtitle: "NIC validation app",
    color: "from-yellow-500 to-yellow-300",
    logo: "https://img.icons8.com/color/96/react-native.png",
    link: "https://github.com/AnjanaInda01/NIC-Checker-React",
  },
  {
    title: "Online Dictionary React",
    subtitle: "Dictionary using public API",
    color: "from-purple-700 to-purple-500",
    logo: "https://img.icons8.com/color/96/react-native.png",
    link: "https://github.com/AnjanaInda01/online-dictionary-react",
  },
  {
    title: "Spring Boot Project",
    subtitle: "Spring Boot backend",
    color: "from-teal-600 to-teal-400",
    logo: "https://img.icons8.com/color/96/spring-logo.png",
    link: "https://github.com/AnjanaInda01/Spring-Boot-Project",
  },
  {
    title: "React Native App",
    subtitle: "Mobile application",
    color: "from-pink-500 to-pink-300",
    logo: "https://img.icons8.com/color/96/react-native.png",
    link: "https://github.com/AnjanaInda01/React-Native-App",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  // Detect screen size
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else {
        setCardsPerView(2); // tablet & desktop
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + cardsPerView) % projects.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - cardsPerView + projects.length) % projects.length,
    );
  };

  const visible = projects.slice(index, index + cardsPerView);

  if (visible.length < cardsPerView) {
    visible.push(...projects.slice(0, cardsPerView - visible.length));
  }

  return (
    <section id="works" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">My Works</h2>
          <p className="opacity-60">Projects I have built</p>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-3">
          {/* Left */}
          <button
            onClick={prev}
            className="p-2 rounded-full bg-gray-200 dark:bg-dark-card hover:bg-primary hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          {/* Cards */}
          <div className="flex overflow-hidden w-full gap-4">
            {visible.map((p, i) => (
              <motion.div
                key={index + i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-full rounded-2xl bg-gradient-to-br ${p.color} p-6 sm:p-8 shadow-xl flex flex-col justify-between`}
              >
                <div>
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="h-14 w-14 sm:h-16 sm:w-16 mb-4"
                  />

                  <h3 className="text-white text-xl sm:text-2xl font-bold">
                    {p.title}
                  </h3>

                  <p className="text-white/80 text-sm mt-1">{p.subtitle}</p>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mt-5 text-sm hover:underline"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right */}
          <button
            onClick={next}
            className="p-2 rounded-full bg-gray-200 dark:bg-dark-card hover:bg-primary hover:text-white transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
