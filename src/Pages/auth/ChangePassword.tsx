import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  type passwordRecoveryValues,
  passwordRecoverySchema,
} from "../../lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Testifiers from "./Testifiers";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<passwordRecoveryValues>({
    resolver: zodResolver(passwordRecoverySchema),
  });

  const onSubmit = async (data: passwordRecoveryValues) => {
    console.log("data", data);
    navigate("/Login");
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
    <React.Fragment>
      <div className="bg-[#ffffff] text-[#121826]  w-full mt-5 h-full px-[5px] xl:px-[50px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-6 bg-slate-200 w-[400px] h-screen hidden lg:block">
            <Link to={"/Login"}>
              <div className="text-left justify-center p-4">
                <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">
                  <ChevronLeft className="mr-2 text-[#121826]" />
                  BandBoost
                </h1>
              </div>
            </Link>
            <Testifiers />
          </div>

          <div className="lg:hidden ">
            <Link to={"/Login"}>
              <div className="text-left justify-center p-4">
                <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">
                  <ChevronLeft className="mr-2 text-[#121826]" />
                  BandBoost
                </h1>
              </div>
            </Link>
          </div>

          <div className="w-full  mt-5 ">
            <div className="text-center">
              <h1 className="text-xl leading-[150%] tracking-[0.2px] font-medium text-[#121826]">
                Reset Password?
              </h1>
              <p className="mt-3 text-[#6978A0] text-sm leading-[150%] font-light">
                No worries, it happens to the rest of us and we got you covered
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 flex flex-col justify-center p-8"
            >
              <div className="space-y-6">
                <div className="mb-6 relative ">
                  <Input
                    placeholder="New Password"
                    type={showPassword ? "text" : "password"}
                    onPaste={(e) => e.preventDefault()}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    className={`${inputClass} pl-5 pr-10`}
                    {...register("newPassword")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#186EC6] bg-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.newPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Input
                      type={showResetPassword ? "text" : "password"}
                      onPaste={(e) => e.preventDefault()}
                      onCopy={(e) => e.preventDefault()}
                      onCut={(e) => e.preventDefault()}
                      placeholder="Confirm Password"
                      className={`${inputClass} pl-5 pr-10`}
                      {...register("confirmPassword")}
                    />

                    <button
                      type="button"
                      onClick={() => setShowResetPassword(!showResetPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-[#186EC6] bg-white"
                    >
                      {showResetPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 items-center flex justify-center">
                <Button
                  type="submit"
                  variant="outline"
                  // disabled={isLoading}

                  className="font-semibold 
                  w-[150px] h-[40px] xl:w-full xl:h-[54px] 
                  rounded-lg text-[13px] leading-[19.5px] 
                  xl:text-base xl:leading-[24px] 
                  bg-[#186EC6] hover:bg-[#f5f5f5] 
                  text-[#f5f5f5]  
                  hover:text-[#186EC6] hover:border-2 hover:border-[#186EC6]"
                >
                  Reset Password
                  {/* {isLoading ? "Resetting..." : "Reset Password"} */}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePassword;
