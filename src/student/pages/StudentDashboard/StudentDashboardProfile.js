import ProfilePicture from "../../../static/images/profile.jpg";

const StudentDashboardProfile = () => {
  return (
    <div>
      <div className="relative flex gap-12 items-center border-b pb-6 my-4">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img src={ProfilePicture} alt="profile" className="object-fill" />
        </div>
        <div className="flex flex-col gap-1 text-[0.95rem]">
          <span className="text-2xl text-bold">Zahid Ali</span>
          <span className="text-lg text-semibold text-gray-500">
            00000346701
          </span>
          <span className="text-semibold text-gray-500">
            Military College Of Signals (MCS)
          </span>
        </div>
        <div className="flex flex-col gap-2 items-baseline text-[0.95rem]">
          <span className="text-semibold text-gray-500">Completed Cr: 80</span>
          <span className="text-semibold text-gray-500">Total Cr: 80</span>
          <span className="text-semibold text-gray-500">
            In Progress Cr: 80
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-start text-[0.95rem]">
          <span className="text-semibold text-gray-500">CGPA: 3.6</span>
          <span className="text-semibold text-gray-500">
            Semester: 5th Semester
          </span>
        </div>
      </div>
    </div>
  );
};
export default StudentDashboardProfile;
