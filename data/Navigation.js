import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineLike,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SiBlueprint } from "react-icons/si";
import { IoNewspaper, IoHelpCircleOutline } from "react-icons/io5";

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
    id: 3,
    icon: <IoHelpCircleOutline />,
    name: "Resources",
    link: "/resources",
  },
  {
    id: 4,
    icon: <IoNewspaper />,
    name: "News & Events",
    link: "/news",
  },
  {
    id: 5,
    icon: <SiBlueprint />,
    name: "Blueprint",
    link: "/blueprint",
  },
  {
    id: 6,
    icon: <AiOutlineLike />,
    name: "Take action",
    link: "/action",
  },
  {
    id: 7,
    icon: <AiOutlineContacts />,
    name: "Contact",
    link: "/contact",
  },
];

export default Navigation__Data;
