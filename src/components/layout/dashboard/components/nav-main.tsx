"use client";

import { type LucideIcon } from "lucide-react";
import { FaChevronRight } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    isRed?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  // Check if item or any of its subitems are active
  const isItemActive = (item: (typeof items)[0]) => {
    if (pathname === item.url) return true;
    if (item.items?.some((subItem) => pathname === subItem.url)) return true;
    return false;
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="mt-8 space-y-0.5">
        {items.map((item) => {
          const isActive = isItemActive(item);

          // If item has no sub-items, render as a direct button
          if (!item.items || item.items.length === 0) {
            return (
              <SidebarMenuItem key={item.title + item.url}>
                <SidebarMenuButton
                  tooltip={item.title}
                  onClick={() => handleNavigation(item.url)}
                  className={`cursor-pointer h-11 gap-7 px-4 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                    item.isRed
                      ? "text-red-500 hover:text-red-600"
                      : isActive
                      ? "text-[#2A85FF]"
                      : "text-gray-700"
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span
                    className={cn(
                      "font-semibold font-poppins text-[#334D6E] font-sm",
                      isActive && "text-[#2A85FF]"
                    )}
                  >
                    {item.title}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible
              key={item.title + item.url}
              asChild
              defaultOpen={isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className={`cursor-pointer h-11 px-4 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                      isActive ? "text-[#2A85FF]" : "text-gray-700"
                    }`}
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className="font-semibold font-poppins text-[#334D6E] font-sm ml-5">
                      {item.title}
                    </span>
                    <FaChevronRight className="ml-auto w-12 h-12 text-blue-600 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden transition-all duration-200 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                  <SidebarMenuSub className="ml-9 mt-1 space-y-0.5">
                    {item.items.map((subItem) => {
                      const isSubItemActive = pathname === subItem.url;

                      return (
                        <SidebarMenuSubItem
                          className="hover:bg-blue-50 duration-300 transition-all"
                          key={subItem.title}
                        >
                          <SidebarMenuSubButton
                            onClick={() => handleNavigation(subItem.url)}
                            className={`cursor-pointer h-9 ${
                              isSubItemActive
                                ? "text-[#2A85FF]"
                                : "text-gray-600 hover:text-blue-600"
                            }`}
                          >
                            <span className="text-sm">{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
