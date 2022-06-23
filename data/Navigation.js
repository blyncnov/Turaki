import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoNewspaper } from "react-icons/io5";

export const Navigation__Data = [
  {
    id: 1,
    icon: <AiOutlineHome />,
    name: "Home",
    link: "/",
  },

  {
    id: 2,
    icon: <CgProfile />,
    name: "About",
    link: "/about",
  },

  {
    id: 4,
    icon: <IoNewspaper />,
    name: "News & Events",
    link: "/news",
  },

  {
    id: 7,
    icon: <AiOutlineContacts />,
    name: "Contact",
    link: "/contact",
  },
];

export default Navigation__Data;
