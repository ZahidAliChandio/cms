import Profile from "../../../shared/pages/Profile";

const studentData = {
  FullName: "Shafique",
  Course: "BESE-26",
  Gender: "Male",
  Email: "shafique@gmail.com",
  Phone: "+923000xxxxxx",
  Cnic: "4410x-xxxxxxxx",
  Address: "Lalkurti, Lalazar Rawalpinid",
  Nationality: "Pakistani",
};

const StudentProfile = () => {
  return <Profile data={studentData} />;
};
export default StudentProfile;
