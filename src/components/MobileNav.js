import React, { useState } from "react";
import glogo from "/Programming/typeahead/src/logos/logo.png";
import burger from "/Programming/typeahead/src/logos/burger.png";
import notifs from "/Programming/typeahead/src/logos/notifs.png";

function MobileNav() {
  const [disp, setDisp] = useState("hidden");

  const burgerAppear = () => {
    setDisp("flex");
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
          />
          <img src={glogo} className="w-[50px] h-[50px]" />
          <img src={notifs} className="w-[25px] h-[25px]" />
        </div>
      </div>
      <div
        className={`absolute w-full h-[350px] flex bg-[#21262d] left-0 top-[62px] ${disp}`}
      ></div>
    </>
  );
}

export default MobileNav;
