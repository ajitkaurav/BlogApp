import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../Config/Appwrite";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function login(email, password) {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    window.location.replace("/About");
  }

  async function logout() {
    console.log("logout");
    await account.deleteSession("current");
    setUser(null);
    navigate("/Login");
  }

  async function registerNewUser(email, password, username) {
    await account.create(ID.unique(), email, password, username);
    navigate("/Login")
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, registerNewUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContext;
