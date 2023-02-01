import axios from "axios";
import { useEffect } from "react";

import ProfilePicture from "../../../static/images/profile.jpg";

const FacultyProfile = ({ data }) => {
  return (
    <div>
      <div className="relative flex flex-col justify-center gap-2 items-center border-b pb-4">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img src={ProfilePicture} alt="profile" className="object-fill" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <span className="text-2xl text-bold">{data.FullName}</span>
          <span className="text-lg text-semibold text-gray-500">
            {data.RegNo}
          </span>
          <span className="absolute right-0 top-0 text-l text-semibold text-gray-500">
            Military College Of Signals (MCS)
          </span>
        </div>
      </div>
    </div>
  );
};
export default FacultyProfile;
