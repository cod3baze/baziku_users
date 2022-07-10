import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { destroyCookie, setCookie } from "nookies";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { authGoogleAppContext } from "../services/firebase";

export type UserGoogleAccount = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  token: string;
};

type AuthContextData = {
  user: UserGoogleAccount;
  /**
   * sign with google using popUp window.
   * - after login, set user info on App Global State
   */
  signInWithGoogle(): Promise<void>;
  signOutOnGoogle(): Promise<void>;
};

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<UserGoogleAccount>({} as UserGoogleAccount);

  const signInWithGoogle = useCallback(async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(authGoogleAppContext, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      if (result.user) {
        const { displayName, photoURL, uid, email } = result.user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google account.");
        }

        const userToken = token || email;

        const userData = {
          id: uid,
          name: displayName,
          email: String(email),
          avatar: photoURL,
          token: userToken,
        };

        setCookie(undefined, "@cognu_questions.token", userToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });
        setCookie(
          undefined,
          "@cognu_questions.user",
          JSON.stringify(userData, null, 2),
          {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
          }
        );

        setUser(userData);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }, []);

  const signOutOnGoogle = useCallback(async () => {
    try {
      await signOut(authGoogleAppContext);

      destroyCookie(undefined, "@cognu_questions.token");
      destroyCookie(undefined, "@cognu_questions.user");

      setUser({} as UserGoogleAccount);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  // to avoid to many renders on state changes
  const authProviderValue = useMemo(
    () => ({ user, signInWithGoogle, signOutOnGoogle }),
    [user, signInWithGoogle, signOutOnGoogle]
  );

  useEffect(() => {
    const AuthStateChangerUnsubscribe = authGoogleAppContext.onAuthStateChanged(
      (user) => {
        if (user) {
          const { displayName, photoURL, uid, email } = user;

          if (!displayName || !photoURL) {
            throw new Error("Missing information from Google account.");
          }

          setUser((user) => ({
            id: uid,
            name: displayName,
            email: String(email),
            avatar: photoURL,
            token: user?.token || String(email),
          }));
        }
      }
    );

    return () => AuthStateChangerUnsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
}
