import Lottie from "lottie-react";
import codingAnim from "../assets/lottie/coding.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-20 bg-gradient-to-r from-blue-50 to-white"
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6" data-aos="fade-right">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-snug">
          Hi, I’m <span className="text-blue-600">POTTI</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          A MERN Stack Developer passionate about building modern, responsive,
          and high-performance web applications. I specialize in crafting
          user-friendly experiences with a focus on performance and scalability.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>

      {/* Right Animation Section */}
      <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
        <Lottie animationData={codingAnim} loop className="w-[90%] max-w-md" />
      </div>
    </section>
  );
}