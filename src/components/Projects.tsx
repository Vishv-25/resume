import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  lab: string;
  points: string[];
  technologies: string[];
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "College Festival Management Web Application",
    description: "A comprehensive web application to streamline the organization and management of a university cultural festival.",
    lab: "Database Management Systems Lab under Prof.K. Sreenivasa Rao & Pabitra Mitra",
    points: [
      "Implemented user roles for external participants, students, volunteers, organizers, and database administrators, each with distinct functionalities",
      "Built the frontend using HTML and CSS, and the backend with Flask and PostgreSQL for robust and efficient data handling",
      "Integrated authentication for all user types, ensuring secure access and role-based permissions"
    ],
    technologies: ["HTML", "CSS", "Flask", "PostgreSQL", "Authentication"],
    github: "https://github.com/Vishv-25/College-Festival-Management-Web-Application",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Supermarket Automation System",
    description: "An integrated platform to automate and streamline supermarket operations, addressing inefficiencies in manual inventory tracking.",
    lab: "Software Engineering Lab project under Prof. Abir Das and Prof. Sourangshu Bhattacharya",
    points: [
      "Developed an integrated platform to automate and streamline supermarket operations",
      "Utilized Django framework for the backend, ensuring robust server-side logic and rapid prototyping capabilities",
      "Implemented frontend using HTML, CSS, and SQLite to create user-friendly interfaces that enhance the user experience"
    ],
    technologies: ["Django", "HTML", "CSS", "SQLite", "PostgreSQL", "RESTful API"],
    github: "https://github.com/Vishv-25",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Football Goal-Line Technology",
    description: "A functional prototype of a football goal-keeper using Arduino Uno, integrating servo motors for movement and PIR sensors for goal detection.",
    lab: "DIY Laboratory",
    points: [
      "Developed a functional prototype of a football goal-keeper using Arduino Uno",
      "Integrated servo motors for movement and PIR sensors for goal detection",
      "Implemented precise motor control and sensor-based response to simulate goal-saving actions"
    ],
    technologies: ["Arduino", "Sensor Integration", "Motor Control", "Real-time Systems"],
    github: "https://github.com/Vishv-25",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=60"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-navy-900 text-white font-sans">
      <div className="section-title-bg select-none text-[7vw] font-extrabold text-navy-100/10 absolute left-0 top-0 z-0 w-full pl-8 pt-8 pointer-events-none">PROJECTS</div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-16 text-white font-sans">Projects</h2>
        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="flex flex-col md:flex-row items-stretch bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Browser-mockup image left */}
              <div className="md:w-[48%] w-full bg-navy-900 flex items-center justify-center p-6 md:p-8">
                <div className="w-full rounded-2xl overflow-hidden border-2 border-navy-700 bg-navy-900">
                  <div className="bg-navy-700 h-8 flex items-center px-4 gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400/40 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400/40 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-gray-400/40 inline-block"></span>
                  </div>
                  <img src={project.image} alt={project.title} className="w-full h-56 md:h-64 object-cover" />
                </div>
              </div>
              {/* Project details right */}
              <div className="flex-1 flex flex-col justify-between p-8 md:pl-0 md:pr-12 relative bg-white/10">
                {/* Top right icons */}
                <div className="absolute right-8 top-8 flex gap-4 z-10">
                  <a href="#" className="bg-white/20 hover:bg-blue-400/80 text-white hover:text-navy-900 rounded-full p-2 transition" title="Live Demo">
                    <ExternalLink size={24} />
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-blue-400/80 text-white hover:text-navy-900 rounded-full p-2 transition" title="GitHub">
                      <GitHub size={24} />
                    </a>
                  )}
                </div>
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight font-sans" style={{letterSpacing: '-0.01em'}}>{project.title}</h3>
                  <p className="text-xl md:text-2xl font-medium text-white/90 mb-4 max-w-2xl font-sans" style={{letterSpacing: '-0.01em'}}>{project.description}</p>
                  <p className="text-base text-white/70 mb-4 italic font-sans">{project.lab}</p>
                  <ul className="mb-6 space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start text-white/90 font-sans text-lg">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2"></span>
                        <span className="text-base md:text-lg font-sans">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-5 py-2 bg-navy-700/80 text-white text-lg font-bold rounded-lg uppercase tracking-wider font-sans" style={{letterSpacing: '0.04em'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;