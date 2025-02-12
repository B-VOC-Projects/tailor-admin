import {
  BiRuler,
  BiSolidUserBadge,
  BiSolidUserRectangle,
  BiTask,
} from "react-icons/bi";

const STAFF_ROUTES = [
  {
    name: "All Staff",
    path: "/staff",
    icon: BiSolidUserRectangle,
  },
  {
    name: "Roles",
    path: "/staff/roles",
    icon: BiSolidUserBadge,
  },
  {
    name: "Tasks",
    path: "/staff/tasks",
    icon: BiTask,
  },
];

const MASTER_ROUTES = [
  {
    name: "Measurements",
    path: "/master/measurement",
    icon: BiRuler,
  },
  {
    name: "Clothing Type",
    path: "/master/clothing-type",
    icon: BiRuler,
  },
  {
    name: "Fabric Type",
    path: "/master/fabric-type",
    icon: BiRuler,
  },
];

export { STAFF_ROUTES, MASTER_ROUTES };
