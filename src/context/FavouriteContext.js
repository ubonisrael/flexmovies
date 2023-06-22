import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthUserContext";

export const FavouriteContext = createContext([]);

export const useFavContext = () => useContext(FavouriteContext);

export default function FavContext({ children }) {
  const {user} = useAuth();
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const q = query(collection(db, "users", user.uid, "favorites"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let favlist = [];
      QuerySnapshot.forEach((doc) => {
        favlist.push(doc.data());
      });
      setFavourites(favlist);
    });

    return () => unsubscribe;
  }, [user]);

  return (
    <FavouriteContext.Provider value={favourites}>
      {children}
    </FavouriteContext.Provider>
  );
}
