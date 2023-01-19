import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const backdrop = (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.75)] z-20"
      onClick={props.onClick}
    ></div>
  );
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop-hook")
  );
};
export default Backdrop;
