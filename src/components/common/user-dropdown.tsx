"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { type Locale } from "next-intl";
import { Globe, LogOut } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";

export function UserDropdown() {
  // Translation
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Language switching function
  const switchLocale = (newLocale: Locale) => {
    const params = searchParams.toString();
    const url = params ? `${pathname}?${params}` : pathname;
    router.push(url, { locale: newLocale });
  };

  // Get the other language (toggle between en and ar)
  const otherLocale = locale === "en" ? "ar" : "en";
  const otherLanguageName = otherLocale === "en" ? "English" : "العربية";

  // Logout function
  const handleLogout = async () => {
    signOut();
  };

  return (
    <DropdownMenu dir={isRTL ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Avatar className="hidden h-7 w-7 cursor-pointer sm:size-10 lg:block">
          <AvatarImage src="/abstract-profile.png" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-0" align={"end"} sideOffset={5}>
        <DropdownMenuLabel>{t("my-account")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile/info")} className="cursor-pointer">
            {t("my-profile")}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => switchLocale(otherLocale as Locale)}
            className="flex cursor-pointer items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {otherLanguageName}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600 hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {t("log-out")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
