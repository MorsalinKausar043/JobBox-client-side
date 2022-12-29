import React from "react";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../firebase/firebase.init";

import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { logOutUser } from "../../features/auth/authSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logOutUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl">
          <Link to="/">JobBox</Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>
        {email && (
          <li>
            <Link
              className="border cursor-pointer border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
              to="/register"
            >
              Register
            </Link>
          </li>
        )}

        {!email ? (
          <li>
            <Link
              className="border cursor-pointer border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
              to="/login"
            >
              Login
            </Link>
          </li>
        ) : (
          <li
            onClick={()=>logOut()}
            className="border cursor-pointer border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
          >
            Log Out
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
