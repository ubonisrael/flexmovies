import { useAuth } from "@/context/AuthUserContext";
import FavContext from "@/context/FavouriteContext";
import ListContext from "@/context/WatchListContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";

export const MainLayout = ({ children }) => {
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  return (
    <>
      {user ? (
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
