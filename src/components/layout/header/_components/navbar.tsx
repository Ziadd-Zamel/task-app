"use client";

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";
import { useLocale } from "next-intl";
import { SwitchLocale } from "@/components/common/switch-locale";

export default function Navbar() {
  const locale = useLocale();
  const navLinks = [
    { href: "/about", label: "عن مزادات" },
    { href: "/auction-history", label: "تواريخ المزادات" },
    { href: "/help", label: "المساعدة" },
    { href: "/find-us", label: "أين تجدنا" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  const auctionCategories = [
    { href: "/auctions/cars", label: "مركبات", count: "1068" },
    { href: "/auctions/numbers", label: "أرقام مميزة", count: "726" },
    { href: "/auctions/properties", label: "عقارات", count: "52" },
    { href: "/auctions/various", label: "مزادات متنوعة", count: "207" },
    { href: "/auctions/spare-parts", label: "للإيجار", count: "33" },
  ];

  return (
    <header className=" text-white -mb-6 relative z-30 ">
      <div className=" bg-main ">
        <div className="box-container flex justify-between py-2">
          <div className="flex items-center justify-center gap-5">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sidebar />
            </div>

            {/* Logo */}
            <Link href="/" className="">
              <Image
                src="/assets/logo.png"
                alt="Mazadat Logo"
                width={100}
                height={90}
                priority
                className="md:w-[100px] md:h-[90px] w-[60px] h-[50px]"
              />
            </Link>
          </div>
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-200 transition-colors font-medium text-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-4">
            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white h-8 w-8"
              >
                <Search className=" h-6 w-6" />
              </Button>

              {/* Language Switcher */}
              <div className="sm:block hidden">
                <SwitchLocale />
              </div>

              {/* Login Button */}
              <Link href="/login">
                <Button className=" h-8 sm:h-11 sm:px-5 w-20 sm:w-[140px] text-xs sm:text-base ">
                  تسجيل الدخول
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Blue Navigation Menu Bar */}
      <div className="bg-second border-t border-t-white rounded-b-3xl shadow-[0px_1px_8px_0px_#00000040]">
        <div className="box-container lg:px-3">
          <div className="flex scrollbar-hide items-center lg:justify-between gap-3 py-1 md:py-3 overflow-x-auto">
            {auctionCategories.map((category) => (
              <DropdownMenu
                dir={locale === "ar" ? "rtl" : "ltr"}
                key={category.href}
              >
                <DropdownMenuTrigger className="flex items-center cursor-pointer gap-2 text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-white/10 bg-transparent border-none outline-none">
                  <span className="font-bold text-sm md:text-base">
                    {category.label}
                  </span>
                  <span className="bg-main text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    {category.count}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href={`${category.href}/all`}
                      className="cursor-pointer"
                    >
                      جميع {category.label}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`${category.href}/active`}
                      className="cursor-pointer"
                    >
                      المزادات النشطة
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`${category.href}/upcoming`}
                      className="cursor-pointer"
                    >
                      المزادات القادمة
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`${category.href}/closed`}
                      className="cursor-pointer"
                    >
                      المزادات المنتهية
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
