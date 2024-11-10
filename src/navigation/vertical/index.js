import { Mail, Home,BookOpen,Monitor, Airplay, Circle } from "react-feather";

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
    icon: <BookOpen size={20} />,
    // navLink: "/courses",
    children: [
      {
        id: "courseList",
        title: "لیست دوره ها",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "addCourse",
        title: "افزودن دوره جدید",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
  {
    id: "forthPage",
    title: "مدیریت اخبار و مقالات",
    icon: <Monitor size={20} />,
    // navLink: "/news",
    children: [
      {
        id: "newsList",
        title: "لیست  اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
      {
        id: "addNews",
        title: "افزودن  اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
  {
    id: "fifthPage",
    title: "مدیریت کامنت ها  ",
    icon: <Mail size={20} />,
    navLink: "/comment",
  },
  // {
  //   id: "smaplePage",
  //   title: "Sample Page",
  //   icon: <Airplay size={20} />,
  //   // navLink: "/sample",
  //   children: [
  //     {
  //       id: "invoiceList",
  //       title: "List",
  //       icon: <Circle size={12} />,
  //       navLink: "/apps/invoice/list",
  //     },
  //   ],
  // },
];
