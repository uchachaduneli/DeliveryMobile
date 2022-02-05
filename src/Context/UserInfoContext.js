import { createContext } from "react";

export const UserInfoContext = createContext({
  userInfo: [],
  updateUserInfp: () => {
    throw new Error("update() not implemented");
  },
});
