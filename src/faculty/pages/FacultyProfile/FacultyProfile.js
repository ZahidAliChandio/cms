import ButtonProfile from "../../components/UI/ButtonProfile";
import UserDetails from "./UserDetails";
import ProfilePicture from "../../../static/images/profile.jpg";
// import UserProfile from "./UserProfile";

const FacultyProfile = () => {
  return (
    <div className="text-center lg:text-left px-6 md:px-10 lg:px-20 py-4 mb-6">
      <h2 className="mb-4 text-2xl font-bold">My Profile</h2>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8">
        <div className="w-full">
          <UserDetails title="Full Name" value="Kajal Sharma" edit={true} />
          <UserDetails
            title="Gender"
            value1="Male"
            value2="Female"
            checkBoxes={true}
            edit={false}
          />
          <UserDetails title="Email" value="+92 | 000009999" edit={true} />
          <UserDetails
            title="Mobile Number"
            value="+92 | 000009999"
            edit={true}
          />
          <UserDetails title="CNIC" value="kajavats96@gmail.com" edit={true} />
          <UserDetails
            title="Address"
            value="Dehri Hansnabad, Rawalpindi"
            edit={true}
          />
          <UserDetails title="Nationality" value="Pakistani" edit={false} />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <div className="inline-block">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="w-[169px] h-[169px] rounded-full"
            />
          </div>
          <div className="flex gap-4">
            <button
              className="font-bold text-green-700 underline"
              type="submit"
            >
              Update
            </button>
            <button className="font-bold text-gray-400 underline" type="clear">
              Remove
            </button>
          </div>
        </div>
      </div>

      <ButtonProfile className="bg-green-700 text-white mt-6" type="submit">
        SAVE
      </ButtonProfile>
    </div>
  );
};

export default FacultyProfile;
