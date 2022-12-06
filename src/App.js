import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Register from "./components/Register";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import LoginContext from "./components/UserData";
import Payment from "./components/Payment";

export default function App(props) {
  return (
      <LoginContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Login" element={<Login />} />
              <Route path="User" element={<User />} />
              <Route path="register" element={<Register />} />
              <Route path="payment" element={<Payment />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </LoginContext>
   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);