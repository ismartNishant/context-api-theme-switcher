import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";


const Header = () => {
  const [nav, setNav] = useState(false);
  const HanldeNav = () => {
    setNav(!nav);
  };

  const menuItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Conatct Us',
      path: '/contact',
    },
    {
      name: 'Careers',
      path: '/Careers',
    },
    {
      name: 'GitHub',
      path: '/github',
    },

  ]


  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-2 lg:px-6 py-2.5 dark:bg-gray-950 dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <NavLink to='/' className="text-2xl flex items-center  font-bold uppercase" >
              Your <span className="text-indigo-500 ps-2"> Logo</span>
            </NavLink>

          </div>

          <div className="hidden lg:flex  justify-between  ">
            <ol className=" flex  justify-center  ">
              {menuItems.map((item) => (
                <NavLink key={item.name} className={({ isActive }) => `${isActive ? "text-indigo-500" : "text-black dark:text-white"}`} to={item.path}>
                  <li className="nav-item text-[16px] font-medium" >{item.name} </li>
                </NavLink>
              ))}

            </ol>

          </div>

          <div className="hidden lg:flex   items-center  gap-2">
            <NavLink to='/' className={`btn font-medium rounded-sm hover:bg-indigo-800 hover:border-indigo-500 hover:text-white`}> Log in</NavLink>
            <NavLink to='/' className={`btn font-medium bg-indigo-500 rounded-sm   hover:bg-indigo-800 text-white`}> Get Started</NavLink>
            <div>
              <ThemeBtn />

            </div>
          </div>

          {/* hamburger icon */}
          <div className="lg:hidden z-10" onClick={HanldeNav}>
            {!nav ? (
              <FaBars
                size={30}
                className="cursor-pointer hover:text-indigo-500 active:text-indigo-500"
              />
            ) : (
              <CgClose
                size={30}
                className="hover:rotate-6  hover:text-indigo-500  cursor-pointer dark:text-black "
              />
            )}
          </div>

          {/* mobile menu */}
          <div
            onClick={HanldeNav}
            className={
              nav
                ? "w-full overflow-y-hidden lg:hidden ease-in duration-300 absolute  left-0 top-0 h-screen bg-white px-4 py-7"
                : "absolute top-0 left-[-100%] h-screen ease-in duration-500"
            }
          >
            <div className="h-full w-full text-center pt-12 ">
              <ol >
                {menuItems.map((item) => (
                  <NavLink key={item.name} className={({ isActive }) => `${isActive ? "text-indigo-500" : "text-black"}`} to={item.path}>
                    <li className="nav-item text-[16px] font-medium" >{item.name} </li>
                  </NavLink>
                ))}
              </ol>
              <div className="gap-3 mt-8 flex justify-center items-center">

                <NavLink to='/' className={`btn font-medium rounded-sm hover:bg-indigo-800 hover:border-indigo-500 hover:text-white`}> Log in</NavLink>
                <NavLink to='/' className={`btn font-medium bg-indigo-500 rounded-sm   hover:bg-indigo-800 text-white`}> Get Started</NavLink>
                <div>
                  <ThemeBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
