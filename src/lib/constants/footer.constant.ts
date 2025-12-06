import { Mail, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

export const FOOTERDATA = {
  mainLinks: [
    { label: "عن الشركة", href: "#" },
    { label: "توابع المزادات", href: "#" },
    { label: "المساعدة", href: "#" },
    { label: "أين تجدنا", href: "#" },
    { label: "تواصل معنا", href: "#" },
  ],
  auctions: [
    { label: "مركبات", href: "#" },
    { label: "معدات وآليات", href: "#" },
    { label: "باقات إتصالات المميزة", href: "#" },
    { label: "بضائع متنوعة", href: "#" },
    { label: "عقارات", href: "#" },
    { label: "للإيجار", href: "#" },
  ],
  contact: [
    {
      label: "mazadat@gmail.com",
      icon: Mail,
    },
    {
      label: "المساعدة",
      icon: HelpCircle,
    },
    {
      label: "+01222222222",
      icon: Phone,
      dir: "ltr",
    },
    {
      label: "المحادثة الفورية",
      icon: MessageCircle,
    },
  ],
  socialMedia: [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
    { icon: GrTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
  ],
};
