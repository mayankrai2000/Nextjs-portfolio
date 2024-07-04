"use client";

import { contact } from "../portfolio";
import CustomSection from "./ui/CustomSection";
import Button from "@mui/material/Button";

const Contact = () => {
 if (!contact.email) return null;

 const handleMailto = () => {
  window.location.href = `mailto:${contact.email}`;
 };

 return (
  <CustomSection title="Contact" id="contact" className="text-center">
   <Button onClick={handleMailto} size="large" variant="contained">
    Email me
   </Button>
  </CustomSection>
 );
};

export default Contact;
