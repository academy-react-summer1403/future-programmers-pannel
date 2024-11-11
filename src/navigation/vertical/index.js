import { Home,BookOpen,Book,Users, Airplay, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "user",
    title: "مدیریت کاربران",
    icon: <Users size={20} />,
    navLink: "/user",
  },
  {
    id: "courses",
    title: "مدیریت دوره",
    icon: <BookOpen size={20} />,
    // navLink: "/courses",
    children: [
      {
        id: "courseList",
        title: "لیست دوره ها",
        icon: <Circle size={12} />,
        navLink: "/apps/courses/list",
      },
      {
        id: "CourseAdd",
        title: "افزودن دوره جدید",
        icon: <Circle size={12} />,
        navLink: "/apps/courses/addCourse",
      },
    ],
  },
  {
    id: "news-essay",
    title: "مدیریت اخبار و مقالات",
    icon: <Airplay size={20} />,
    // navLink: "/news",
    children: [
      {
        id: "newsList",
        title: "لیست  اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/apps/news/list",
      },
      {
        id: "newsAdd",
        title: "افزودن  اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/apps/news/addNews",
      },
    ],
  },
  {
    id: "comment",
    title: "مدیریت کامنت ها  ",
    icon: <Book size={20} />,
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
