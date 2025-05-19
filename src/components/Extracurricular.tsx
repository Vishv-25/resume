import { 
  Trophy, 
  Users, 
  Calendar, 
  Award, 
  Flag,
  Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Activity {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: JSX.Element;
}

const Extracurricular = () => {
  const activities: Activity[] = [
    {
      id: 1,
      title: "National Sports Organization",
      organization: "NSO H&FUNIT 4, IIT Kharagpur",
      description: "Participated in a rally on the theme of \"Vigilance Awareness on corruption free india for a developed nation\" organized under NSO H&F UNIT 4, IIT Kharagpur",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Volunteering and Program Officer",
      organization: "NSOH&F Unit 4, IIT Kharagpur",
      description: "Participated in various activities between the volunteers and Program Officer of NSOH&F Unit 4, IIT Kharagpur",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Diwali Festival Illumination",
      organization: "MMM Hall of Residence",
      description: "Worked in a team to create illumination setup during Diwali festival in MMM Hall of Residence",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Wing Representative",
      organization: "Hall of Residence",
      description: "As a wing representative in my hall, I effectively manage and coordinate activities, ensuring a positive and inclusive living environment. My role involves addressing residents' concerns and fostering a sense of community through proactive leadership",
      icon: <Flag className="w-5 h-5" />
    }
  ];

  return (
    <section id="extracurricular" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Extracurricular <span className="bg-gradient-to-r from-emerald-500 to-green-400 text-transparent bg-clip-text">Activities</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-emerald-400 before:to-green-400 before:bg-opacity-70">
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.id}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:gap-10`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.18, ease: 'easeOut' }}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 shadow border-4 border-white dark:border-gray-900 z-10"
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1.1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: index * 0.18 + 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-emerald-500">
                    {activity.icon}
                  </div>
                </motion.div>
                <div className={`min-w-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}> 
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-2xl hover:ring-2 hover:ring-emerald-400/60 transition-all duration-300"
                    whileHover={{ scale: 1.04, boxShadow: '0 0 32px 0 rgba(16,185,129,0.18)' }}
                  >
                    <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{activity.title}</h3>
                      <span className="px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full">
                        {activity.organization}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{activity.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;