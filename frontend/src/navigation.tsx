import { ReactNode } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SavingsIcon from "@mui/icons-material/Savings";

interface NavigationItem {
  label: string;
  path: string;
  icon: ReactNode;
}

export const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: <ReceiptIcon />,
  },
  // {
  //   label: "Invoices",
  //   path: "/invoices",
  //   icon: <SavingsIcon />,
  // },
  // {
  //   label: "Bills Reminders",
  //   path: "/bills-reminders",
  //   icon: <SavingsIcon />,
  // },
];
