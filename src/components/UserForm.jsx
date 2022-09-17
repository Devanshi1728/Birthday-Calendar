import React, { useCallback, useState } from "react";

const initialUserData = {
  firstName: "",
  lastName: "",
  dob: "",
};

const UserForm = ({ setEvents }) => {
  const [userData, setUserData] = useState(initialUserData);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    setEvents((events) => [...events, userData]);
    setUserData(initialUserData);
  }, [setEvents, userData]);

  return (
    <div className="form-wrapper">
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={userData.lastName}
        onChange={handleChange}
      />
      <input
        name="dob"
        type="date"
        placeholder="DOB"
        value={userData.dob}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create User</button>
    </div>
  );
};

export default UserForm;
