import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import myProfile from "../assets/my_profile.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 md:pt-24 pb-16 px-4 sm:px-6 dot-pattern"
    >
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px] gap-8 items-center">
          {/* LEFT SIDEBAR – DESKTOP */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                About
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Full Stack Developer & DevOps Engineer experienced in building
                scalable web applications, designing clean APIs, and deploying
                production systems using AWS, Docker, and CI/CD pipelines.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                Frontend
              </h3>
              <p className="text-sm opacity-70">
                React, Tailwind CSS, responsive UI, modern animations.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                Backend
              </h3>
              <p className="text-sm opacity-70">
                REST APIs, Databases, Authentication, Scalable architecture.
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                DevOps
              </h3>
              <p className="text-sm opacity-70">
                AWS, Docker, CI/CD, GitHub Actions, Linux.
              </p>
            </div>
          </motion.div>

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* TITLE */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                Hi, I’m Anjana
              </h1>
              <p className="text-base sm:text-lg md:text-xl mt-1">
                Full Stack <span>Developer</span> & <span>DevOps Engineer</span>
              </p>
            </div>

            {/* PROFILE IMAGE */}
            <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-purple-600 rounded-full blur-2xl opacity-40" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 dark:border-gray-800 light:border-gray-300">
                <img
                  src={myProfile}
                  alt="Anjana Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/AnjanaInda01"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/anjana-induranga-b39334312/"
                className="p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:anjanananayakkara1212@gmail.com"
                className="p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* MOBILE ABOUT */}
            <div className="lg:hidden mt-6 max-w-md text-center">
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                About Me
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                I’m a Full Stack Developer & DevOps Engineer building scalable,
                high-performance applications and deploying them using AWS,
                Docker, and automated CI/CD pipelines.
              </p>
            </div>

            {/* MOBILE STACK */}
            <div className="lg:hidden mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
              {[
                "React",
                "Node.js",
                "AWS",
                "CI/CD",
                "Docker",
                "GitHub Actions",
              ].map((tech) => (
                <div
                  key={tech}
                  className="py-2 rounded-xl dark:bg-dark-card light:bg-light-card text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR – DESKTOP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                Focus Areas
              </h3>
              <p className="text-sm opacity-70">Full Stack Development</p>
              <p className="text-sm opacity-70">DevOps & Cloud</p>
              <p className="text-sm opacity-70">System Design</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                Cloud
              </h3>
              <p className="text-sm opacity-70">AWS (EC2, S3, IAM)</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider opacity-50 mb-2">
                Automation
              </h3>
              <p className="text-sm opacity-70">CI/CD • GitHub Actions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
