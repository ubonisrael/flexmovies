import FavContext from "@/context/FavouriteContext";
import ListContext from "@/context/WatchListContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout = ({ children }) => {

  return (
    <>
        <FavContext>
          <ListContext>
            <Header />
            {children} 
            <Footer />
          </ListContext>
        </FavContext>
    </>
  );
};
