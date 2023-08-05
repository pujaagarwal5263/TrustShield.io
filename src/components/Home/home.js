import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/profile";
import LoginButton from "../Login/login";
import LogoutButton from "../Logout/logout";

import "../../styles/style.scss";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="container">
      {isAuthenticated ? (
        <div>
          <Profile />

        </div>
      ) : (
        <div className="login-container">
        <h1 className="login-text">Click Here To Login</h1>
        <LoginButton />
      </div>
      )}
    </main>
  );
};

export default Home;
