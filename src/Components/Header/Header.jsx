// import React from "react";
// import { useState } from "react";
import st from "../Header/Header.module.scss";

export default function Header({ handleUserClick, getDescription }) {
  return (
    <div className={st.users}>
      <div
        className={st.user}
        onClick={() => handleUserClick("users", getDescription())}
      >
        Users
      </div>
      <div
        className={st.post}
        onClick={() => handleUserClick("posts", getDescription())}
      >
        Post
      </div>
      <div
        className={st.img}
        onClick={() => handleUserClick("images", getDescription())}
      >
        Images
      </div>
    </div>
  );
}
