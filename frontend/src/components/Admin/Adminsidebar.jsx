import {
  FaUser,
  FaBoxOpen,
  FaClipboardList,
  FaStore,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-sidebar">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl">Admin Dashboard</h1>
      </div>
      <div div className="flex flex-col space-y-4">
        gggggggggggggggggggggg
      </div>
      <div className="flex flex-col space-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          <FaSignOutAlt className="w-6 h-6" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
