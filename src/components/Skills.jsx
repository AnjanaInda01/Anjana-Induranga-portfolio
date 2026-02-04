import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", icon: "logos:php", color: "bg-purple-600" },
      { name: "JavaScript", icon: "logos:javascript", color: "bg-yellow-400" },
      { name: "MySQL", icon: "logos:mysql", color: "bg-blue-500" },
    ],
  },
  {
    title: "Code Management / Collaboration",
    skills: [
      { name: "Git", icon: "logos:git-icon", color: "bg-red-600" },
      { name: "GitHub", icon: "logos:github-icon", color: "bg-gray-700" },
      { name: "GitLab", icon: "logos:gitlab", color: "bg-orange-600" },
    ],
  },
  {
    title: "Mobile / API Development",
    skills: [
      { name: "Python", icon: "logos:python", color: "bg-yellow-500" },
      { name: "Django", icon: "logos:django", color: "bg-green-700" },
      { name: "REST APIs", icon: "mdi:api", color: "bg-gray-600" },
    ],
  },
  {
    title: "Multiple Frameworks / Languages",
    skills: [
      { name: "Flutter", icon: "logos:flutter", color: "bg-cyan-500" },
      { name: "Dart", icon: "logos:dart", color: "bg-teal-500" },
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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            My Skills
          </h2>
          <p className="text-sm opacity-50">
            Technologies I work with
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold opacity-70">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 sm:p-6
                    rounded-xl dark:bg-dark-card light:bg-light-card
                    hover:shadow-lg transition-all"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${skill.color}
                      flex items-center justify-center mb-2 sm:mb-3 shadow-md`}
                    >
                      <Icon
                        icon={skill.icon}
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      />
                    </div>

                    <span className="text-[10px] sm:text-xs font-semibold text-center leading-tight">
                      {skill.name}
                    </span>
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
