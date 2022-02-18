import React, { useRef, useState, useEffect, useCallback } from "react";
import glogo from "/Programming/typeahead/src/logos/logo.png";
import caret from "/Programming/typeahead/src/logos/caret.png";
import plus from "/Programming/typeahead/src/logos/plus.png";
import notifs from "/Programming/typeahead/src/logos/notifs.png";
import userlogo from "/Programming/typeahead/src/logos/userlogo.png";
import notfound from "/Programming/typeahead/src/logos/not_found.png";
import FetchedComp from "./FetchedComp";

function Navbar() {
  const buttons = ["Pull requests", "Issues", "Marketplace", "Explore"];
  const inpRef = useRef();
  const [user, setUser] = useState([]);
  const [recUsers, setRec] = useState({ name: "", avatar_link: "", id: "" });
  const [recDisp, setDisp] = useState("hidden");

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
    } else {
      setDisp("flex");
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

  const deb = useCallback(debounce((change) => setUser(change), 400));

  const handleChange = (change) => {
    deb(change);
  };

  return (
    <>
      <div className="w-full h-[62px] flex justify-between bg-[#21262d] items-center">
        <div className="w-[40%] h-full flex justify-evenly items-center">
          <img src={glogo} className="w-[50px] h-[50px]" alt="github_logo" />

          <input
            type="text"
            className={`bg-black rounded-[5px] h-[30px] ml-2 border-gray-600 border-[1px] text-[14px] p-3 w-[272px] outline-none text-white text-start placeholder-gray-300`}
            placeholder="Search or jump to..."
            id="input-search"
            autoComplete="false"
            ref={inpRef}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="w-[50%] h-full flex justify-evenly items-center">
            {Object.entries(buttons).map((b, index) => (
              <p
                className="font-semibold text-[14px] text-white hover:opacity-50 cursor-pointer"
                key={index}
              >
                {b[1]}
              </p>
            ))}

            <FetchedComp
              name={recUsers.name}
              avatarlink={recUsers.avatar_link}
              recommendationDisplay={recDisp}
            />
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end items-center mr-5">
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
      </div>
    </>
  );
}

export default Navbar;
