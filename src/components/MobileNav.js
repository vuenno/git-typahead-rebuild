import React, { useState } from "react";
import glogo from "./logos/logo.png";
import burger from "./logos/burger.png";
import notifs from "./logos/notifs.png";

function MobileNav(props) {
  const [disp, setDisp] = useState("hidden");
  const { setShowInput } = props;

  const burgerAppear = () => {
    setDisp("flex");
    setShowInput((prev) => !prev);
    if (disp === "flex") {
      setDisp("hidden");
    }
  };

  return (
    <>
      <div className="w-full h-[62px] bg-[#21262d] justify-center items-center mobile:flex not_mobile:hidden">
        <div className="w-[90%] h-full flex justify-between items-center">
          <img
            src={burger}
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={burgerAppear}
            alt="burger"
          />
          <img src={glogo} className="w-[50px] h-[50px]" alt="github_logo" />
          <img src={notifs} className="w-[25px] h-[25px]" alt="notifs" />
        </div>
      </div>
      <div
        className={`absolute w-full h-[350px] flex bg-[#21262d] left-0 top-[62px] ${disp}`}
      ></div>
    </>
  );
}

export default MobileNav;
