// import React from "react";
// import { Button } from "../components/ui/button";
// import { Link } from "react-router-dom";

// const Pricing = () => {
//   const primeMembership = [
//     {
//       day: 15,
//       days: "Days",
//       membership: "Prime Membership",
//       paymentType: "USD",
//       amount: 15,
//       Button: "/Sign Up",
//       bgColor: "bg-red-100",
//       textColor: "text-red-700",
//       accentColor: "red-500",
//     },
//     {
//       title: "POPULAR",
//       day: 30,
//       days: "Days",
//       membership: "Prime Membership",
//       paymentType: "USD",
//       amount: 20,
//       Button: "/Sign Up",
//       bgColor: "bg-blue-100",
//       textColor: "text-blue-700",
//       accentColor: "blue-500",
//     },
//     {
//       title: "BandBoost’s Choice",
//       day: 60,
//       days: "Days",
//       membership: "Prime Membership",
//       paymentType: "USD",
//       amount: 30,
//       Button: "/Sign Up",
//       bgColor: "bg-green-100",
//       textColor: "text-green-700",
//       accentColor: "green-500",
//     },
//     {
//       day: 7,
//       days: "Days",
//       membership: "Prime Membership",
//       paymentType: "USD",
//       amount: 10,
//       Button: "/Sign Up",
//       bgColor: "bg-yellow-100",
//       textColor: "text-yellow-700",
//       accentColor: "yellow-500",
//     },
//   ];
//   const colorClasses = {
//     "red-500":
//       "bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600",
//     "blue-500":
//       "bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600",
//     "green-500":
//       "bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600",
//     "yellow-500":
//       "bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600",
//   };

//   return (
//     <React.Fragment>
//       <div className="text-center h-full w-full  px-[5px] xl:px-[50px] bg-white ">
//         <div className="lg:px-40 ">
//           <h2 className="text-[#121826] text-3xl xl:text-[44px]  font-bold leading-snug">
//             Affordable and Flexible Plans for
//             <span className="text-[#186EC6] mt-5">
//               {" "}
//               PTE, IELTS, DUOLINGO & CELPIP
//             </span>
//           </h2>

//           <p className="text-[#121826] text-lg font-normal  mt-8 max-w-3xl mx-auto leading-relaxed">
//             Choose from flexible daily plans ranging from 7 to 60 days —
//             personalized to fit your learning pace, schedule, and goals.
//           </p>
//         </div>

//         <div
//           className="bg-blue-100 shadow-lg border-b-8 border-[#186EC6]    rounded-xl p-6 
//                 flex flex-col md:flex-row justify-between items-center text-center lg:text-left gap-6 
//                   mt-10 mx-auto"
//         >
//           <div>
//             <h3 className="text-[#121826] text-3xl font-semibold leading-snug">
//               Take A <span className="text-[#186EC6]">Free Mock Test!</span>
//             </h3>

//             <p className="text-[#121826] text-base mt-5   leading-relaxed">
//               Check your exam preparation level to achieve your targeted score.
//             </p>
//           </div>

//           <Button
//             className=" font-semibold w-[110px] h-[40px] md:w-[130px] md:h-[50px]  
//                      rounded-lg text-sm md:text-base 
//                      hover:bg-white hover:text-[#186EC6] 
//                      bg-[#186EC6] text-white 
//                      hover:border-2 hover:border-[#186EC6]"
//           >
//             <Link to="/Registeration">Sign Up</Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-2 lg:p-5 mt-5 ">
//           {primeMembership.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative shadow-md rounded-lg p-6 border-t-2 
//       hover:shadow-xl transition-all duration-300 overflow-hidden ${
//         plan.bgColor
//       }
//       ${
//         plan.title === "POPULAR"
//           ? "border-yellow-400"
//           : plan.title === "BandBoost’s Choice"
//           ? "border-[#186EC6]"
//           : "border-gray-0"
//       }`}
//             >
//               {plan.title && (
//                 <div
//                   className={`absolute top-0 left-0 w-full text-center py-2 text-sm font-semibold text-white
//           ${
//             plan.title === "POPULAR"
//               ? "bg-yellow-500 text-[#121826]"
//               : "bg-[#186EC6]"
//           }`}
//                 >
//                   {plan.title}
//                 </div>
//               )}

//               <div className="mt-3 ">
//                 <div className="flex items-center justify-center text-center gap-1">
//                   <h3 className={`text-3xl font-bold ${plan.textColor}`}>
//                     {plan.day}
//                   </h3>
//                   <p className={`text-sm  mt-2 ${plan.textColor} `}>
//                     {plan.days}
//                   </p>
//                 </div>

//                 <h4 className={`text-base font-medium mb-3 ${plan.textColor}`}>
//                   {plan.membership}
//                 </h4>

//                 <div className="flex justify-center items-end mb-5 gap-1">
//                   <span className="text-base text-[#121826] ">
//                     {plan.paymentType}
//                   </span>
//                   <span className="text-2xl font-bold text-[#121826]">
//                     {plan.amount}
//                   </span>
//                 </div>

//                 <Button
//                   className={`w-full font-semibold rounded-lg py-2 transition-all duration-300 text-white ${colorClasses[plan.accentColor]}`} >
//                   <Link to={plan.Button}>Sign Up</Link>
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Pricing;


