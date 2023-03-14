import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";

export const InvextContext = createContext();

export const InvestProvider = ({ children }) => {

  const InvestInitial = {
    FirstName: "",
    LastName: "",
    Email: "",
    Phone:"",
    ProjectCategories: "on-time",
    InvestorType: "",
    InvestmentLocation: "",
    InvestmentAmount: "",
    InvestmentStartTime: "",
  };

  const [invest, setInvest] = useState(InvestInitial);

  const postInvest = async () => {
    try {
      const res = await fetch(`${API_URL}/api/Invests`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },

        body: JSON.stringify({
          data: {
            ...Invest,
          },
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InvextContext.Provider
      value={{ invest, setInvest, InvestInitial, postInvest }}
    >
      {children}
    </InvextContext.Provider>
  );
};
