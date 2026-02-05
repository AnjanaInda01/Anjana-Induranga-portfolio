import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "mdi:react", color: "bg-blue-500" },
      { name: "Tailwind CSS", icon: "mdi:tailwind", color: "bg-cyan-500" },
      { name: "HTML5", icon: "mdi:language-html5", color: "bg-orange-500" },
      { name: "CSS3", icon: "mdi:language-css3", color: "bg-blue-600" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "mdi:nodejs", color: "bg-green-600" },
      {
        name: "Express.js",
        icon: "simple-icons:express",
        color: "bg-gray-700",
      },
      {
        name: "Spring Boot",
        icon: "simple-icons:springboot",
        color: "bg-green-700",
      },
      { name: "Java EE", icon: "mdi:language-java", color: "bg-red-600" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "mdi:language-javascript",
        color: "bg-yellow-500",
      },
      { name: "Java", icon: "mdi:language-java", color: "bg-red-500" },
      { name: "Dart", icon: "simple-icons:dart", color: "bg-blue-400" },
      { name: "Flutter", icon: "simple-icons:flutter", color: "bg-cyan-600" },
    ],
  },
  {
    title: "Databases & APIs",
    skills: [
      { name: "MySQL", icon: "simple-icons:mysql", color: "bg-blue-600" },
      { name: "MongoDB", icon: "simple-icons:mongodb", color: "bg-green-600" },
      { name: "REST API", icon: "mdi:api", color: "bg-gray-600" },
      { name: "Postman", icon: "simple-icons:postman", color: "bg-orange-500" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "simple-icons:git", color: "bg-orange-600" },
      { name: "GitHub", icon: "mdi:github", color: "bg-gray-800" },
      { name: "Docker", icon: "simple-icons:docker", color: "bg-blue-500" },
      { name: "VS Code", icon: "mdi:visual-studio-code", color: "bg-blue-600" },
      { name: "NPM", icon: "simple-icons:npm", color: "bg-red-600" },
      {
        name: "Firebase",
        icon: "simple-icons:firebase",
        color: "bg-yellow-500",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border-t
      dark:border-dark-border light:border-light-border"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-2">My Skills</h2>
          <p className="text-sm opacity-50">Technologies & Tools I Work With</p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold mb-4 opacity-70">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center p-5 rounded-xl
                    dark:bg-dark-card light:bg-light-card shadow-sm"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${skill.color}
                      flex items-center justify-center mb-3`}
                    >
                      <Icon icon={skill.icon} className="w-7 h-7 text-white" />
                    </div>

                    <p className="text-xs font-semibold text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
