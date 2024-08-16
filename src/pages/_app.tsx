import Footer from "@/app/(home)/components/Footer";
import NavBar from "@/app/(home)/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isDashboard = router.pathname.includes("/dashboard");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {!isDashboard && <NavBar />}
      <Component {...pageProps} />
      {!isDashboard && (
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
