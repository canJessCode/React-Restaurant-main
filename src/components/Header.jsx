import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <div
      className={`${scroll ? " bg-back shadow-md" : ""
        } fixed top-0 left-0 w-full z-20 bg-back shadow-sm `}
    >

      <nav className="relative container mx-auto flex items-center justify-between  ">
        <div className="">
          <h4 className="text-5xl font-semibold mt-[10px]">Shan Sushi</h4>
          <span className="text-[1rem] font-bold opacity-80 m-[2px]">
            Sushi Restaurant
          </span>

        </div>
      </nav>
    </div>
  );
};

export default Header;
