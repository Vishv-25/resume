const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Main Text */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-8 text-white">I Build Digital Experiences That Matter</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6">As a Computer Science & Engineering student at IIT Kharagpur, I'm passionate about creating impactful solutions through code. My journey in technology is driven by a desire to solve real-world problems and build experiences that make a difference.</p>
            <p className="text-lg md:text-xl text-gray-300 mb-6">From competitive programming to web development, I've been honing my skills in both algorithmic problem-solving and modern web technologies. I believe in writing clean, efficient code and creating intuitive user interfaces that enhance user experience.</p>
            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-blue-400 text-navy-900 font-bold text-lg shadow hover:bg-blue-500 transition">Contact Me</a>
          </div>
          {/* Right: Tools/Skills */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase">Programming Languages</h3>
              <ul className="text-gray-200 text-base space-y-1">
                <li>C++, Python, JavaScript, TypeScript</li>
                <li>Data Structures & Algorithms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase">Web Technologies</h3>
              <ul className="text-gray-200 text-base space-y-1">
                <li>React, Next.js, Node.js, Express.js</li>
                <li>Tailwind CSS, HTML5, CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase">Tools & Others</h3>
              <ul className="text-gray-200 text-base space-y-1">
                <li>Git, GitHub, VS Code, MongoDB</li>
                <li>Problem Solving, System Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Work Experience Section
const Experience = () => (
  <section id="experience" className="relative py-24 bg-navy-900 text-white">
    <div className="section-title-bg select-none">EXPERIENCE</div>
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest mb-16 text-white">Work Experience</h2>
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        {/* Experience 1 */}
        <div className="relative flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-navy-900 font-bold text-lg">I</div>
            <div className="flex-1 w-1 bg-blue-400/30 my-1" style={{ minHeight: '60px' }}></div>
          </div>
          <div className="bg-navy-800/90 rounded-2xl shadow-lg p-6 flex-1">
            <h3 className="text-xl font-bold text-blue-400 mb-1">Software Development Intern</h3>
            <div className="text-gray-400 text-sm mb-2">Company Name | Duration</div>
            <ul className="list-disc pl-5 text-gray-200 space-y-1 text-base">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Implemented responsive designs and optimized application performance</li>
              <li>Collaborated with team members to deliver high-quality features</li>
            </ul>
          </div>
        </div>
        {/* Experience 2 */}
        <div className="relative flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-navy-900 font-bold text-lg">P</div>
          </div>
          <div className="bg-navy-800/90 rounded-2xl shadow-lg p-6 flex-1">
            <h3 className="text-xl font-bold text-blue-400 mb-1">Project Experience</h3>
            <div className="text-gray-400 text-sm mb-2">Personal Projects | Ongoing</div>
            <ul className="list-disc pl-5 text-gray-200 space-y-1 text-base">
              <li>Built full-stack web applications using modern technologies</li>
              <li>Implemented complex features and optimized user experience</li>
              <li>Contributed to open-source projects and collaborated with developers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Experience };