import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";
import "../app/globals.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
