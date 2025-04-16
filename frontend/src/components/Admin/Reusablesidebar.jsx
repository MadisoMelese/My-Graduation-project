import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
          : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
      }
      to={to}
    >
      <Icon />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarLink;
