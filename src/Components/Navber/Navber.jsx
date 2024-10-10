import { Link, NavLink } from "react-router-dom";

const Navber = () => {

    const navlinks= <>
        <li><Link to='/add_coffee'>Add Coffee</Link></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink  to='/contract'>Contract</NavLink></li>
    
    </>
        
    return (
        <div>
            <div className="navbar ">
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
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navber;