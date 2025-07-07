import React, {  useEffect } from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0  lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center rounded-full text-black px-2 py-1 transition-transform hover:scale-105 border border-transparent hover:border-red-600 hover:text-red-600"
        >
          A Propos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center rounded-full text-black px-2 py-1 transition-transform hover:scale-105 border border-transparent hover:border-red-600 hover:text-red-600"
        >
          Nos Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center rounded-full text-black px-2 py-1 transition-transform hover:scale-105 border border-transparent hover:border-red-600 hover:text-red-600"
        >
          Nos Réalisations
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center rounded-full text-black px-2 py-1 transition-transform hover:scale-105 border border-transparent hover:border-red-600 hover:text-red-600"
        >
          Nous contacter
        </a>
      </Typography>
    </ul>
  );
  
    
  return (
    
    <Navbar
  className={"fixed top-0 left-0 right-0 z-50 w-full rounded-none px-4 py-4 bg-white text-black shadow-md"}
>
      <div className="flex items-center justify-between text-blue-gray-900 color">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 flex items-center transition-transform hover:scale-105 "
        >
          <img
            src="src/assets/img/logo.png"
            alt="LuxTechService Logo"
            className="h-12 w-12 mr-2"
          />

          <span className="font-bold text-2xl text-red-600 ">LuxTech</span>
          <span className="text-black font-black text-2xl">Services</span>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="hidden lg:flex items-center gap-x-1">
            <Button
              variant="outlined"
              size="sm"
              className="rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-transform hover:scale-105"
            >
              <span>Explorer plus</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
    
      
      <MobileNav open={openNav}>
        {navList}
        <div className="rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
  >
          <Button fullWidth variant="text" size="sm" className="">
            <span>Explorer plus</span>
          </Button>
         
        </div>
      </MobileNav>
      </Navbar>
      
    
  );
}
