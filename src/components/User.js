import { useNavigate } from "react-router-dom";
import "../form.css";

function User() {
//   const user = useContext(UserData);
//   console.log("user")
//   console.log(user)
  const navigate = useNavigate();
//   console.log("in users:");
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);


  const handleLogout = () => {
    localStorage.setItem('user',JSON.stringify({"empty":true}));
    navigate("/Login");
  };

  function whichUser() {
    if(user.empty) {
        return (
          <>
            <table
              class="styled-table"
              style={{ marginLeft: "10vw", width: "80vw", textAlign: "center" }}
            >
              Not Logged in
            </table>
          </>
        );
      }
    if (user.rollNumber !== undefined) {
      return (
        <>
          <table
            class="styled-table"
            style={{ marginLeft: "10vw", width: "80vw" }}
          >
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>User Type</th>
                <th>Student</th>
              </tr>
              {Object.keys(user).map((keyName, i) => (
                <tr>
                  <th>{keyName}</th>
                  <th> {user[keyName]}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
    if (user.department !== undefined) {
      return (
        <>
          <table
            class="styled-table"
            style={{ marginLeft: "10vw", width: "80vw" }}
          >
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>User Type</th>
                <th>Sub Admin</th>
              </tr>
              {Object.keys(user).map((keyName, i) => (
                <tr>
                  <th>{keyName}</th>
                  <th> {user[keyName]}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
    if (user.studentRequests !== undefined) {
      console.log(user.studentRequests);
      console.log(user.studentRequests);
      return (
        <>
          <table
            class="styled-table"
            style={{ marginLeft: "10vw", width: "80vw" }}
          >
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>User Type</th>
                <th>Admin</th>
              </tr>
              <tr>
                <th>Username</th>
                <th>{user["username"]}</th>
              </tr>
            </tbody>
          </table>

          <table
            class="styled-table"
            style={{ marginLeft: "10vw", width: "80vw" }}
          >
            <thead>
              <tr>
                <th>Username</th>
                <th>verification Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Requests</th>
                <th>Student</th>
              </tr>
              {(user.studentRequests).map((student, i) => (
                <tr>
                  <th>{student.username}</th>
                  <th> {student.verificationData}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <table
            class="styled-table"
            style={{ marginLeft: "10vw", width: "80vw" }}
          >
            <thead>
              <tr>
                <th>username</th>
                <th>reference Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>  
                <th>Requests</th>
                <th>Sub Admin</th>
              </tr>
              {(user.subAdminRequests).map((subAdmin, i) => (
                <tr>
                  <th>{subAdmin.username}</th>
                  <th> {subAdmin.referenceNumber}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    } 
  }
  return (
    <>
      {whichUser()}
      <div
        style={{ textAlign: "center", marginBottom: "20px" }}
        className="button-section"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
          onClick={(event) => {
            handleLogout(event);
          }}
        >
          Logout
        </button>
        &nbsp;&nbsp;
        <button
          className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
          onClick={(event) => {
            event.preventDefault();
            navigate("/Login");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default User;
