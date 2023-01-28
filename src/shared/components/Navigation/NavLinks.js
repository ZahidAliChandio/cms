import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

const NavLinks = ({ setStudentClicked }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const auth = useContext(AuthContext);

  const onClickHander = (index) => {
    setActiveLinkIndex(index);
    if (index === 0) {
      setStudentClicked(false);
    } else {
      setStudentClicked(true);
    }
  };

  return (
    <ul className="nav-links flex flex-col md:flex-row justify-center items-center   w-full h-full">
      <li className="m-4">
        <NavLink
          exact="true"
          className={`text-white flex gap-6`}
          onClick={() => onClickHander(0)}
        >
          faculties
        </NavLink>
      </li>

      <li className="m-4">
        <NavLink
          className={`
            text-white`}
          onClick={() => onClickHander(1)}
        >
          students
        </NavLink>
      </li>
      {/* <button className="border text-white bg-transparent hover:bg-[#f8df00] hover:text-[#292929] active:text-[#292929] active:bg-[#f8df00]"></button> */}
    </ul>
  );
};

export default NavLinks;
