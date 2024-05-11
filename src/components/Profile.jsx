import HeaderAndNav from "./HeaderAndNav";
import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      {/* < HeaderAndNav /> */}
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <Link to="/">click here to go back</Link>
    </div>
  );
}

// const Profile = () => {
//   return (
//     <div>
//       <h1>Hello from profile page!</h1>
//       <p>So, how are you?</p>
//     </div>
//   );
// };

// export default Profile;
