import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const aboutData = {
  heading: "About Me",
  description:
    "I’m a full-stack developer specializing in the MERN stack. I love solving problems and creating interactive, user-friendly web apps.",
  skills: [
    {
      category: "Frontend Skills",
      details: "React, TailwindCSS, JavaScript, HTML, CSS",
    },
    {
      category: "Backend Skills",
      details: "Node.js, Express, MongoDB",
    },
  ],
};

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-white px-6 pt-20 flex items-center justify-center"
    >
      <div className="max-w-5xl text-center space-y-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800">{aboutData.heading}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{aboutData.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {aboutData.skills.map(({ category, details }) => (
            <div
              key={category}
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{category}</h3>
              <p>{details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}