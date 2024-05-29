import st from "../Main/Main.module.scss";
import { useState } from "react";

export default function Main({
  isUserListOpen,
  isPostListOpen,
  isImgListOpen,
  descriptionUser,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextUser = () => {
    if (currentIndex < descriptionUser.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const goToPreviousUser = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className={st.description}>
      <div className={st.containerUser}>
        {isUserListOpen && (
          <div className={st.userList}>
            <h1>Users:</h1>
            <ol>
              {descriptionUser.map((user, index) => (
                <li key={index}>
                  {user.name} <button>delete</button>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div className={st.containerPost}>
        {isPostListOpen && (
          <div className={st.postList}>
            <h1>Post:</h1>
            {descriptionUser.length > 0 && (
              <div className={st.post}>
                <button onClick={goToPreviousUser}>Back</button>
                <p>{descriptionUser[currentIndex].name}</p>
                <button onClick={goToNextUser}>Next</button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className={st.containerImg}>
        {isImgListOpen && (
          <div className={st.imgList}>
            <h1>Images</h1>
          </div>
        )}
      </div>
    </div>
  );
}
