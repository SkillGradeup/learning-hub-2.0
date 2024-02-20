// UserDetailsPage.jsx
import React from "react";
import UserDetailsForm from "./UserDetailsForm";

const UserPage = () => {
  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    console.log("Form values:", values);
  };

  const initialValues = {
    user_first_name: "",
    user_last_name: "",
    dob: "", // Make sure dob is included
    status: "",
  };

  return (
    <div>
      <h1>User Details Form</h1>
      <UserDetailsForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default UserPage;
