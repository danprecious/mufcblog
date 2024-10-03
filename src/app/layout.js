import { ContextProvider } from "./utils/context";
import '@/app/globals.css'

export const metadata = {
  title: "mufcstand blog",
  description: "Get all Manchester united updates here, Live!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="bg-bg text-textcolor">
        <ContextProvider>
          
         <div>
          {children}
          </div> 
        </ContextProvider>
      </body>
    </html>
  );
}

