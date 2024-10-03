import Header from "@/app/nav/header";
import SocialButton from "@/app/components/socialButton";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function RootLayout({ children }) {
  return (
    <main>
      <Header />

      <div className="hidden fixed lg:flex  p-2 rounded-lg lg:flex-col top-[10em] z-50  left-[2em]">
        <SocialButton>
          <BiLogoGmail />
        </SocialButton>

        <div className="flex flex-col mt-4">
          <SocialButton>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton>
            <FaInstagram />
          </SocialButton>
          <SocialButton>
            <FaFacebook />
          </SocialButton>
          <SocialButton>
            <FaTwitter />
          </SocialButton>
          <br />
          <br />
          <br />
        </div>
      </div>

      {children}
    </main>
  );
}
