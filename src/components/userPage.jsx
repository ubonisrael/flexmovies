import React, { useEffect, useState } from "react";
import styles from "@/styles/Userpage.module.scss";
import { useFavContext } from "@/context/FavouriteContext";
import { useWatchContext } from "@/context/WatchListContext";
import { Collection } from "./collection";
import { EmptyList } from "./emptyList";
import { useAuth } from "@/context/AuthUserContext";
import { FaUserAlt } from "react-icons/fa";
import { GoVerified, GoUnverified } from "react-icons/go";
import Image from "next/image";
import { useRouter } from "next/router";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "@/firebase";
import { updateProfile } from "firebase/auth";
import PasswordChange from "./passwordChange";

export const User = () => {
  const [avatar, setAvatar] = useState(null);
  const [passwordModal, setModal] = useState(false);

  const { user } = useAuth();

  const router = useRouter();

  const fav = useFavContext();

  const watch = useWatchContext();

  // toggle modal
  const handleToggle = () => {
    setModal((prev) => !prev);
  };

  // retrieve user avatar from firebase storage
  const getAvatar = () => {
    const storageRef = ref(storage, `flexmovies/${user.uid}/userimage`);
    getDownloadURL(storageRef)
      .then((url) => setAvatar(url))
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  };

  // update user's avatar
  const updateAvatar = (e) => {
    const avatarFile = e.target.files[0];
    if (!avatarFile) return;

    const storageRef = ref(storage, `flexmovies/${user.uid}/userimage`);

    const uploadTask = uploadBytesResumable(storageRef, avatarFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        alert(error);
      },
      () =>
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }),
            setAvatar(downloadURL);
        })
    );
  };

  // if user is logged in, get user avatar, else push user to home page
  useEffect(() => {
    if (user) getAvatar();
    else router.push("/");
  }, [user]);

  if (!user) return;

  const divStyle = {
    borderRadius: "50%",
  };

  return (
    <section className={styles.userpage}>
      <section className={styles.userInfo}>
        <div className={styles.photoContainer}>
          {avatar ? (
            <Image src={avatar} alt="avatar" fill style={divStyle} />
          ) : (
            <span>
              <FaUserAlt />
            </span>
          )}
          <label htmlFor="avatar" className={styles.updateAvatarLabel}>
            <input
              type="file"
              id="avatar"
              className={styles.updateAvatar}
              onChange={updateAvatar}
              name="avatar"
              accept="image/*"
            />
          </label>
        </div>
        <article className={styles.details}>
          <h4>{user.name || user.uid}</h4>
          <p className={styles.email}>
            {user.email}
            <span>{user.verified ? <GoVerified /> : <GoUnverified />}</span>
          </p>
        </article>
      </section>
      <div className={styles.changePwBtn}>
        <button onClick={handleToggle}>change password</button>
      </div>
      <section>
        {fav.length > 0 ? (
          <Collection userlist={fav} type={"Favorites"} />
        ) : (
          <EmptyList type="favorites" icon="heart" />
        )}
        {watch.length > 0 ? (
          <Collection userlist={watch} type={"Watch List"} />
        ) : (
          <EmptyList type="watch list" icon="plus" />
        )}
      </section>
      {passwordModal ? (
        <PasswordChange email={user.email} toggle={handleToggle} />
      ) : null}
    </section>
  );
};
