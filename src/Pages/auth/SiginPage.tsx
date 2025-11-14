import { useState } from "react";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { Input } from "../../components/ui/input";
import { Eye, EyeOff, Mail, User, MessageCircle, Lock, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../lib/validations";
import type { signUpValues } from "../../lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";


const steps = [
  { number: 1, label: "Select Product", description: "PTE-Academic" },
  { number: 2, label: "Personal Details", description: "Enter your basic information" },
  { number: 3, label: "Email Verification", description: "Verify your email" },
];

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpValues>({
    resolver: zodResolver(signUpSchema),
    // mode: "onTouched",
  });

  const onSubmit = async (data: signUpValues) => {
    console.log("Form Data:", data);
    navigate("/EmailVerification");

  };

  // Base input styles (for reuse)
  const inputClass = `
    h-[48px]
    rounded-[12px]
    border
    border-[#121826]
    focus:border-[#186EC6]
    transition-all
    duration-200
    w-full
  `;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#ffffff] text-[#121826] px-10">
      {/* Sidebar */}
      <div className="md:w-1/3 lg:w-1/4 p-8 rounded-r-xl hidden md:block ">
        <div className="mb-6">
          <Link to={"/"}>
            <div className="text-left justify-center p-4">
            <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">  <ChevronLeft className="mr-2 text-[#121826]" />BandBoost</h1>
            </div>
          </Link>
        </div>
        <ul className="space-y-6">
          {steps.map((step) => (
            <li key={step.number} className="flex items-start gap-3">
              <div
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold",
                  step.number === 1
                    ? "bg-[#186EC6] text-white border-[#186EC6]"
                    : step.number === 2
                    ? "border-[#186EC6] text-[#186EC6]"
                    : "border-[#12182633] text-[#12182680]"
                )}
              >
                {step.number}
              </div>
              <div>
                <p
                  className={cn(
                    "font-medium",
                    step.number <= 2 ? "text-[#186EC6]" : "text-[#121826]"
                  )}
                >
                  {step.label}
                </p>
                <p className="text-sm text-[#121826]">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Form */}
       <div className="md:hidden mt-5">
           <Link to={"/"}>
            <div className="text-left justify-center p-4 items-start">
            <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">  <ChevronLeft className="mr-2 text-[#121826]" />BandBoost</h1>
            </div>
          </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col justify-center w-full  p-8">
           

        <div className="max-w-xl mx-auto w-full">
          <h1 className="text-2xl font-bold mb-2 text-[#121826]">
            Personal <span className="text-[#186EC6]">Details</span>
          </h1>
          <p className="text-[#121826] mb-8">Enter your basic information</p>

          {/* Name */}
          <div className="mb-4">
           <div className=" relative">
            <Input
              placeholder="Name"
              type="text"
              className={inputClass}
              {...register("name")}
            />
            <User className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#186EC6]" />
           
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
          <div className=" relative">
            <Input
              placeholder="Email"
              type="email"
              className={inputClass}
              {...register("email")}
            />
            <Mail className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#186EC6]" />
           
          </div>
          {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* WhatsApp Number */}
          <div className="mb-4">
            <div className="flex gap-2">
              <select
                className="border border-[#121826] focus:border-[#186EC6] rounded-l-md px-3 text-[#121826] h-[48px] transition-all duration-200"
                {...register("countryCode")}
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+234">🇳🇬 +234</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <div className="relative w-full">
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  maxLength={11}
                  inputMode="numeric"
                  minLength={10}
                  className={inputClass}
                  {...register("phoneNumber")}
                  onInput={(e) => {
                    const input = e.target as HTMLInputElement;
                    input.value = input.value.replace(/[^0-9]/g, "");
                  }}
                
                />
                <MessageCircle className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#186EC6]" />
              </div>
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6 relative ">
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className={`${inputClass} pl-10 pr-10`}
              {...register("password")}
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#186EC6]" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#186EC6] bg-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              className="border-[#121826] border-2 text-[#121826] hover:bg-[#121826] hover:text-white font-semibold 
              w-[80px] h-[38px] xl:w-[250px] xl:h-[54px] 
              rounded-lg text-[13px] leading-[19.5px] 
              xl:text-base xl:leading-[24px] "
            >
              <Link to="/Registeration">Back</Link>
            </Button>
            <Button
              type="submit"
              className="font-semibold 
              w-[80px] h-[38px] xl:w-[250px] xl:h-[54px] 
              rounded-lg text-[13px] leading-[19.5px] 
              xl:text-base xl:leading-[24px] 
              bg-[#186EC6] hover:bg-[#f5f5f5] 
              text-[#f5f5f5] 
              hover:text-[#186EC6] hover:border-2 hover:border-[#186EC6]"             >
             Next
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
