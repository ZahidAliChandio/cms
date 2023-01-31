const UserProfile = (props) => {
  return (
    <div className="relative flex items-center justify-between gap-4 w-full  pt-2 pb-3 pr-2 m-2 border-b border-gray-400">
      <div className="flex gap-4">
        <div className="text-center h-[36px] w-[36px] rounded-full overflow-hidden">
          {/* <img src={Pic} alt="Client" className="" /> */}
          <span className="inline-block bg-yellow-400 w-full h-full"></span>
        </div>
        <div className="flex flex-col font-gillsans">
          <h4 className="font-medium text-xs md:text-sm lg:text-base text-gray-500">
            {props.title}
          </h4>
          {!props.checkBoxes && (
            <input
              className="font-bold text-sm outline-none focus:border p-2"
              id={props.value}
              defaultValue={props.value}
            />
          )}
          {props.checkBoxes && (
            <div className="font-bold text-sm flex gap-5 mt-2">
              <div className="flex items-center gap-1">
                <input type="radio" name="gender" id="male" />
                <span>{props.value1}</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" name="gender" id="female" />
                <span>{props.value2}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {props.edit && (
        <label htmlFor={props.value}>
          <i
            className="p-1 fa-solid fa-pen text-[10px] text-gray-400 cursor-pointer"
            // onClick={""}
          ></i>
        </label>
      )}
    </div>
  );
};
export default UserProfile;
