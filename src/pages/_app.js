import { MainLayout } from "@/components/main-layout";
import { AuthUserProvider } from "@/context/AuthUserContext";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  
  return (
      <AuthUserProvider>
        <MainLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </MainLayout>
      </AuthUserProvider>
  );
}

