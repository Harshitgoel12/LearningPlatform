
const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
    type:"both"
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: "Instructor",
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: "Instructor",
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/course/add-course",
    type: "Instructor",
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: "Student",
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    id: 7,
    name: "Cart",
    path: "/dashboard/cart",
    type: "Student",
    icon: "VscBookmark",
  },
  {
    name: "Admin Panel",
    path: "/dashboard/admin-panel",
    type: "Admin",
    icon: "VscHistory",
  },
];

export default  sidebarLinks
