import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
export const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  
  const donationInitial = {
    Name: "",
    Email: "",
    Amount: 2,
    Frequency: "on-time",
    CardInfo: "",
  };

  const [donation, setDonation] = useState(donationInitial);

  const postDonation = async () => {
    try {
      const res = await fetch(`${API_URL}/api/donations`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },

        body: JSON.stringify({
          data: {
            ...donation,
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
    <DonationContext.Provider value={{ donation, setDonation, donationInitial , postDonation}}>
      {children}
    </DonationContext.Provider>
  );
};
