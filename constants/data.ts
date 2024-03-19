import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  machine: string;
  privileges: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    machine: "aws-box2",
    privileges: "regular",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    machine: "prat@RED_BULL",
    privileges: "service",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    machine: "office-box-ssh",
    privileges: "service",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    machine: "office-box-ssh2",
    privileges: "root",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    machine: "azure-connector",
    privileges: "service",
    verified: true,
    status: "Active",
  },

];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: "user",
    label: "users",
  },
  {
    title: "Sessions",
    href: "/dashboard/sessions",
    icon: "employee",
    label: "sessions",
  },
  {
    title: "Profile & Billing",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Workflows",
    href: "/dashboard/workflows",
    icon: "kanban",
    label: "Workflow",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];
