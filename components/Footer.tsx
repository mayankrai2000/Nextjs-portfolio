import CustomLink from "./ui/CustomLink";
import { about } from "@/portfolio";

const Footer = () => (
 <footer className="mt-28">
  <CustomLink
   className="font-bold text-xs"
   href={about.social.github}
   target="_blank">
   Created By Mayank Kumar Rai
  </CustomLink>
 </footer>
);

export default Footer;
