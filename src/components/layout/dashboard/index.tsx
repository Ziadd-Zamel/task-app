import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarHeader } from "./components/sidebar-header";
import { ReactNode } from "react";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: "LayoutDashboard" },
  { title: "Task", url: "/task", icon: "ListTodo" },
  { title: "Employee", url: "/employee", icon: "User" },
  {
    title: "Messages",
    url: "/messages",
    icon: "MessageSquare",
    items: [
      { title: "Inbox", url: "/messages/inbox" },
      { title: "Sent", url: "/messages/sent" },
    ],
  },
  { title: "Activities", url: "/activities", icon: "Activity" },
  { title: "Calender", url: "/calendar", icon: "Calendar" },
  { title: "Post", url: "/post", icon: "Send" },
  { title: "Tickets", url: "/tickets", icon: "Ticket" },
  { title: "Reports", url: "/reports", icon: "FileText" },
];

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header  */}
      <SidebarHeader />

      {/* Sidebar and content  */}
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider dir="ltr">
          <AppSidebar navItems={navItems} />
          <SidebarInset>
            <div className="w-full bg-gray-50 h-full relative overflow-auto">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
