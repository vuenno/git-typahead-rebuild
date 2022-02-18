import React, { useRef, useState, useEffect, useCallback } from "react";
import glogo from "./logos/logo.png";
import notfound from "./logos/not_found.png";
import DropdownValues from "./DropdownValues";
import RightSide from "./RightSide";
import MobileNav from "./MobileNav";

function Navbar() {
  const buttons = ["Pull requests", "Issues", "Marketplace", "Explore"];
  const inpRef = useRef();
  const [user, setUser] = useState([]);
  const [recUsers, setRec] = useState({ name: "", avatar_link: "", id: "" });
  const [recDisp, setDisp] = useState("hidden");
  const [setInp, setShowInput] = useState(false);
  const [mobRespInp, setMobInp] = useState("hidden");
  const [test, setTest] = useState("");

  useEffect(() => {
    const loadUsers = () => {
      fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((data) => {
          const { login, avatar_url, message, id } = data;
          if (message) {
            setRec({ name: "Not found", avatar_link: notfound });
          }
          if (login) {
            setRec({ name: login, avatar_link: avatar_url, id: id });
          }
          console.log(data);
        });
    };
    if (inpRef.current.value) {
      loadUsers();
    }
    if (inpRef.current.value === "") {
      setDisp("hidden");
      setTest("hidden");
    } else {
      setDisp("flex");
      setTest("flex");
    }
  }, [user]);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const deb = useCallback(debounce((change) => setUser(change), 200));

  const handleChange = (change) => {
    deb(change);
  };

  useEffect(() => {
    if (setInp === false) {
      setMobInp("hidden");
    } else {
      setMobInp("block");
    }
  }, [setInp]);

  useEffect(() => {
    if (mobRespInp === "hidden") {
      setTest("hidden");
    } else {
      setTest("hidden");
    }
  }, [mobRespInp]);

  return (
    <>
      <MobileNav setShowInput={setShowInput} />
      <div className="w-full h-[62px] flex justify-between bg-[#21262d] items-center mobile:h-[5px]">
        <div className="w-[40%] h-full flex justify-evenly items-center">
          <img
            src={glogo}
            className="w-[50px] h-[50px] mobile:hidden"
            alt="github_logo"
          />
          <input
            type="text"
            className={`bg-black rounded-[5px] h-[30px] ml-2 mobile:absolute mobile:top-[70px] mobile:${mobRespInp} mobile:left-[20px] mobile:w-[90%] border-gray-600 border-[1px] text-[14px] p-3 w-[272px] outline-none text-white text-start placeholder-gray-300`}
            placeholder="Search or jump to..."
            id="input-search"
            autoComplete="false"
            ref={inpRef}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="w-[50%] h-full flex justify-evenly items-center mobile:hidden">
            {Object.entries(buttons).map((b, index) => (
              <p
                className="font-semibold text-[14px] text-white hover:opacity-50 cursor-pointer"
                key={index}
              >
                {b[1]}
              </p>
            ))}
          </div>
        </div>
        <DropdownValues
          name={recUsers.name}
          avatarlink={recUsers.avatar_link}
          recommendationDisplay={recDisp}
          testino={test}
        />
        <RightSide />
      </div>
    </>
  );
}

export default Navbar;
