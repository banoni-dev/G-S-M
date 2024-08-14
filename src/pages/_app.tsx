import Footer from "@/app/(home)/components/Footer";
import NavBar from "@/app/(home)/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";
import "../app/globals.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NavBar />
      <Component {...pageProps} />
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </ThemeProvider>
  );
}
