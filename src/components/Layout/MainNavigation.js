import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import brainIMG from "./../../images/brain.png";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function MainNavigation() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          fetch("https://quizapp-ab433-default-rtdb.firebaseio.com/users", {
            method: "PUT",
            body: profile,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  // useEffect(() => {
  //   if (user) {
  //     fetch(
  //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${user.access_token}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data);
  //         setProfile(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => {
      setUser(null);
      console.log("Login Failed:", error);
    },
  });
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={brainIMG} alt="brain" />
          <h1>
            Brain<span className={styles.quizText}>Quiz</span>
          </h1>
        </div>
      </Link>
      <div className={styles.menu}>
        <ul>
          <li>
            {profile ? (
              <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <button onClick={logOut}>Log out</button>
              </div>
            ) : (
              <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
          </li>
          <li className={styles.playBut}>
            <NavLink to="/quiz">Play</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
