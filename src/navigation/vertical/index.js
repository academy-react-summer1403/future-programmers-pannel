import { Mail, Home, Airplay, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "مدیریت کاربران",
    icon: <Mail size={20} />,
    navLink: "/user",
  },
  {
    id: "thirdPage",
    title: "مدیریت دوره",
    icon: <Home size={20} />,
    navLink: "/courses",
  },
  {
    id: "forthPage",
    title: "مدیریت اخبار و مقالات",
    icon: <Mail size={20} />,
    navLink: "/news",
  },
  {
    id: "fifthPage",
    title: "مدیریت کامنت ها  ",
    icon: <Mail size={20} />,
    navLink: "/comment",
  },
  {
    id: "smaplePage",
    title: "Sample Page",
    icon: <Airplay size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "invoiceList",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
];
