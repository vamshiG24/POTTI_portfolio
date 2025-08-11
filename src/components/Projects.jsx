import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    { title: "Portfolio Website", desc: "A sleek MERN portfolio", img: "https://via.placeholder.com/400x250" },
    { title: "E-commerce App", desc: "Full-stack shop", img: "https://via.placeholder.com/400x250" },
    { title: "Chat App", desc: "Realtime messaging", img: "https://via.placeholder.com/400x250" },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-10 text-center text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 200} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:underline">Live Demo</a>
                  <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}