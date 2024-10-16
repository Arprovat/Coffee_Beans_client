import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthCenter";

const Navber = () => {
 const {Users,logoutUser,setUsers} = useContext(AuthContext);
 
    const navlinks= <>
        <li><Link to='/add_coffee'>Add Coffee</Link></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink  to='/contract'>Contract</NavLink></li>
    
    </>
        const handleSignOut = () => {
          logoutUser()
          .then(() => {
            setUsers(null);
          })
          .catch((err) => console.log(err))
        }

    return (
        <div>
            <div className="navbar max-w-7xl mx-auto z-10 glass absolute">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navlinks}
      </ul>
    </div>
    <Link to='/' className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#753e27] via-[#a65c2a] to-[#63422a]">Coffee Beans Cafe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#753e27] font-semibold">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
      <button className="btn bg-[#5c2a20] hover:bg-[#a65c2a] hover:text-[#331A15] text-[#f8f6f6] font-semibold text-lg">{
        Users ? <Link to='/' onClick={handleSignOut}>logout</Link> : <Link to='/login'>logIn</Link>
        }</button>
   
  </div>
</div>
        </div>
    );
};

export default Navber;