import { Separator } from "@/components/ui/separator";
import { FOOTERDATA } from "@/lib/constants/footer.constant";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#A6252C] text-white py-12 px-4">
      <div className="box-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-8">
          {/* Logo and Social Media Section */}
          <div className=" w-full flex flex-col items-center lg:items-center space-y-6">
            <Image
              src="/assets/logo.png"
              alt="Mazadat Logo"
              width={100}
              height={90}
            />
            <div className="text-center w-full">
              <h3 className="text-[22px] font-bold font-raleway">
                Social Media
              </h3>
              <Separator className=" w-[80%] mb-5 mt-2" />
              <div className="flex gap-4 justify-center">
                {FOOTERDATA.socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="hover:opacity-80 transition-opacity"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Links Section */}
          <div className="flex flex-col items-start sm:items-center">
            <div className="test-start sm:text-center lg:text-start">
              <h3 className="text-xl font-bold mb-6">الروابط الرئيسية</h3>
              <ul className="space-y-2">
                {FOOTERDATA.mainLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:underline text-[#BBBBBB] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Auctions Section */}
          <div className="flex flex-col items-start sm:items-center">
            <div className="test-start sm:text-center lg:text-start">
              <h3 className="text-xl font-bold mb-6">المزادات</h3>
              <ul className="space-y-2">
                {FOOTERDATA.auctions.map((auction, index) => (
                  <li key={index}>
                    <Link
                      href={auction.href}
                      className="hover:underline text-[#BBBBBB] hover:text-white"
                    >
                      {auction.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start sm:items-center">
            <div className="test-start sm:text-center lg:text-start">
              <h3 className="text-xl font-bold mb-6">تواصل معنا الآن</h3>
              <ul className="space-y-3">
                {FOOTERDATA.contact.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-start gap-2 text-[#BBBBBB] hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
