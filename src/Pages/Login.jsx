import React, { useState, useContext } from "react";
import UserContext from "../Services/AuthService";

function Login() {
  const { login } = useContext(UserContext);
  const [userdata, setUserData] = useState({
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
    if (!userdata.email) newErrors.email = "Email is required";
    if (!userdata.password) newErrors.password = "Password is required";

    return newErrors;
  };
  const LoginUser = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      await login(userdata.email, userdata.password);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4 mt-3">
        <h3 className="text-start">Login</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Id</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            value={userdata.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button className="btn btn-primary mt-2" onClick={LoginUser}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
