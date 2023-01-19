import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Department of Computer Software Engineering, MCS</h1>
      <div className="profile-image">
        <img src="./images/avatar.svg" alt="" />
        <div className="profile-text">
          <h1 id="fullname">#</h1>

          <h3 id="sem">5th Semester</h3>
        </div>
      </div>
      <form>
        <div>
          <label for="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value="value"
            disabled=""
          />
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input
            id="phone"
            type="phone"
            name="phone"
            value="value"
            disabled=""
          />
        </div>
        <div>
          <label for="cnic">CNIC:</label>
          <input id="cnic" type="text" name="cnic" value="value" disabled="" />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <input
            id="gender"
            type="text"
            name="gender"
            value="value"
            disabled=""
          />
        </div>
        <div>
          <label for="taddress">Temporary Address:</label>
          <input
            id="taddress"
            type="text"
            name="taddress"
            value="value"
            disabled=""
          />
        </div>
        <div>
          <label for="paddress">Permanent Address:</label>
          <input
            id="paddress"
            type="text"
            name="paddress"
            value="value"
            diabled=""
          />
        </div>
        <div>
          <label for="dob">Date Of Birth:</label>
          <input id="dob" type="phone" name="dob" value="value" disabled="" />
        </div>
        <div>
          <label for="nationality">Nationality:</label>
          <input
            id="nationality"
            type="text"
            name="nationality"
            value="value"
            disabled=""
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
