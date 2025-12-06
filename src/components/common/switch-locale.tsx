"use client";

import { Check } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

import { useSearchParams } from "next/navigation";

export function SwitchLocale() {
  // Translation
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Variables
  const languages = [
    { code: "en", name: "العربية", flag: "🇸🇦" },
    { code: "ar", name: "English", flag: "🇺🇸" },
  ];

  // Functions
  const switchLocale = (locale: Locale) => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });
  };

  return (
    <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Trigger */}
      <DropdownMenuTrigger className="flex justify-center cursor-pointer items-center gap-2 bg-second border-transparent! rounded-lg  h-8 sm:h-11 sm:px-5 w-20 sm:w-[140px] text-xs sm:text-base ">
        {/* Name */}
        <span className=" text-xs sm:text-base font-bold">
          {languages.find((lang) => lang.code === locale)?.name}
        </span>
        {/* Flag */}
        <span className=" text-sm sm:text-xl">
          {languages.find((lang) => lang.code === locale)?.flag}
        </span>
      </DropdownMenuTrigger>

      {/* Dropdown */}
      <DropdownMenuContent className="w-[100px]" align="center">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLocale(language.code as Locale)}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {locale === language.code && <Check className="ml-2 h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
