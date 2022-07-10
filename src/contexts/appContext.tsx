import { ReactNode } from "react";

import { AuthContextProvider } from "./authContext";

type GlobalAppContextProps = {
  children: ReactNode;
};

export default function AppContexts({ children }: GlobalAppContextProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
