// import React, { useState } from "react";
// import { UserInfoTokenContext } from "../Context/UserInfoTokenContext";
//
// export const UserInfoTokenProvider = ({ children }) => {
//   const [UserInfoToken, setUserInfoToken] = useState(false);
//
//   const updateUserInfoToken = (skipAuthInformation) => {
//     setUserInfoToken(skipAuthInformation);
//   };
//   return (
//     <UserInfoTokenContext.Provider
//       value={{
//         UserInfo: UserInfoToken,
//         updateUserInfo: updateUserInfoToken,
//       }}
//     >
//       {children}
//     </UserInfoTokenContext.Provider>
//   );
// };

import React, { useState } from "react";
import { UserInfoToken } from "../Context/UserInfoTokenContext";

export const UserInfoTokenPro = ({ children }) => {
  const [UserInfo, setUserInfoTok] = useState(false);

  const updateUserInfo = (skipAuthInformation) => {
    setUserInfoTok(skipAuthInformation);
  };
  return (
    <UserInfoToken.Provider
      value={{
        UserInfo: UserInfo,
        updateUserInfo: updateUserInfo,
      }}
    >
      {children}
    </UserInfoToken.Provider>
  );
};
