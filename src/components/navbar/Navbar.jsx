import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import logoimage from "../../assets/logo.png"; // Main logo
import smallLogoImage from "../../assets/logoo.png"; // Small logo for <640px
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";

export default function CustomHeader() {
  const items = [
    {
      label: "Study Abroad",
      items: [
        {
          label: "Study In",
        },
        {
          label: "Exams",
        },
        {
          label: "Exams",
        },
      ],
    },
    {
      label: "Bootcamps",
      items: [
        {
          label: "GRE Bootcamp",
        },
        {
          label: "IELTS Bootstrap",
        },
      ],
    },
    {
      label: "Products",
      items: [
        {
          label: "Admit Finder",
        },
        {
          label: "Shortlist Builder",
        },
      ],
    },
    {
      icon: (
        <img
          src={icon1}
          alt="Option"
          style={{ width: "20px", height: "20px" }}
        />
      ),
      label: "Ambitio Pro",
    },
    {
      icon: (
        <img
          src={icon2}
          alt="Option"
          style={{ width: "20px", height: "20px" }}
        />
      ),
      label: "Ambitio Elite",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const start = (
    <img 
      src={isSmallScreen ? smallLogoImage : logoimage} 
      alt="Harvard" 
      className={`mr-10 ml-5 ${isSmallScreen ? 'h-5 w-5' : 'h-6 w-29'}`} 
    />
  );

  const end = (
    <button className="flex items-center gap-2 text-[#B10612] border-[2px] border-[#B10612] px-4 py-2 rounded-md hover:bg-[#B10612] hover:text-white transition ml-5">
      {!isSmallScreen && <i className="pi pi-phone"></i>} {/* Only render icon if not small screen */}
      <span className={`text-xs ${!isSmallScreen ? 'sm:text-base' : ''}`}>
        Speak with our Experts
      </span>
    </button>
  );

  return (
    <Menubar
      model={items}
      start={start}
      end={end}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    />
  );
}




        
        