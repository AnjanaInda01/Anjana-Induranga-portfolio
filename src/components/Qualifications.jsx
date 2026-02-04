import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Qualifications = () => {
  const qualifications = [
    {
      icon: <GraduationCap size={18} className="sm:w-5 sm:h-5" />,
      title: "BSc. Undergraduate in Computing / Software Engineering",
      institution: "Sabaragamuwa University of Sri Lanka",
      period: "Present",
      type: "Education"
    },
    {
      icon: <GraduationCap size={18} className="sm:w-5 sm:h-5" />,
      title: "IT & Programming Training",
      institution: "Academy of Computer Programming & Training (ACPT)",
      period: "Completed",
      type: "Training"
    },
    {
      icon: <Award size={18} className="sm:w-5 sm:h-5" />,
      title: "AWS DevOps Certification",
      institution: "KodeKloud (AWS DevOps Course)",
      period: "Completed",
      type: "Certification"
    },
  ];

  return (
    <section id="qualifications" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border-t dark:border-dark-border light:border-light-border dot-pattern">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Qualifications</h2>
          <p className="text-sm opacity-50">My academic & professional journey</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-6 rounded-xl dark:bg-dark-card light:bg-light-card border dark:border-dark-border light:border-light-border hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                  {qual.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] sm:text-xs opacity-50 uppercase tracking-wider">{qual.type}</span>
                  <h3 className="font-semibold mt-1 mb-2 text-sm sm:text-base">{qual.title}</h3>
                  <p className="text-xs sm:text-sm opacity-70 mb-1">{qual.institution}</p>
                  <p className="text-[10px] sm:text-xs opacity-50">{qual.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
