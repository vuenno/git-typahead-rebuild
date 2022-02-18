import React from "react";
import caret from "./logos/caret.png";
import plus from "./logos/plus.png";
import notifs from "./logos/plus.png";
import userlogo from "./logos/userlogo.png";

function RightSide() {
  return (
    <>
      <div className="w-1/2 h-full flex justify-end items-center mr-5 mobile:hidden">
        <div className="w-[14%] h-full flex justify-evenly items-center ">
          <img
            src={notifs}
            className="w-[20px] h-[20px] mr-2"
            id="notification-icon"
            alt="notification_icon"
          />

          <div className="w-[40px] h-[40px] flex items-center">
            <img src={plus} alt="plus" className="w-[20px] h-[18px]" />
            <img src={caret} alt="caret" className="w-[10px] h-[10px]" />
          </div>
          <img src={userlogo} alt="user_logo" className="w-[30px] h-[30px]" />
        </div>
      </div>
    </>
  );
}

export default RightSide;
