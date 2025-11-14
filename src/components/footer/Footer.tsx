import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
  return (
      <footer className="relative bg-[#05173E] text-white h-full pt-10 md:pt-5 mt-24 lg:mt-20 ">
        {/* Floating Card */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 
                     w-[80%] md:w-[93%] bg-[#186EC6] rounded-lg shadow-lg
                     p-4 md:p-5 flex flex-col items-center text-center 
                     -translate-y-1/2 z-10 mt-5 lg:mt-10"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Take a Free Mock Test Now!
          </h2>

          <p className="text-base md:text-lg font-normal text-white mt-3">
            Practise with 30,000+ real exam questions.
          </p>

          <Button
            className="mt-6 md:mt-8 font-semibold w-[110px] h-[40px] md:w-[130px] md:h-[50px] 
                       rounded-lg text-sm md:text-base 
                       bg-white text-[#05173E] 
                       hover:bg-[#186EC6] hover:text-white 
                       hover:border-2 hover:border-white 
                       transition-all duration-300"
          > 
            <Link to="/Registeration">Sign Up</Link>
          </Button>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {/* Logo / About */}
          <div className="text-center md:text-left">
            <Link to={"/"}>
              <h3 className="text-lg font-semibold mb-3">BandBoost</h3>
            </Link>
            <p className="mt-3 text-base text-white">
              Preparing you for success in IELTS, PTE, Duolingo, and CELPIP with free online mock tests.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Features", "Testimonies", "Mock Tests", "Contact", "Pricing"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-semibold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 2 .1v2h-1.2c-1 0-1.3.6-1.3 1.2v1.7h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M23 3a10.9 10.9 0 0 1-3.1 1.5A4.48 4.48 0 0 0 22.4.4a9 9 0 0 1-2.9 1.1A4.52 4.52 0 0 0 16.5 0c-2.6 0-4.6 2.3-4 4.8A12.9 12.9 0 0 1 3 1.6a4.5 4.5 0 0 0 1.4 6c-.8 0-1.5-.2-2.2-.6 0 2.2 1.5 4.1 3.7 4.5a4.5 4.5 0 0 1-2.1.1c.6 2 2.4 3.5 4.6 3.6A9 9 0 0 1 2 19.5a12.8 12.8 0 0 0 7 2c8.4 0 13-7 13-13v-.6A9.5 9.5 0 0 0 23 3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.5-3.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.5 1.1 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.5-2.2 3.7 0 4.4 2.4 4.4 5.5V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.2V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 py-4 text-center text-sm text-white">
          © {new Date().getFullYear()} BandBoost. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
