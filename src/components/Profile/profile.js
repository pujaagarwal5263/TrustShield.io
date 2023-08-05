import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/profile.scss";
import React, { useState } from "react";
import LogoutButton from "../Logout/logout";
import Footer from "../Footer/footer";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
    <div className={`profile-container ${darkTheme ? "dark-theme" : ""}`}>
      {isLoading && <div>Loading ...</div>}

      {isAuthenticated && (
        <div>
          <div className="navbar">
            <h1 className="welcome-slogan">Welcome, {user?.name}!</h1>
            <button className="theme-toggle btn-logout" onClick={toggleTheme}>
              {darkTheme ? "Light Theme" : "Dark Theme"}
            </button>
            <LogoutButton />
          </div>
          <br />
          <div className="profile-card">
            <div className="profile-header">
              <img src={user?.picture} alt={user?.name} className="profile-picture" />
              <h2 className="username">{user?.name}</h2>
            </div>
            <p className="email">{user?.email}</p>
          </div>
        </div>
      )}
    </div>
    <Footer/>
      </>
  );
};

export default Profile;
