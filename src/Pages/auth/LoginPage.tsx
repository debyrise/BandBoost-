import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { ChevronLeft, Eye, EyeOff,  Lock,  Mail } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginValues } from "../../lib/validations";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Testifiers from "./Testifiers";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginValues>({
    resolver: zodResolver(loginSchema),
  });


  const onSubmit = async (data: loginValues) => {
    console.log("Form Data:", data);
    navigate("/Dashboard");
  };

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
    <div className="bg-[#ffffff] text-[#121826]  w-full  h-screen  px-[5px] xl:px-[50px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className=" bg-slate-200 w-[400px] h-screen hidden lg:block">
          <Link to={"/"}>
            <div className="text-left justify-center p-4">
              <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">
                {" "}
                <ChevronLeft className="mr-2 text-[#121826]" />
                BandBoost
              </h1>
            </div>
          </Link>

          <Testifiers />
        </div>

           <div className="lg:hidden ">
            <Link to={"/"}>
            <div className="text-left justify-center p-4">
              <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">
                {" "}
                <ChevronLeft className="mr-2 text-[#121826]" />
                BandBoost
              </h1>
            </div>
          </Link>
           </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col justify-center  px-8"
        >
         <div className="text-center">
           <h3 className="text-[#121826] text-2xl xl:text-3xl font-semibold mb-5">
               Student {" "}
          <span className="text-[#186EC6] text-2xl xl:text-3xl font-semibold">
            Sign In
          </span>
        </h3> 
        
          </div>        
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
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

           <div className="mb-6">
          <div className=" relative ">
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
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}

            </div>

                <div className="mt-3">
                    <h3 className="flex justify-end items-end text-[16px] font-medium hover:text-[#186EC6]  text-[#186EC6]">
                      
                      <Link to="/ForgetPassword">Forget Password?</Link>
                    </h3>
                </div>
          </div>
         

          <div className=" items-center flex flex-col mt-5 ">
            <Button
              type="submit"
              variant="outline"
              className="font-semibold 
                  w-[100px] h-[40px] xl:w-full xl:h-[54px] 
                  rounded-lg text-[13px] leading-[19.5px] 
                  xl:text-base xl:leading-[24px] 
                  bg-[#186EC6] hover:bg-[#f5f5f5] 
                  text-[#f5f5f5]  
                  hover:text-[#186EC6] hover:border-2 hover:border-[#186EC6]"
            >
              Sign In
            </Button>

            <p className="text-[13px] lg:text-[16px] mt-2 ">
              Dont have an account?
              <span className="text-[#186EC6] hover:text-[#155ea9] cursor-pointer font-semibold  ">
                
                <Link to="/Registeration">Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
