import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { userInfo } from "../../context/ChatContext";
import { db } from "../../firebase/firebase";

const SearchInput = () => {
  const [searchRes, setSearchRes] = useState("");
  const { dispatch } = useContext(userInfo);
  const [err, setErr] = useState("");
  const user = useContext(authContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;

    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchTerm)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setSearchRes("");
      setErr("User not found");
    } else {
      setErr("");
      querySnapshot.forEach((doc) => {
        setSearchRes(doc.data());
      });
    }

    document.querySelector("form").reset();
  };
  const handleChat = async () => {
    const combinedId =
      user.uid > searchRes.uid
        ? user.uid + searchRes.uid
        : searchRes.uid + user.uid;
    dispatch({
      type: "selectUser",
      payload: { id: combinedId, user: searchRes },
    });
    const q = query(collection(db, "chats"), where("uid", "==", combinedId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      await setDoc(doc(db, "chats", combinedId), {
        messages: [],
      });
      await setDoc(doc(db, "users/" + user.uid + "/userChats", combinedId), {
        uid: searchRes.uid,
        displayName: searchRes.displayName,
        photoURL: searchRes.photoURL,
        lastMessage: "",
        date: "",
      });

      await setDoc(
        doc(db, "users/" + searchRes.uid + "/userChats", combinedId),
        {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          lastMessage: "",
          date: "",
        }
      );
    }
    setSearchRes("");
  };

  return (
    <div className="search__form">
      <form onSubmit={handleSubmit}>
        <input type="text" className="search" placeholder="Find a user" />
      </form>
      {err && <p className="notFound">{err}</p>}
      {searchRes && (
        <div className="sidebar__freind" onClick={handleChat}>
          <img src={searchRes.photoURL} alt="" />
          <p>
            <span>{searchRes.displayName}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
