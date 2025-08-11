import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TailwindCSS",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white px-4 sm:px-6 md:px-12 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-10 text-gray-800"
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              tabIndex={0}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-default"
              aria-label={`Skill: ${skill}`}
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 