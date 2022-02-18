import React from "react";

function InputDropdown(props) {
  const { profilePicture, username, display, mobDisp, testr } = props;

  const navigate = () => {
    window.open(`https://github.com/${username}`);
  };
  return (
    <>
      <div
        className={`absolute left-[85px] top-[50px] bg-black w-[272px] h-[50px] rounded-bl-[5px] rounded-br-[5px] flex justify-start items-center ${display} mobile:${testr} mobile:flex mobile:absolute mobile:top-[100px] mobile:left-7 mobile:w-[90%] cursor-pointer`}
        onClick={navigate}
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
