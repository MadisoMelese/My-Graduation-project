import { FaUser, FaBoxOpen, FaClipboardList, FaStore, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Reusablesidebar from "./Reusablesidebar";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    console.log("Logout Successfully");
  };
  return (
    <div className="">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <Reusablesidebar to="/admin/users" icon={FaUser} label="Users" />
        <Reusablesidebar
          to="/admin/products"
          icon={FaBoxOpen}
          label="Products"
        />
        <Reusablesidebar
          to="/admin/orders"
          icon={FaClipboardList}
          label="Orders"
        />
        <Reusablesidebar to="/" icon={FaStore} label="Shop" />
      </nav>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 flex items-center justify-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
