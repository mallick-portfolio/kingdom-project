import { createContext, useEffect, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
export const AuthContext = createContext();
import { destroyCookie } from "nookies";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);

  // useEffect(() => {

  //   checkUserLoggedId();
  // }, []);

  // onst signup = async ({ username, email, password }) => {
  //   const res = await fetch(`${NEXT_URL}/api/signup`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await res.json();

  //   if (data.user) {
  //     setUser(data);
  //   } else {
  //     setError(data);
  //   }
  // };

  // const singin = async ({ email: identifier, password }) => {
  //   const res = await fetch(`${NEXT_URL}/api/signin`, {
  //     method: "POST",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       identifier,
  //       password,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (data.user) {
  //     setUser(data);
  //   } else {
  //     setError(data);
  //   }
  // };

  // const sinout = async (user) => {
  //   setUser(null);
  //   setError(null);
  //   destroyCookie(null, "token");
  // };

  // const checkUserLoggedId = async () => {
  //   const res = await fetch(`${NEXT_URL}/api/user`);
  //   const data = await res.json();

  //   if (res.ok) {
  //     setUser(data);
  //   } else {
  //     setUser(null);
  //   }
  //

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
