import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { createContext, useContext, useEffect, useState } from "react";
import { getMe, postLogout } from "../helpers/Api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        setIsLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logout = async (cb) =>{
    setIsLoggedIn(false);
    setUser(null);

    await postLogout();

    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");

    cb();
  } 

  const values = {
    isLoggedIn,
    user,
    login,
    logout
  };

  if(loading){
    return(
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" color="red.500"/>
      </Flex>
    )
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
