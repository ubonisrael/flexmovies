import { db } from "@/firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

export default async function Favourites(movie, state, userid, doctype) {
  //media id will be passed to this function
  //if the id doesn't exist, write it to firebase

  const index = state.findIndex(item => item.id === movie.id)
  const movieId = `${movie.id}`
//   const userId = `${userid}`

  if (index < 0) {
    await setDoc(doc(db, "users", userid, doctype, movieId), movie)
    return
 } else {
    //   else, delete it
    await deleteDoc(doc(db, "users", userid, doctype, movieId));
    return
 }
}