import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

// ✅ Step 1: Define allowed accent colors
type AccentColor = "red-500" | "blue-500" | "green-500" | "yellow-500";

// ✅ Step 2: Define type for membership plans
interface MembershipPlan {
  title?: string;
  day: number;
  days: string;
  membership: string;
  paymentType: string;
  amount: number;
  Button: string;
  bgColor: string;
  textColor: string;
  accentColor: AccentColor;
}

// ✅ Step 3: Define color class map for accent colors
const colorClasses: Record<AccentColor, string> = {
  "red-500":
    "bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600",
  "blue-500":
    "bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600",
  "green-500":
    "bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600",
  "yellow-500":
    "bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600",
};

// ✅ Step 4: Plans array with proper accentColor type
const primeMembership: MembershipPlan[] = [
   {
    day: 7,
    days: "Days",
    membership: "Prime Membership",
    paymentType: "USD",
    amount: 10,
    Button: "/Registeration",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
    accentColor: "yellow-500",
  },
  {
    day: 15,
    days: "Days",
    membership: "Prime Membership",
    paymentType: "USD",
    amount: 15,
    Button: "/Registeration",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
    accentColor: "red-500",
  },
  {
    title: "POPULAR",
    day: 30,
    days: "Days",
    membership: "Prime Membership",
    paymentType: "USD",
    amount: 20,
    Button: "/Registeration",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    accentColor: "blue-500",
  },
  {
    title: "BandBoost’s Choice",
    day: 60,
    days: "Days",
    membership: "Prime Membership",
    paymentType: "USD",
    amount: 30,
    Button: "/Registeration",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    accentColor: "green-500",
  },
 
];

// ✅ Step 5: Component
const Pricing = () => {
  return (
    <React.Fragment>
      <div className="text-center h-full w-full px-[5px] xl:px-[50px] bg-white">
        <div className="lg:px-40">
          <h2 className="text-[#121826] text-3xl xl:text-[44px] font-bold leading-snug">
            Affordable and Flexible Plans for
            <span className="text-[#186EC6] mt-5">
              {" "}
              PTE, IELTS, DUOLINGO & CELPIP
            </span>
          </h2>

          <p className="text-[#121826] text-lg font-normal mt-8 max-w-3xl mx-auto leading-relaxed">
            Choose from flexible daily plans ranging from 7 to 60 days —
            personalized to fit your learning pace, schedule, and goals.
          </p>
        </div>

        <div
          className="bg-blue-100 shadow-lg border-b-8 border-[#186EC6] rounded-xl p-6 
          flex flex-col md:flex-row justify-between items-center text-center lg:text-left gap-6 
          mt-10 mx-auto"
        >
          <div>
            <h3 className="text-[#121826] text-3xl font-semibold leading-snug">
              Take A <span className="text-[#186EC6]">Free Mock Test!</span>
            </h3>

            <p className="text-[#121826] text-base mt-5 leading-relaxed">
              Check your exam preparation level to achieve your targeted score.
            </p>
          </div>

          <Button
            className="font-semibold w-[110px] h-[40px] md:w-[130px] md:h-[50px]  
              rounded-lg text-sm md:text-base 
              hover:bg-white hover:text-[#186EC6] 
              bg-[#186EC6] text-white 
              hover:border-2 hover:border-[#186EC6]"
          >
            <Link to="/Registeration">Sign Up</Link>
          </Button>
        </div>

        {/* ✅ Membership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-2 lg:p-5 mt-5">
          {primeMembership.map((plan, index) => (
            <div
              key={index}
              className={`relative shadow-md rounded-lg p-6 border-t-2 
              hover:shadow-xl transition-all duration-300 overflow-hidden ${plan.bgColor}
              ${
                plan.title === "POPULAR"
                  ? "border-yellow-400"
                  : plan.title === "BandBoost’s Choice"
                  ? "border-[#186EC6]"
                  : "border-gray-200"
              }`}
            >
              {plan.title && (
                <div
                  className={`absolute top-0 left-0 w-full text-center py-2 text-sm font-semibold text-white
                  ${
                    plan.title === "POPULAR"
                      ? "bg-yellow-500 text-[#121826]"
                      : "bg-[#186EC6]"
                  }`}
                >
                  {plan.title}
                </div>
              )}

              <div className="mt-3">
                <div className="flex items-center justify-center text-center gap-1">
                  <h3 className={`text-3xl font-bold ${plan.textColor}`}>
                    {plan.day}
                  </h3>
                  <p className={`text-sm mt-2 ${plan.textColor}`}>
                    {plan.days}
                  </p>
                </div>

                <h4 className={`text-base font-medium mb-3 ${plan.textColor}`}>
                  {plan.membership}
                </h4>

                <div className="flex justify-center items-end mb-5 gap-1">
                  <span className="text-base text-[#121826]">
                    {plan.paymentType}
                  </span>
                  <span className="text-2xl font-bold text-[#121826]">
                    {plan.amount}
                  </span>
                </div>

                {/* ✅ Fixed dynamic button colors */}
                <Button
                  className={`w-full font-semibold rounded-lg py-2 transition-all duration-300 text-white 
                    ${colorClasses[plan.accentColor]}`}
                >
                  <Link to={plan.Button}>Sign Up</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pricing;

