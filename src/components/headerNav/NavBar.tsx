import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { cn, useOpenMobile } from "../../lib/utils";

const NavBar = () => {
  const openMobile = useOpenMobile();

  const navbar =
    "bg-[#f5f5f5] w-full h-[64px] lg:h-[100px] shadow shadow-[4px_4px_4px_0_rgba(0,0,0,0.1)]";
  const navbarFixed =
    "bg-[#f5f5f5] z-[4000] fixed w-full h-[64px] lg:h-[100px] -top-[100px] transform translate-y-[100px] transition-all ease-out duration-1000 shadow shadow-[4px_4px_4px_0_rgba(0,0,0,0.1)]";

  const [navIsFixed, setNavIsFixed] = React.useState(navbar);

  const toggleNavbarState = React.useCallback(() => {
    if (window.scrollY >= 80) {
      setNavIsFixed(navbarFixed);
    } else {
      setNavIsFixed(navbar);
    }
  }, [navbar]);

  React.useEffect(() => {
    toggleNavbarState();
    window.addEventListener("scroll", toggleNavbarState);
  }, [toggleNavbarState]);

  return (
    <div className={navIsFixed}>
      <div className="mx-auto h-full px-[5px] xl:px-[50px] flex items-center justify-between font-poppins text-[#121826]">
        <div className="flex items-center gap-4 ">
          <Menu
            size={25}
            className="md:hidden cursor-pointer"
            onClick={
              openMobile.isOpen ? () => openMobile.onClose() : () => openMobile.onOpen()
            }
          />
          <Link to={"/"}>
            <div className=" text-left justify-center lg:pt-3  ">
              <h1 className="text-2xl md:text-3xl font-bold">BandBoost</h1>
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className=" items-center justify-between gap-10 cursor-pointer h-full hidden lg:flex ">
          <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-bold font-poppins ">
            <Link to={"/#"}>Home</Link>
          </h2>

          <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-bold font-poppins ">
            <Link to={"/Pricing"}>Pricing</Link>
          </h2>

          <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-bold font-poppins ">
            <a href="#Features">Features</a>
          </h2>

          <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-bold font-poppins ">
            <a href={"#Testimonies"}>Testimonies</a>
          </h2>
        </div>

        {/* Mobile Menu */}
        {openMobile.isOpen && (
          <div
            className={cn(
              "w-full h-screen fixed top-0 left-0 bg-black/10 text-[#121826] xl:hidden z-[40000] transition-all ease-in-out",
              openMobile ? "-right-0" : "-right-[100%]"
            )}
          >
            <div className="w-[80%] bg-[#ffffff] h-full px-8">
              <div className="border-b w-full h-[96px] flex place-items-end pb-1">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-base leading-[24px]">Menu</h2>
                  <X size={25} className="cursor-pointer" onClick={() => openMobile.onClose()} />
                </div>
              </div>
              <div className="flex flex-col gap-8 mt-8">
                <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-semibold font-poppins">
                  <Link to={"/#"}>Home</Link>
                </h2>

                <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-semibold font-poppins ">
                  <Link to={"/Pricing"}>Pricing</Link>
                </h2>

                <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-semibold font-poppins ">
                  <a href="#Features">Features</a>
                </h2>

                <h2 className="hover:text-[#186EC6] hover:underline text-[13px] xl:text-[16px] leading-[19.5px] xl:leading-[24px] font-semibold font-poppins ">
                  <a href={"#Testimonies"}>Testimonies</a>
                </h2>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {/* Sign In button */}
          <Button
            variant="ghost"
            className="font-semibold 
                        w-[80px] h-[38px] xl:w-[112px] xl:h-[54px] 
                        rounded-lg text-[13px] leading-[19.5px] 
                        xl:text-base xl:leading-[24px] 
                        md:text-[#05173E] md:hover:text-white
                        md:bg-[#f5f5f5] 
                        border-2 border-[#05173E] hover:bg-[#05173E]
                        text-[#f5f5f5] hover:text-[#05173E] bg-[#05173E]"
          >
            <Link to="/Login">Sign In</Link>
          </Button>

          {/* Sign Up button */}
          <Button
            className="font-semibold 
                        w-[80px] h-[38px] xl:w-[170px] xl:h-[54px] 
                        rounded-lg text-[13px] leading-[19.5px] 
                        xl:text-base xl:leading-[24px] 
                        bg-[#186EC6] hover:bg-[#f5f5f5] 
                        text-[#f5f5f5] hidden md:block 
                        hover:text-[#186EC6] hover:border-2 hover:border-[#186EC6]"
          >
            <Link to="/Registeration">Sign Up For Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
