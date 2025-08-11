import Lottie from "lottie-react";
import contactAnim from "../assets/lottie/Contact_Button.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-gray-50 px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="md:w-1/2" data-aos="fade-right">
        <Lottie animationData={contactAnim} loop className="w-full h-full" />
      </div>
      <div className="md:w-1/2" data-aos="fade-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h2>
        <form className="grid grid-cols-1 gap-6">
          <input type="text" placeholder="Your Name" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="email" placeholder="Your Email" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <textarea placeholder="Your Message" rows="5" className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}