import { MdOutlineDashboard } from "react-icons/md";
import { TbDevices } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { MdOutlineLogout } from "react-icons/md";

export const LeftSideMenuList = [
  {
    label: "Dashboard",
    active: true,
    icon: MdOutlineDashboard,
  },
  {
    label: "Devices",
    icon: TbDevices,
    active: false,
  },
  {
    label: "Users",
    icon: FaRegUser,
    active: false,
  },
  {
    label: "Settings",
    icon: IoIosSettings,
    active: false,
  },
  {
    label: "My Profile",
    icon: ImProfile,
    active: false,
  },
  {
    label: "Logout",
    icon: MdOutlineLogout,
    active: false,
  },
];

export const sepsMenu = ["Device Setup", "View Setup", "Location Coordinates"];
