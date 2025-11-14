import React from "react";
import { Monitor, CheckCircle, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-[#186EC6]" />,
      title: "Real Exam Simulation",
      desc: "Exact IELTS test interface with similar question types and timing",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#186EC6]" />,
      title: "Instant Feedback",
      desc: "Get instant scoring and band score prediction for each test",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#186EC6]" />,
      title: "Timed Tests",
      desc: "Experience the authentic IELTS exam countdown and pressure",
    },
  ];

  return (
    <React.Fragment>
    <section id="Features" className="px-5 xl:px-20 py-10">
      <h2 className="text-2xl xl:text-3xl font-bold text-left text-[#186EC6] mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {features.map((feature, index) => (
    <div
      key={index}
      className="bg-blue-300 shadow-md rounded-2xl p-6 hover:shadow-lg transition  items-start gap-4"
    >
      {/* Icon wrapper */}
      <div className="w-12 h-12 flex items-center justify-center bg-[#f5f5f5] rounded-full flex-shrink-0">
        {feature.icon}
      </div>

      {/* Text content */}
      <div>
        <h3 className="text-lg font-semibold text-[#121826] mb-2">{feature.title}</h3>
        <p className="text-[#121826] text-sm">{feature.desc}</p>
      </div>
    </div>
  ))}
  </div>

    </section>
    </React.Fragment>
  );
};

export default Features;
