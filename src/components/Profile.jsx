import HeaderAndNav from "./HeaderAndNav";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>
        {" "}
        <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default Profile;
