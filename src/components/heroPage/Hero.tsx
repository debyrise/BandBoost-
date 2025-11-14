import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import pte from "../../assets/images/pte-fav.svg";
import heroimage from '../../assets/images/hero-image.png'
import { Link } from "react-router-dom";

const Hero = () => {
  const words = ["IELTS", "PTE", "Duolingo", "CELPIP"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <React.Fragment>
       <section className="bg-[#ffffff] text-[#121826] flex flex-col lg:flex-row justify-between w-full mt-5 h-full px-[5px] xl:px-[50px]">
        <div className="p-5 w-full lg:w-1/2 h-auto">
          <h1 className="font-bold text-[30px] xl:text-[45px] ">
            Free Online Mock Test for English Proficiency Exam of
          </h1>

          <div className="mt-5  text-primary">
          <span
                key={words[index]}
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-[#186EC6] font-bold text-[36px] xl:text-[45px] text-[#186EC6] animate-typing"
                style={{
                    animation: `typing 2s steps(${words[index].length}, end) forwards, blink 0.75s step-end infinite`,
                    width: `${words[index].length}ch`,
                }}
                >
      {words[index]}
     </span>

          </div>

          <p className="mt-5 text-[13px] xl:text-[16px] font-medium ">
            Free mock test for PTE, IELTS, Duolingo, and CELPIP. Access a
            full-length English mock test online and question-wise practice to
            score high.
          </p>
          <Button
            className="font-semibold  h-[40px]  xl:h-[54px] 
                        rounded-lg text-[13px] leading-[19.5px] 
                        xl:text-base xl:leading-[24px] 
                        bg-[#186EC6] hover:text-[#186EC6] 
                        text-[#f5f5f5] hover:bg-[#f5f5f5] border-2 hover:border-[#186EC6] mt-5"
          >
            <Link to={"/Registeration"} > GET FREE MOCK TEST</Link>
          </Button>

          <div className="flex items-center gap-3 mt-5">
            <span className=" flex items-center gap-3 text-[13px] xl:text-[16px] font-medium">
              
              <img src={pte} alt="" />
              AI Scoring
            </span>
            <span className=" flex items-center gap-3 text-[13px] xl:text-[16px] font-medium">
              
              <img src={pte} alt="" /> Accurate Results
            </span>
            <span className=" flex items-center gap-3 text-[13px] xl:text-[16px] font-medium">
              
              <img src={pte} alt="" /> No Credit Card Requried
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-lg">
            <img src={heroimage} alt="heroImage" className="w-full h-full object-cover" /> 
         </div>

      </section>
    </React.Fragment>
  );
};

export default Hero;
