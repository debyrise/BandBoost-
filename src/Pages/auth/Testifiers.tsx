import { useEffect, useRef, useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";


const Testifiers = () => {
    const controls = useAnimation();
      const [cardsPerView, setCardsPerView] = useState(1);
      const [isPaused, setIsPaused] = useState(false);
      const intervalRef = useRef<NodeJS.Timeout | null>(null);


      const testify = [
            {
              profile: "https://randomuser.me/api/portraits/men/32.jpg",
              Name: "Kim Chang",
              Country: 'Nigeria',
              desc: "BandBoost is actually an amazing tool to test and improve our English performance. Free Mock Test truly biases me in order to continue my IELTS preparation with BandBoost.",
              date: "Aug 2024",
            },
            {
              profile: "https://randomuser.me/api/portraits/women/45.jpg",
              Name: "Aisha Khan",
              Country: 'India',
              desc: "This is the best IELTS mock test I have come in contact with, so I would highly recommend BandBoost.com for anybody preparing for the IELTS exam.",
              date: "Jul 2024",
            },
            {
              profile: "https://randomuser.me/api/portraits/men/12.jpg",
              Name: "John Doe",
              Country: 'Kenya',
              desc: "The practice test helps me a lot to prepare for my exam. Thank you BandBoost.",
              date: "Jun 2024",
            },
            {
              profile: "https://randomuser.me/api/portraits/women/20.jpg",
              Name: "Maria Lopez",
              Country: "USA",
              desc: "I had only 1 day to prepare for the IELTS test and I knew almost nothing about it, but BandBoost practice helped me to understand almost everything.",
              date: "May 2024",
            },
            {
              profile: "https://randomuser.me/api/portraits/men/55.jpg",
              Name: "David Smith",
              Country:'Australia',
              desc: "I would highly suggest BandBoost if you are planning for an international career and need help with IELTS. Great and instant supportive team.",
              date: "Apr 2024",
            },
            {
              profile: "https://randomuser.me/api/portraits/women/60.jpg",
              Name: "Sophia Wong",
              Country: 'Canada',
              desc: "I completed my CD IELTS, BandBoost software helped me a lot in this journey.",
              date: "Mar 2024",
            },
          ];



     useEffect(() => {
        let currentIndex = 0;
        const totalSlides = testify.length 
    
        const slide = () => {
          if (isPaused) return; // stop animation when paused
          currentIndex = (currentIndex + 1) % totalSlides;
          controls.start({
            x: `-${currentIndex * 100}%`,
            transition: { duration: 1.2, ease: "easeInOut" },
          });
        };
    
        // Start sliding interval
        intervalRef.current = setInterval(slide, 3000);
    
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }, [controls, cardsPerView, testify.length, isPaused]);
      return (
    <div>
         


        
      <div
        className="overflow-hidden w-[400px]   group relative "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={controls}
          className="flex transition-transform ease-in-out duration-700"
        >
          {testify.map((item, index) => (
            <div
              key={index}
              className="w-full  flex-shrink-0 px-3"
            >
              <div className="relative bg-[#f5f5f5] shadow-md rounded-2xl text-[#121826] p-6 hover:bg-[#186EC6] hover:text-white transition-all duration-300 cursor-pointer h-full flex flex-col justify-between">
                 <div className="absolute top-4 left-4 bg-[#186EC620] rounded-full p-2">
                  <BiSolidQuoteAltLeft className="text-[#186EC6] w-5 h-5" />
                </div>

                {/* Profile + Name */}
                <div className="flex items-center gap-4 mt-10">
                  <img
                    src={item.profile}
                    alt={item.Name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-base font-semibold">{item.Name}</h3>
                    <p className="text-sm">{item.Country}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base mb-4 flex-grow">{item.desc}</p>

                {/* Date */}
                <p className="text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
     </div>
    
  )
}

export default Testifiers