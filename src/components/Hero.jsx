import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-20 px-4 md:px-6 dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr_280px] xl:grid-cols-[320px_1fr_320px] gap-6 lg:gap-8 items-start">
          {/* Left Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:space-y-8 hidden lg:block"
          >
            {/* Backend Section */}
            <div>
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Backend</h3>
              <p className="text-xs lg:text-sm leading-relaxed opacity-70">
                I have solid backend development experience using Node.js and Python.
                I have experience building powerful,
                high performing solutions using
                Node.js and Python while also being
                able to use cloud providers like AWS
                for serverless deployment and DevOps
                in CI/CD with GitHub Actions and
                Git + more
              </p>
            </div>

            {/* Frontend Section */}
            <div>
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Frontend</h3>
              <p className="text-xs lg:text-sm leading-relaxed opacity-70">
                While being a backend focus digitally, I also
                love making stunning apps using frameworks
                like ReactJS and VueJS together with styling
                libraries like Tailwind or Bootstrap
              </p>
            </div>

            {/* Mobile Section */}
            <div>
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Mobile</h3>
              <p className="text-xs lg:text-sm leading-relaxed opacity-70">
                Mobile Development,
                I love Kotlin Android and also
                Flutter using Dart!
              </p>
            </div>

            {/* Stats */}
            <div className="pt-4">
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Years of Experience</h3>
              <p className="text-2xl lg:text-3xl font-bold">5+</p>
            </div>
          </motion.div>

          {/* Center - Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-6 lg:space-y-8"
          >
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Hi, I'm Godsend Joseph
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl">
                I'm a <span className="text-primary font-semibold">Full Stack Mobile Developer</span>
              </p>
            </div>

            {/* Profile Image with oval frame */}
            <div className="relative inline-block">
              <div className="relative w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 mx-auto">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary to-purple-600 rounded-[50%] blur-2xl opacity-50"></div>
                
                {/* Oval frame */}
                <div className="relative w-full h-full rounded-[50%] overflow-hidden border-2 sm:border-4 dark:border-gray-800 light:border-gray-300 bg-gradient-to-b from-primary/80 to-purple-600/80">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
                    alt="Godsend Joseph"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Social Links Below Image */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
                <a 
                  href="#" 
                  className="p-2 sm:p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 sm:p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 sm:p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 sm:p-2.5 rounded-lg dark:bg-dark-card light:bg-light-card hover:bg-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="pt-6 lg:pt-8 hidden md:block">
              <div className="w-px h-12 lg:h-16 mx-auto dark:bg-gray-700 light:bg-gray-400"></div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 lg:space-y-8 hidden lg:block"
          >
            {/* Tables of Expertise */}
            <div>
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Table of Expertise</h3>
              <div className="space-y-2 text-xs lg:text-sm opacity-70">
                <p>Backend</p>
                <p>Frontend</p>
                <p>Mobile</p>
              </div>
            </div>

            {/* Accolades */}
            <div>
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Accolades</h3>
              <div className="space-y-2 text-xs lg:text-sm opacity-70">
                <p>Senior Developer Certificate</p>
              </div>
            </div>

            {/* Company Address */}
            <div>
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Company Address</h3>
              <p className="text-xs lg:text-sm opacity-70">
                Nigeria<br />
                Rivers State
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Sidebar Content */}
        <div className="lg:hidden mt-8 sm:mt-12 space-y-4 sm:space-y-6 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl dark:bg-dark-card light:bg-light-card">
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Backend</h3>
              <p className="text-sm opacity-70">
                I have solid backend development experience using Node.js and Python with cloud providers like AWS.
              </p>
            </div>
            <div className="p-4 rounded-xl dark:bg-dark-card light:bg-light-card">
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Frontend</h3>
              <p className="text-sm opacity-70">
                Creating stunning apps using ReactJS and VueJS with Tailwind or Bootstrap.
              </p>
            </div>
            <div className="p-4 rounded-xl dark:bg-dark-card light:bg-light-card">
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Mobile</h3>
              <p className="text-sm opacity-70">
                Mobile Development with Kotlin Android and Flutter using Dart!
              </p>
            </div>
            <div className="p-4 rounded-xl dark:bg-dark-card light:bg-light-card">
              <h3 className="text-xs font-semibold mb-2 opacity-50 uppercase tracking-wider">Experience</h3>
              <p className="text-3xl font-bold">5+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
