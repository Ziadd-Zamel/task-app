/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import {
  LayoutDashboard,
  ListTodo,
  User,
  MessageSquare,
  Activity,
  Calendar,
  Send,
  Mail,
  Ticket,
  FileText,
  Briefcase,
  FolderOpen,
  Wallet,
  Settings,
} from "lucide-react";

import { NavMain } from "@/components/layout/dashboard/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const iconMap: Record<string, any> = {
  LayoutDashboard,
  ListTodo,
  User,
  MessageSquare,
  Activity,
  Calendar,
  Send,
  Mail,
  Ticket,
  FileText,
  Briefcase,
  FolderOpen,
  Wallet,
};

interface NavItem {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
  isRed?: boolean;
  items?: Array<{
    title: string;
    url: string;
  }>;
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navItems: NavItem[];
}

export function AppSidebar({ navItems, ...props }: AppSidebarProps) {
  // Map icon strings to actual icon components
  const navItemsWithIcons = navItems.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || MessageSquare,
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="hide-scrollbar bg-white pt-16">
        <NavMain items={navItemsWithIcons} />
      </SidebarContent>

      <SidebarFooter className="border-t p-2 bg-white">
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Settings" className="cursor-pointer">
            <Settings />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
