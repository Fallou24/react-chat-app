import React from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase/firebase";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { userInfo } from "../../context/ChatContext";
import { authContext } from "../../context/AuthContextProvider";
import { useState } from "react";

const MessageInput = ({ setIsFetching, isFetching }) => {
  const { state } = useContext(userInfo);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const user = useContext(authContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text) {
      if (file) {
        setIsFetching(true);
        const storageRef = ref(storage, "images/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                updateDoc(doc(db, "chats", state.chatId), {
                  messages: arrayUnion({
                    uid: user.uid,
                    text,
                    image: downloadURL,
                    date: Timestamp.now(),
                  }),
                });
                await updateDoc(
                  doc(db, "users/" + user.uid + "/userChats", state.chatId),
                  {
                    date: serverTimestamp(),
                    lastMessage: text,
                  }
                );
                await updateDoc(
                  doc(
                    db,
                    "users/" + state.user.uid + "/userChats",
                    state.chatId
                  ),
                  {
                    date: serverTimestamp(),
                    lastMessage: text,
                  }
                );
                setIsFetching(false);
              }
            );
          }
        );
      } else {
        updateDoc(doc(db, "chats", state.chatId), {
          messages: arrayUnion({
            uid: user.uid,
            text,
            date: Timestamp.now(),
          }),
        });
        await updateDoc(
          doc(db, "users/" + user.uid + "/userChats", state.chatId),
          {
            date: serverTimestamp(),
            lastMessage: text,
          }
        );
        await updateDoc(
          doc(db, "users/" + state.user.uid + "/userChats", state.chatId),
          {
            date: serverTimestamp(),
            lastMessage: text,
          }
        );
      }

      setText("");
      setFile(null);
    }
  };
  return (
    <div className="message__input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="right">
          <label htmlFor="file">
            <img src="/img/img.png" alt="" className="add_img" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button disabled={isFetching}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
