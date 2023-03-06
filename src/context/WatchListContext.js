import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthUserContext";

export const WatchListContext = createContext([]);

export const useWatchContext = () => useContext(WatchListContext);

export default function ListContext({ children }) {
  const {user, loading} = useAuth();
  const [watchlist, setList] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const q = query(collection(db, "users", user.uid, "watchlist"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let wlist = [];
      QuerySnapshot.forEach((doc) => {
        wlist.push(doc.data());
      });
      setList(wlist);
    });

    return () => unsubscribe;
  }, [user]);

  return (
    <WatchListContext.Provider value={watchlist}>
      {children}
    </WatchListContext.Provider>
  );
}
