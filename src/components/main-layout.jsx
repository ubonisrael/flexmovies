import FavContext from "@/context/FavouriteContext";
import ListContext from "@/context/WatchListContext";
import React from "react";

export const MainLayout = ({ children }) => {
  return (
     <FavContext>
          <ListContext>
          {children}
          </ListContext>
        </FavContext>
  );
};
