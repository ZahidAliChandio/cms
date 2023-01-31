const Card = (props) => {
  return (
    <div
      className={`${props.className} relative inline-flex items-center gap-4 py-2 px-4 w-fit box-shadow rounded-xl m-2 shadow-[0px_16px_11px_rgba(0, 0, 0, 0.3)]`}
    >
      {props.children}
    </div>
  );
};
export default Card;
