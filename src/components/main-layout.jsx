import { useAuth } from "@/context/AuthUserContext";
import FavContext from "@/context/FavouriteContext";
import ListContext from "@/context/WatchListContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import Spinner from "./spinner";

export const MainLayout = ({ children }) => {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading]);

  return (
    <>
      {loading && !user ? (
        <Spinner />
      ) : user ? (
        <FavContext>
          <ListContext>
            <Navbar />
            <Header />
            {children} 
            <Footer />
          </ListContext>
        </FavContext>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
