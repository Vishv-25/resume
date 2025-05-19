import {
  Code2,
  Database,
  Terminal,
  Layers,
  Briefcase,
  Globe,
  PenTool,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["C/C++", "Python", "HTML", "CSS", "JavaScript"]
    },
    {
      name: "Frameworks",
      icon: <Layers className="w-6 h-6" />,
      skills: ["Django", "Flask", "React"]
    },
    {
      name: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      name: "Tools",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Git", "VS Code", "FreeCAD"]
    },
    {
      name: "Libraries",
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["NumPy", "Pandas", "Matplotlib"]
    },
    {
      name: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["RESTful APIs", "Responsive Design", "Authentication"]
    },
    {
      name: "Design",
      icon: <PenTool className="w-6 h-6" />,
      skills: ["UI/UX Basics", "Wireframing"]
    },
    {
      name: "Other",
      icon: <Activity className="w-6 h-6" />,
      skills: ["Problem Solving", "Data Structures & Algorithms", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono text-code-green">
          Skills & <span className="text-code-cyan">Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-code-accent rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-code-bg text-code-green mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold font-mono text-code-cyan">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 font-mono bg-code-green/10 text-code-yellow rounded-full text-sm border border-code-green"
                  >
                    {skill}
                  </span>
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