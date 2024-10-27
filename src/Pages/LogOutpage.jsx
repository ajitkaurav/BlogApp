import React, { useContext } from "react";
import UserContext from "../Services/AuthService";

function LogOutpage() {
  const { logout } = useContext(UserContext);

  const SubmitLogout = async () => {
    await logout();
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <h1 className="mb-5">Are you sure you want to logout</h1>
        <button className="btn btn-danger" onClick={SubmitLogout} type="button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default LogOutpage;
