import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";

export function useAuthContext() {
  return useContext(AuthContext);
}
