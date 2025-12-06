"use client";

import { useState } from "react";
import {
  Menu,
  User,
  Settings,
  LogOut,
  Home,
  Gavel,
  HelpCircle,
  MapPin,
  Phone,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const navigationLinks = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/about", label: "عن مزادات", icon: Info },
    { href: "/auction-history", label: "تواريخ المزادات", icon: Gavel },
    { href: "/help", label: "المساعدة", icon: HelpCircle },
    { href: "/find-us", label: "أين تجدنا", icon: MapPin },
    { href: "/contact", label: "تواصل معنا", icon: Phone },
  ];

  const auctionCategories = [
    { href: "/auctions/cars", label: "مركبات", count: "1068" },
    { href: "/auctions/numbers", label: "أرقام مميزة", count: "726" },
    { href: "/auctions/properties", label: "عقارات", count: "52" },
    { href: "/auctions/various", label: "مزادات متنوعة", count: "207" },
    { href: "/auctions/spare-parts", label: "للإيجار", count: "33" },
  ];

  const userMenuItems = [
    { href: "/profile", label: "الملف الشخصي", icon: User },
    { href: "/settings", label: "الإعدادات", icon: Settings },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white hover:bg-white/10"
        >
          <Menu size={36} />
          <span className="sr-only">فتح القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] p-0 bg-white border-l border-gray-200"
      >
        <div className="flex flex-col h-full mt-10">
          {/* User Profile */}
          <SheetHeader className="p-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 ring-2 ring-[#A6252C]/20">
                <AvatarImage src="/abstract-profile.png" alt="صورة المستخدم" />
                <AvatarFallback className="bg-[#A6252C] text-white font-semibold">
                  م
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-right">
                <h3 className="font-semibold text-gray-900">أحمد محمد</h3>
                <p className="text-sm text-gray-500">ahmed@example.com</p>
              </div>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-4">
            <div className="space-y-1">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 text-right">
                التنقل
              </h4>
              {navigationLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleOpenChange(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="flex-1 text-right">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
