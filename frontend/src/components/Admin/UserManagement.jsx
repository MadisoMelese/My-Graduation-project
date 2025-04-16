import { useState } from "react";
import FormInput from "./FormInput";

const UserManagement = () => {
  const users = [
    {
      _id:123,
      name: "John Doe",
      email: "madiso@exaple.com",
      role: "admin",
    },
  ];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // default role
  });

  // handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
// handle for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // reset form data  after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };
// handle role change 
  const handleRoleChange = (userId, userValue) => {
    console.log(userId, userValue);
  };
// delete user by id
  const handleDeleteUser = (userId)=>{
    if(window.confirm("are you sure you want to delete this user?")){
      console.log("deleting user with userId", userId)
    }

  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Add new user form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <FormInput
            type="text"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email */}
          <FormInput
          autoComplete="username"
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password */}
          <FormInput
          autoComplete="current-password"
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User list management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                  onClick={()=>handleDeleteUser(user._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
