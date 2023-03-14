import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
// 1. import `NextUIProvider` component
import { AuthProvider } from "@/context/AuthContext";
import { VolunteerProvider } from "@/context/VolunteerContext";
import { ContactProvider } from "@/context/ContactContext";
import { DonationProvider } from "@/context/DonationContext";
import { MembershipProvider } from "@/context/MembershipContext";
import { VendorProvider } from "@/context/VendorContext";
import { InvestProvider } from "@/context/InvestContext";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <ThemeProvider>
      <AuthProvider>
        <MembershipProvider>
          <VolunteerProvider>
            <VendorProvider>
              <InvestProvider>
                <DonationProvider>
                  <ContactProvider>
                    <Component {...pageProps} />
                  </ContactProvider>
                </DonationProvider>
              </InvestProvider>
            </VendorProvider>
          </VolunteerProvider>
        </MembershipProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
