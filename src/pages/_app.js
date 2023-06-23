import "@/styles/globals.css";
import { ServicesProvider } from "../context/ServicesProvider";
import { Toaster } from "../components/Toaster";
export default function App({ Component, pageProps }) {
  return (
    <ServicesProvider>
      <Component {...pageProps} />
      <Toaster />
    </ServicesProvider>
  );
}
