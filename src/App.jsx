// import React from "react";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  const [descriptionUser, setDescriptionUser] = useState([]);
  async function getDescription() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      if (isUserListOpen === false) {
        setDescriptionUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const [isUserListOpen, setIsUserListOpen] = useState(false);
  const [isPostListOpen, setIsPostListOpen] = useState(false);
  const [isImgListOpen, setIsImgListOpen] = useState(false);

  const handleUserClick = (section) => {
    if (section === "users") {
      setIsUserListOpen(!isUserListOpen);
    } else if (section === "posts") {
      setIsPostListOpen(!isPostListOpen);
    } else if (section === "images") {
      setIsImgListOpen(!isImgListOpen);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapperContainer">
          <Header
            getDescription={getDescription}
            descriptionUser={descriptionUser}
            handleUserClick={handleUserClick}
          />
          <Main
            descriptionUser={descriptionUser}
            isUserListOpen={isUserListOpen}
            isPostListOpen={isPostListOpen}
            isImgListOpen={isImgListOpen}
          />
        </div>
      </div>
    </>
  );
}

export default App;
