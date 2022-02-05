// import { createContext } from "react";
//
// export const UserInfoTokenContext = createContext({
//   userInfo: [],
//   updateUserInfo: () => {
//     throw new Error("update() not implemented");
//   },
// });

import { createContext } from "react";

export const UserInfoToken = createContext({
  userInfo: [],
  updateUserInfp: () => {
    throw new Error("update() not implemented");
  },
});
