import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="min-h-screen bg-white px-6 pt-20 flex items-center justify-center">
      <div className="max-w-5xl text-center space-y-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I’m a full-stack developer specializing in the MERN stack. I love solving problems and creating interactive, user-friendly web apps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">Frontend Skills</h3>
            <p>React, TailwindCSS, JavaScript, HTML, CSS</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">Backend Skills</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}