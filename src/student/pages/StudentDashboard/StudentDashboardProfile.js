import ProfilePicture from "../../../static/images/profile.jpg";

const StudentDashboardProfile = ({ data }) => {
  return (
    <div>
      <div className="relative flex gap-12 items-center border-b pb-6 my-4">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img src={ProfilePicture} alt="profile" className="object-fill" />
        </div>
        <div className="flex flex-col gap-1 text-[0.95rem]">
          <span className="text-2xl text-bold">{data.FullName}</span>
          <span className="text-lg text-semibold text-gray-500">
            {data.cmsId}
          </span>
          <span className="text-semibold text-gray-500">{data.college}</span>
        </div>
        <div className="flex flex-col gap-2 items-baseline text-[0.95rem]">
          <span className="text-semibold text-gray-500">
            Completed Cr: {data.completedCr}
          </span>
          <span className="text-semibold text-gray-500">
            Total Cr: {data.totalCr}
          </span>
          <span className="text-semibold text-gray-500">
            In Progress Cr: {data.inProgressCr}
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-start text-[0.95rem]">
          <span className="text-semibold text-gray-500">CGPA: {data.cgpa}</span>
          <span className="text-semibold text-gray-500">
            Semester: {data.semester}
          </span>
        </div>
      </div>
    </div>
  );
};
export default StudentDashboardProfile;
