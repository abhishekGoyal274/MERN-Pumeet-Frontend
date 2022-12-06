import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

import { registerStudent, registerSubAdmin } from "../api";

const Register = () => {
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
    if (typeof fields["password"] !== "undefined") {
      var strongRegex =
        "^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-_$%^&*])(?=.{8,})";
      if (!fields["password"].match(strongRegex)) {
        formIsValid = false;
        errors["password"] = "weak, make a Stronger password";
      }
    }

    //Name
    errors["name"] = "ok";
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    //Email
    errors["email"] = "ok";
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    if (typeof fields["email"] !== "undefined") {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$/;
      if (!fields["email"].match(validRegex)) {
        formIsValid = false;
        errors["email"] = "invalid";
      }
    }

    if (User === "Student") {
      //Roll Number
      errors["roll_no"] = "ok";
      if (!fields["roll_no"]) {
        formIsValid = false;
        errors["roll_no"] = "Cannot be empty";
      }

      //Varifcation data
      errors["ver_data"] = "ok";
      if (!fields["ver_data"]) {
        formIsValid = false;
        errors["ver_data"] = "Cannot be empty";
      }
    }
    else{
      //Roll Number
      errors["department"] = "ok";
      if (!fields["department"]) {
        formIsValid = false;
        errors["department"] = "Cannot be empty";
      }

      //Varifcation data
      errors["reference_no"] = "ok";
      if (!fields["reference_no"]) {
        formIsValid = false;
        errors["reference_no"] = "Cannot be empty";
      }
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
    const [formIsValid, errors] = handleValidation();
    var res = {};
    if (formIsValid) {
      if (User === "Student") {
        try {
          res = await registerStudent(inputs);
          navigate("/Login");
        } catch (err) {
          alert("Username: " + err.response.data.message);
        }
      } else {
        try {
          res = await registerSubAdmin(inputs);
          navigate("/Login");
        } catch (err) {
          alert("Username: " + err.response.data.message);
        }
      }
    } else {
      for (const property in errors) {
        if (errors[property] == "ok")
          console.log(`${property}: ${errors[property]}`);
        else alert("Error: " + property + " " + errors[property]);
      }
    }
  };

  function whichUser() {
    if (User === "Student") {
      return (
        <>
          <div className="section">
            <span>3</span>Student
          </div>
          <div className="inner-wrap">
            <label>
              Roll No
              <input
                type="text"
                name="roll_no"
                className="form-field"
                placeholder="roll_no"
                value={inputs.roll_no || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Branch
              <input
                type="text"
                name="branch"
                className="form-field"
                placeholder="branch"
                value={inputs.branch || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Verification Data
              <input
                type="text"
                name="ver_data"
                className="form-field"
                placeholder="verification data"
                value={inputs.ver_data || ""}
                onChange={handleChange}
              />
            </label>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="section">
            <span>3</span>Sub-Admin
          </div>
          <div className="inner-wrap">
            <label>
              department
              <input
                type="text"
                name="department"
                className="form-field"
                placeholder="department"
                value={inputs.department || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Reference No
              <input
                type="text"
                name="reference_no"
                className="form-field"
                placeholder="reference no"
                value={inputs.reference_no || ""}
                onChange={handleChange}
              />
            </label>
          </div>
        </>
      );
    }
  }

  return (
    <>
      {/* ---------------------------------------------------------- */}
      <div className="form-container">
        <form className="register-form form-style-10" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="section">
            <span>1</span>User
          </div>
          <div className="inner-wrap">
            <label>
              User
              <select
                className="form-field"
                value={User || ""}
                onChange={handleUser}
              >
                <option value="Student" selected>
                  Student
                </option>
                <option value="Sub-Admin">Sub-Admin</option>
              </select>
            </label>
          </div>

          {/* Section 2 */}
          <div className="section">
            <span>2</span>Personal Info
          </div>
          <div className="inner-wrap">
            <label>
              Name
              <input
                type="text"
                name="name"
                className="form-field"
                placeholder="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                className="form-field"
                placeholder="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phone_no"
                className="form-field"
                placeholder="phone_no"
                value={inputs.phone_no || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                className="form-field"
                placeholder="address"
                value={inputs.address || ""}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* ------------------------------------ */}
          {/* Section 3 */}
          {whichUser()}

          {/* ------------------------------------ */}
          {/* Section 4 */}
          <div className="section">
            <span>4</span>Credentials
          </div>
          <div className="inner-wrap">
            <label>
              username
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
              password
              <input
                type="password"
                name="password"
                className="form-field"
                placeholder="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
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
              Register
            </button>
            <span className="privacy-policy">
              You agree to our Terms and Policy.
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
