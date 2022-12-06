import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../form.css";
import { loginAdmin, loginStudent, loginSubAdmin } from "../api";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [User, setUser] = useState("Student");
  const navigate = useNavigate();

  function handleValidation() {
    let fields = inputs;
    let errors = {};
    let formIsValid = true;

    //Username
    errors["username"] = "ok";
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }

    //Password
    errors["password"] = "ok";
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }
    return [formIsValid, errors];
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const returns = handleValidation();
    // console.log(returns);
    let data;
    if (returns[0]) {
      try {
        switch (User) {
          case "Student":
            data = await loginStudent(inputs);
            break;
          case "Sub-Admin":
            data = await loginSubAdmin(inputs);
            break;
          case "Admin":
            data = await loginAdmin(inputs);
            break;
          default:
            break;
        }        
        console.log("login")
        console.log(data.data)

        localStorage.setItem('user',JSON.stringify(data?.data));
        navigate("/User");
      } 
      catch (err) {
        alert(err.response.data.message);
        console.log(err);
      }
    } else {
      alert(
        "Error: \n" +
          "Username: " +
          returns[1].username +
          "\nPassword: " +
          returns[1].password
      );
    }
  };

  return (
    <>
      {/* ---------------------------------------------------------- */}
      <div className="form-container">
        <form className="register-form form-style-10" onSubmit={handleSubmit}>
          <h1>Login</h1>

          {/* Section 1 */}
          <div className="section">
            <span>*</span>Username And Password
          </div>
          <div className="inner-wrap">
            <label>
              Username
              <input
                type="text"
                name="username"
                className="form-field"
                placeholder="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                className="form-field"
                placeholder="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              User
              <select
                className="form-field"
                value={User || ""}
                onChange={handleUser}
              >
                <option value="Admin">Admin</option>
                <option value="Student" selected>
                  Student
                </option>
                <option value="Sub-Admin">Sub-Admin</option>
              </select>
            </label>
          </div>

          {/* ------------------------------------ */}

          <div className="button-section">
            <button
              className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              LOGIN
            </button>
            <span className="privacy-policy">
              <Link style={{ color: "Blue" }} to="/register">
                <h6>Register</h6>
              </Link>
              You agree to our Terms and Policy.
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
