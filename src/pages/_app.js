
import '@/styles/globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import { DM_Sans } from "next/font/google";


const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });


export default function App({ Component, pageProps }) {
  
  return(

    <div className={dmSans}>
     
      <ThemeProvider>
      
      <Component {...pageProps} />
      
      </ThemeProvider>
      
      
    </div>
  );
   
}