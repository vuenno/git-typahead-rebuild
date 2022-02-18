import React, { useEffect, useState } from "react";
import InputDropdown from "./InputDropdown";

function FetchedComp({ name, avatarlink, recommendationDisplay }) {
  const [newName, setName] = useState("");
  const [avatarLink, setAvatarLink] = useState("");

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
      />
    </>
  );
}

export default FetchedComp;
