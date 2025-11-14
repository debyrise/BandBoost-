
const Testimony = () => {
  

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

  return (
    <section id="Testimonies" className="py-10 bg-white">
      <div className="text-center px-5 xl:px-20">
        <h2 className="text-2xl xl:text-3xl font-bold text-left text-[#186EC6] md:pt-5">
          Testimonies
        </h2>

        <h3 className="text-[#121826] text-2xl xl:text-4xl font-bold mt-5">
          What Our{" "}
          <span className="text-[#186EC6] text-2xl xl:text-4xl font-bold">
            Students Say
          </span>
        </h3>
        <p className="text-base font-normal p-3">
          Listen to over 2 million+ students who fulfilled their dreams with
          BandBoost English proficiency{" "}
          <br className="hidden lg:flex" />
          tests practice software.
        </p>
      </div>

      {/* Grid Testimonials */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 xl:px-20">
        {testify.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] shadow-md rounded-2xl text-[#121826] p-6 hover:bg-[#186EC6] hover:text-white transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Profile + Name */}
            <div className="flex items-center gap-4 mb-4">
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
        ))}
      </div>
    </section>
  );
};

export default Testimony;

