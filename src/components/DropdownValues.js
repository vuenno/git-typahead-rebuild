import React, { useEffect, useState } from "react";
import InputDropdown from "./InputDropdown";

function DropdownValues(props) {
  const [newName, setName] = useState("");
  const [avatarLink, setAvatarLink] = useState("");
  const { name, avatarlink, recommendationDisplay, testino } = props;
  useEffect(() => {
    const loadData = () => {
      setName(name);
      setAvatarLink(avatarlink);
    };
    loadData();
  }, [name]);

  return (
    <>
      <InputDropdown
        username={newName}
        profilePicture={avatarLink}
        display={recommendationDisplay}
        testr={testino}
      />
    </>
  );
}

export default DropdownValues;
