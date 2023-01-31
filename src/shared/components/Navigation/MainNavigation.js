import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UI/Backdrop";

const MainNavigation = ({ headerLeft, faculty }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [studentClicked, setStudentClicked] = useState(true);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav h-full">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn w-7 h-7 bg-transparent flex flex-col justify-around cursor-pointer mr-4 md:hidden"
          onClick={openDrawerHandler}
        >
          <span className="block w-7 h-[2px] bg-white"></span>
          <span className="block w-7 h-[2px] bg-white"></span>
          <span className="block w-7 h-[2px] bg-white"></span>
        </button>
        <h1 className="main-navigation__title text-white flex gap-6 font-semibold">
          {(!faculty || studentClicked) &&
            headerLeft.map((headerItem, index) => (
              <Link to={headerItem.link} className="text-white" key={index}>
                {" "}
                <span>{headerItem.value}</span>
              </Link>
            ))}
          {faculty &&
            !studentClicked &&
            faculty.map((headerItem, index) => (
              <Link to={headerItem.link} className="text-white" key={index}>
                <span>{headerItem.value}</span>
              </Link>
            ))}
        </h1>
        {faculty && (
          <nav className="main-navigation__header-nav hidden md:block">
            <NavLinks setStudentClicked={setStudentClicked} />
          </nav>
        )}
      </MainHeader>
    </Fragment>
  );
};
export default MainNavigation;
