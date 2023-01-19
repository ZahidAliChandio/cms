import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

const NavLinks = (props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const auth = useContext(AuthContext);

  const onClickHander = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <ul className="nav-links flex flex-col md:flex-row justify-center items-center   w-full h-full">
      <li className="m-4">
        <NavLink
          to="/"
          exact="true"
          className={`${
            activeLinkIndex === 0 ? "bg-yellow-300 border" : null
          } border-[#292929] text-[#292929] p-2 hover:text-white active:text-white`}
          onClick={() => onClickHander(0)}
        >
          ALL STUDENTS
        </NavLink>
      </li>
      {auth.token && (
        <li className="m-4">
          <NavLink
            to={`/${auth.userId}/places`}
            className={`${
              activeLinkIndex === 1 ? "bg-yellow-300 border" : null
            } border-[#292929] text-[#292929] p-2 hover:text-white active:text-white`}
            onClick={() => onClickHander(1)}
          >
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.token && (
        <li className="m-4">
          <NavLink
            to="/places/new"
            className={`${
              activeLinkIndex === 2 ? "bg-yellow-300 border" : null
            } border-[#292929] text-[#292929] p-2 hover:text-white active:text-white`}
            onClick={() => onClickHander(2)}
          >
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!auth.token && (
        <li className="m-4">
          <NavLink
            to="/auth"
            className={`${
              activeLinkIndex === 3 ? "bg-yellow-300 border" : null
            } border-[#292929] text-[#292929] p-2 hover:text-white active:text-white`}
            onClick={() => onClickHander(3)}
          >
            AUTHENTICATE
          </NavLink>
        </li>
      )}
      {auth.token && (
        <li className="m-4">
          <NavLink
            className={`${
              activeLinkIndex === 3 ? "bg-yellow-300 border" : null
            } border-[#292929] text-[#292929] p-2 hover:text-white active:text-white`}
            onClick={auth.logout}
          >
            LOGOUT
          </NavLink>
        </li>
      )}
      {/* <button className="border text-white bg-transparent hover:bg-[#f8df00] hover:text-[#292929] active:text-[#292929] active:bg-[#f8df00]"></button> */}
    </ul>
  );
};

export default NavLinks;
