import { Check, ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import Testifiers from "./Testifiers";

const EmailOtp = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(110);
  const [error, setError] = useState<string>("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const isOtpComplete = otp.every((digit) => digit.trim() !== "");

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");
      if (value && index < 5) inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const formattedTime = `${Math.floor(timer / 30)
    .toString()
    .padStart(2, "0")}:${(timer % 30).toString().padStart(2, "0")}`;

  const handleNext = () => {
    if (!isOtpComplete) {
      setError("Please enter all 6 digits of the verification code.");
      return;
    }
    navigate("/ChangePassword");
  };

  return (
    <div className="bg-[#ffffff] text-[#121826]  w-full  h-screen px-10">
      <div className="flex  items-center justify-around flex-col md:flex-row ">
        <div className=" bg-slate-200 w-[400px] h-screen hidden lg:block">
          <Link to={"/Login"}>
            <div className="text-left justify-center  mt-10 p-4">
              <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">
                <ChevronLeft className="mr-2 text-[#121826]" />
                BandBoost
              </h1>
            </div>
          </Link>

          <Testifiers />
        </div>

           <div className="lg:hidden mt-5 mr-20 ">
            <Link to={"/Login"}>
            <div className="text-left justify-center p-4">
              <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">
                <ChevronLeft className="mr-2 text-[#121826]" />
                BandBoost
              </h1>
            </div>
          </Link>
           </div>
        <div className="flex flex-col items-center justify-center px-6 md:px-20 ">
          {/* Mobile Header */}

          <h2 className="text-3xl font-bold text-center mb-2">
            Email <span className="text-[#186EC6]">Verification</span>
          </h2>
          <p className="text-[#121826] mb-6">Verify your email</p>

          <div className="border border-green-500 bg-green-50 text-sm rounded-lg py-3 px-5 flex items-center mb-8">
            <Check className="text-green-500 mr-2" size={18} />
            <span>
              We have sent a code to <b>deborahoby693@gmail.com</b>
            </span>
          </div>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-3 mb-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {inputRefs.current[index] = el}}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-12 h-12 text-center border-2 rounded-xl text-xl font-semibold outline-none transition-all
                  ${
                    error && otp[index].trim() === ""
                      ? "border-red-500"
                      : digit
                      ? "border-[#186EC6] bg-[#E6F0FA]"
                      : "border-[#121826] hover:border-[#186EC6]"
                  }`}
              />
            ))}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <p className="text-[#121826] text-sm mb-8">
            Resend OTP in
            <span className="text-[#186EC6] font-medium">{formattedTime}</span>
          </p>

          {/* Button changes background when all OTP digits are filled */}
          <Button
            onClick={handleNext}
            disabled={!isOtpComplete}
            className={`w-full rounded-xl transition-all duration-300
              ${
                isOtpComplete
                  ? "font-semibold  w-[80px] h-[40px] xl:w-full xl:h-[54px]  rounded-lg text-[13px] leading-[19.5px]  xl:text-base xl:leading-[24px]  bg-[#186EC6] hover:bg-[#f5f5f5] text-[#f5f5f5]   hover:text-[#186EC6] hover:border-2 hover:border-[#186EC6]"
                  : "bg-gray-300   w-[80px] h-[40px] xl:w-[112px] xl:h-[54px]  rounded-lg text-[13px] leading-[19.5px]  xl:text-base xl:leading-[24px]  text-gray-500 cursor-not-allowed"
              }`}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailOtp;
