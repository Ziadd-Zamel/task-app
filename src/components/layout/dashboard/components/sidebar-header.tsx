"use client";

import { UserDropdown } from "@/components/common/user-dropdown";
import Notifications from "./notifications";

export function SidebarHeader() {
  return (
    <header className="flex h-16 bg-white border-b shadow-sm shrink-0 items-center justify-between px-6 relative z-50 w-full">
      <div className="flex items-center gap-4">
        <UserDropdown />
        <Notifications />
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium font-poppins">Admin Logo</p>
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 size-3 rounded-full aspect-square" />
          <div className="bg-blue-600 size-3 rounded-full aspect-square" />
        </div>
      </div>
    </header>
  );
}
