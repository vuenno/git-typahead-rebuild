import React from "react";

function InputDropdown({ profilePicture, username, display }) {
  return (
    <>
      <div
        className={`absolute left-[85px] top-[62px] bg-black w-[272px] h-[50px] rounded-bl-[5px] rounded-br-[5px] flex justify-start items-center ${display}`}
      >
        <div className="w-[50px] h-full flex justify-center items-center">
          <img
            src={profilePicture}
            alt="some"
            className="w-[30px] h-[30px] rounded-[7px]"
          ></img>
        </div>
        <div className="w-[70%] h-full flex justify-start items-center">
          <p className="font-semibold text-[14px] text-white">{username}</p>
        </div>
      </div>
    </>
  );
}

export default InputDropdown;
