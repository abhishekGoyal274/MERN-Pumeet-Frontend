import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-md navbar-light bg-light"
        style={{
          color:"white",
          fontSize: "20px",
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(26,35,126,1) 100%)",
        }}
      >
        <Link class="navbar-brand" to="/" style={{ color:"white",fontSize: "24px" }}>
          Home
        </Link>{" "}
        <span class="sr-only">(current)</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/contact"  style={{ color:"white",}}>
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login" style={{ color:"white",}}>
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user" style={{ color:"white",}}>
                User
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <p
        style={{
          color: "white",
          textAlign: "center",
          padding: "10px 0",
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(26,35,126,1) 100%)",
        }}
      >
        <h2>
          PUMEET 2022 <br />
        </h2>
        <h3>
          PANJAB UNIVERSITY, CHANDIGARH
          <br />
          Panjab University Migration Engineering Entrance Test 2022
        </h3>
      </p>
      <Outlet />
    </>
  );
};

export default Navbar;
