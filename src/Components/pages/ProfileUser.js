import { Outlet, NavLink } from "react-router-dom";

const ProfileUser = () => {
  return (
    <div>
      is profile
      <NavLink to="/ProfileUser/dashboard">dashboard</NavLink>
      <NavLink to="/ProfileUser/download">download</NavLink>
      <Outlet />
    </div>
  );
};

export default ProfileUser;
