"use client";

import { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { projects, skills, contact, experience } from "../portfolio";
import CustomLink from "./ui/CustomLink";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@/theme";
import { usePathname } from "next/navigation";

const Navbar = () => {
 const theme = useTheme();

 const pathname = usePathname();
 const isHomePage = pathname === "/";

 const { toggleColorMode } = useContext(ColorModeContext);
 const [showNavList, setShowNavList] = useState(false);

 const toggleNavList = () => setShowNavList(!showNavList);

 return (
  <nav className="flex items-center justify-between space-x-4">
   {isHomePage && (
    <ul
     className={`none md:flex ${
      showNavList ? "flex" : "hidden"
     } fixed h-full w-full bg-white dark:bg-black justify-center items-center inset-0 md:static z-10 flex-col md:flex-row md:fle space-y-4 md:space-y-0`}>
     {/* Projects */}
     {projects.length && (
      <li className="md:ml-6">
       <CustomLink href="#projects" onClick={toggleNavList}>
        Projects
       </CustomLink>
      </li>
     )}

     {/* Skills */}
     {skills.length && (
      <li className="md:ml-6">
       <CustomLink href="#skills" onClick={toggleNavList}>
        Skills
       </CustomLink>
      </li>
     )}
     {/* Experience */}
     {experience.length && (
      <li className="md:ml-6">
       <CustomLink href="#experience" onClick={toggleNavList}>
        Experience
       </CustomLink>
      </li>
     )}

     {/* Contact */}
     {contact.email && (
      <li className="md:ml-6">
       <CustomLink href="#contact" onClick={toggleNavList}>
        Contact
       </CustomLink>
      </li>
     )}
    </ul>
   )}

   <button
    type="button"
    onClick={toggleColorMode}
    className="bg-transparent"
    aria-label="toggle theme">
    {theme.palette.mode === "dark" ? (
     <WbSunnyRoundedIcon />
    ) : (
     <Brightness2Icon />
    )}
   </button>

   {/* Hamburger Icon */}
   {isHomePage && (
    <button
     type="button"
     onClick={toggleNavList}
     className="z-20 md:hidden bg-transparent"
     aria-label="toggle navigation">
     {showNavList ? <CloseIcon /> : <MenuIcon />}
    </button>
   )}
  </nav>
 );
};

export default Navbar;
