import React, { useContext, useState } from "react";
import UserContext from "../Services/AuthService";
import { notifySuccess } from "../Common/Notification";

const Register = () => {
  const { registerNewUser } = useContext(UserContext);
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...userdata,
      [name]: value,
    });
  };
  const validate = () => {
    const newErrors = {};
    if (!userdata.name) newErrors.name = "Name is required";
    if (!userdata.email) newErrors.email = "Email is required";
    if (!userdata.password) newErrors.password = "Password is required";

    return newErrors;
  };
  const RegisterUser = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await registerNewUser(userdata.email, userdata.password, userdata.name);
      notifySuccess("you are registered Successfully");
    }
  };

  return (
    <div className="row justify-content-center bg.gre">
      <div className="col-md-4 mt-3">
        <h3 className="text-start">Register</h3>
        <div className="form-group">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            id="Name"
            name="name"
            value={userdata.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Id</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={userdata.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userdata.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button onClick={RegisterUser} className="btn btn-primary mt-2">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
