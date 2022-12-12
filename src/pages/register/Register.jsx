import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebase/firebase";
import "./register.scss";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    setErr("");

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    if (name && email && password && file) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
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
                await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  photoURL: downloadURL,
                  displayName: name,
                });
                await updateProfile(res.user, {
                  displayName: name,
                  photoURL: downloadURL,
                });
                
                navigate("/");
              }
            );
          }
        );
      } catch (err) {
        setErr(err.message);
      }
    }
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>Chat App</h1>
        <form onSubmit={handleSubmit} id="form">
          <input type="text" placeholder="Display Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <label htmlFor="file">
            <img src="/img/addAvatar.png" alt="" />
            <span>Add an avatar</span>
          </label>
          <input type="file" id="file" required style={{ display: "none" }} />
          <button disabled={isFetching}>
            {isFetching ? "Loading..." : "Sign up"}
          </button>
        </form>
        {err && <p className="err">{err}</p>}
        <p>
          You have an account ? <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
