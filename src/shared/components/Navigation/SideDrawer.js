import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        className="side-drawer block fixed left-0 top-0 z-50 h-screen w-[50%] bg-white card-shadow md:hidden"
        onClick={props.onClick}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
