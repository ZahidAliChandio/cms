import ButtonProfile from "../components/UI/ButtonProfile";
import UserDetails from "./UserDetails";
import ProfilePicture from "../../static/images/profile.jpg";

const Profile = ({ data }) => {
  return (
    <div className="text-center lg:text-left px-6 md:px-10 lg:px-20 py-4 mb-6">
      <h2 className="mb-4 text-2xl font-bold">My Profile</h2>
      <div className="flex justify-between flex-col-reverse md:flex-row gap-8">
        <div className="w-full">
          <UserDetails title="Full Name" value={data.FullName} edit={true} />
          <UserDetails
            title="Gender"
            checkBoxes={true}
            edit={false}
            isMale={data.Gender === "Male"}
          />
          <UserDetails title="Email" value={data.Email} edit={true} />
          <UserDetails title="Mobile Number" value={data.Phone} edit={true} />
          <UserDetails title="CNIC" value={data.Cnic} edit={true} />
          <UserDetails title="Address" value={data.Address} edit={true} />
          <UserDetails
            title="Nationality"
            value={data.Nationality}
            edit={false}
          />
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

export default Profile;
