import { db } from "@/firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default async function Favourites(movie, state, userid, doctype) {
  //media id will be passed to this function
  //if the id doesn't exist, write it to firebase

  const index = state.findIndex(item => item.id === movie.id)
  const movieId = `${movie.id}`
//   const userId = `${userid}`

  if (index < 0) {
    await setDoc(doc(db, "users", userid, doctype, movieId), movie)
    toast.success(`${movie.title || movie.name} added to ${doctype} successfully`, {
      position: 'top-center',
    })
    return
 } else {
    //   else, delete it
    await deleteDoc(doc(db, "users", userid, doctype, movieId));
    toast.success(`${movie.title || movie.name} removed from ${doctype} successfully`, {
      position: 'top-center',
    })
    return
 }
}
