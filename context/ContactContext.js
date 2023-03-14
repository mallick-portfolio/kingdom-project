import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
export const contactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [time, setTime] = useState("month");

  const contactInitial = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  };

  const [contact, setContact] = useState(contactInitial);
  
  const pstContact = async () => {
    try {
      const res = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },

        body: JSON.stringify({
          data: {
            ...contact,
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
    <contactContext.Provider
      value={{ contact, setContact, pstContact, contactInitial, time, setTime }}
    >
      {children}
    </contactContext.Provider>
  );
};

// AddressLine1: "fasf",
// AddressLine2: "asf",
// City: "saf",
// Country: "CA",
// DateofBirth: "2023-03-02",
// Email: "rabbim74@gmail.com",
// EmergencyEmail: "aslkfj@gmail.com",
// EmergencyPhone: "4141",
// FirstName: "asfd",
// InterestAreas: "sadf",
// InterestPlace: "asf",
// LastName: "asdf",
// Phone: "4545",
// PostalCode: "10",
// Skills: "sdfsa",
// State: "sadf",
// },
