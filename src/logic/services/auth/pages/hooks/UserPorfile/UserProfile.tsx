import React from "react";
import s from "./UserProfile.module.scss";
const UserProfile = () => {
  return (
    <div>
      <div className={s.user}>
        <div className="container">
          <div className={s.bacImage}></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
