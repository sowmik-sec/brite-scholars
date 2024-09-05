import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/higher-education.png";
import useAuth from "../../hooks/useAuth";
function Navbar() {
  const { user, logout } = useAuth();
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-scholarships">All Scholarships</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logout()
      .then()
      .catch((err) => console.error(err));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="w-10 h-10" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <Link to="/user">
            <img
              src={user?.photoURL}
              title={user?.displayName}
              className="w-14 h-14 rounded-full mr-2 hover:cursor-pointer"
              alt=""
            />
          </Link>
          <p
            onClick={handleLogout}
            className="hover:cursor-pointer hover:bg-green-400 px-3 py-2 rounded-md"
          >
            Logout
          </p>
        </div>
      ) : (
        <>
          <Link to="/login" className="navbar-end">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
