import React, { useEffect } from "react";
import { useState } from "react";
import { account } from "../Config/Appwrite";

function About() {
  const [userinfo, setUserInfor] = useState();
  useEffect(() => {
    const infor = account.get();
    infor.then(function (result) {
      setUserInfor(result);
    }),
      function (error) {
        alert(error);
      };
  }, []);

  return (
    <>
      {userinfo ? (
        <>
          <i>
            {" "}
            <h1> Welcome : {userinfo.name}</h1>{" "}
          </i>
        </>
      ) : (
        "About"
      )}
    </>
  );
}

export default About;
