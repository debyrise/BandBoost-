import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Registeration = () => {
    const steps = [
        { number: 1, label: "Select Product", description: "Choose your exam" },
        { number: 2, label: "Personal Details", description: "Enter your basic information" },
        { number: 3, label: "Email Verification", description: "Verify your email" },
      ];
      
      const exams = [
        { id: "ielts-academic", label: "IELTS ACADEMIC", color: "bg-red-50 border-red-500 text-red-600" },
        { id: "ielts-general", label: "IELTS GENERAL", color: "bg-red-50 border-red-500 text-red-600" },
      ];
      const [selectedExam, setSelectedExam] = useState<string | null>(null);


  return (

    <div className="h-full flex flex-col md:flex-row bg-[#f5f5f5] text-[#121826] px-10">
    {/* Sidebar Steps */}
    <div className="md:w-1/3 lg:w-1/4 bg-slate-50 p-6 rounded-r-xl hidden md:block ">
        <Link to={"/"}>
            <div className="text-left justify-center p-4">
            <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">  <ChevronLeft className="mr-2 text-[#121826]" />BandBoost</h1>
            </div>
          </Link>
      <ul className="space-y-6">
        {steps.map((step) => (
          <li key={step.number} className="flex items-start gap-3">
            <div
              className={cn(
                "w-8 h-8 flex items-center justify-center rounded-full border-2 font-semibold",
                step.number === 1 ? "border-[#186EC6] text-[#186EC6]" : "border-[#121826] text-[#121826]"
              )}
            >
              {step.number}
            </div>
            <div>
              <p
                className={cn(
                  "font-medium",
                  step.number === 1 ? "text-[#186EC6]" : "text-[#121826]"
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

    {/* Main Content */}
      <div>
      <div className="md:hidden mt-5  ">
       <Link to={"/"}>
            <div className="text-left justify-center p-4">
            <h1 className="text-3xl font-bold text-[#121826] flex items-center mb-8">  <ChevronLeft className="mr-2 text-[#121826]" />BandBoost</h1>
            </div>
          </Link>
      </div>
    <main className=" flex flex-col justify-center p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">
          Select <span className="text-[#186EC6]">Product</span>
        </h1>
        <p className="text-[#121826] mb-8">Choose your exam</p>

        {/* Exam Options */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {exams.map((exam) => (
            <Card
              key={exam.id}
              onClick={() => setSelectedExam(exam.id)}
              className={cn(
                "cursor-pointer border-2 transition-all hover:shadow-md ",
                selectedExam === exam.id
                  ? `${exam.color} ring-1 ring-offset-1`
                  : "border-gray-200"
              )}
            >
              <CardContent className="flex items-center justify-center h-20 text-center font-medium ">
                {exam.label}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Button */}
        <Button
          disabled={!selectedExam}
          className="font-semibold 
          w-full h-[40px]  xl:h-[54px] 
          rounded-lg text-[13px] leading-[19.5px] 
          xl:text-base xl:leading-[24px] 
          bg-[#186EC6] hover:bg-[#f5f5f5] 
          text-[#f5f5f5] 
          hover:text-[#186EC6] hover:border-2 hover:border-[#186EC6]"         >
            <Link to="/Sign-Up">Next</Link>
        </Button>

        <p className="text-sm text-center mt-6 text-[#121826]">
          Already have an account?{" "}
          <a className="text-[#186EC6] font-medium hover:underline">
            <Link to="/Login">Sign In</Link>
          </a>
        </p>
        <p className="text-xs text-center mt-2 text-gray-400">
          By creating this account, you agree to our{" "}
          <a href="#" className="text-[#186EC6] hover:underline">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#186EC6] hover:underline">
            terms of use
          </a>
          .
        </p>
      </div>
    </main>
    </div>
  </div>

  )
}

export default Registeration