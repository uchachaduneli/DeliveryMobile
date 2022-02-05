import React, { useState } from "react";
import { UserInfoContext } from "../Context/UserInfoContext";

export const UserInfoProvider = ({ children }) => {
  const [UserInfo, setUserInfo] = useState(false);

  const updateUserInfo = (skipAuthInformation) => {
    setUserInfo(skipAuthInformation);
  };
  return (
    <UserInfoContext.Provider
      value={{
        UserInfo: UserInfo,
        updateUserInfo: updateUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
