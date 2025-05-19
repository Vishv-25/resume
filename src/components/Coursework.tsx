import { motion } from 'framer-motion';

interface Course {
  id: number;
  name: string;
  description: string;
  category: string;
}

const Coursework = () => {
  const courses: Course[] = [
    {
      id: 1,
      name: "Programming and Data Structures",
      description: "Fundamentals of programming, data structures, and algorithms",
      category: "Core"
    },
    {
      id: 2,
      name: "Algorithms-I",
      description: "Design and analysis of algorithms, complexity theory",
      category: "Core"
    },
    {
      id: 3,
      name: "Software Engineering",
      description: "Software development methodologies, project management",
      category: "Core"
    },
    {
      id: 4,
      name: "Formal Language and Automata Theory",
      description: "Theory of computation, formal languages, automata",
      category: "Theory"
    },
    {
      id: 5,
      name: "Probability and Statistics",
      description: "Statistical methods, probability theory, data analysis",
      category: "Math"
    },
    {
      id: 6,
      name: "Systems Programming Laboratory",
      description: "Low-level programming, system interfaces, optimization",
      category: "Lab"
    },
    {
      id: 7,
      name: "Switching Circuits and Logic Design",
      description: "Digital logic design, boolean algebra, circuit design",
      category: "Hardware"
    },
    {
      id: 8,
      name: "Database Management System",
      description: "Database design, SQL, transaction processing",
      category: "Core"
    }
  ];

  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <section id="coursework" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Relevant <span className="bg-gradient-to-r from-emerald-500 to-green-400 text-transparent bg-clip-text">Coursework</span>
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                {category}
              </motion.span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                className="bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.10, ease: 'easeOut' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.name}</h3>
                  <span className="px-2 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full">
                    {course.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coursework;