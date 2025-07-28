"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { avatarPlaceholderUrl, navItems } from "../constants/index";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName : string,
  email : string,
  avatar : string,
}

const Sidebar = ({fullName, avatar, email} : Props) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          alt="Logo"
          src="/assets/icons/logo-full-brand.svg"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-col flex-1 gap-6">
          {navItems.map((item) => (
            <Link href={item.url} key={item.name} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === item.url && "shad-active"
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === item.url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{item.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />

        <div className="hidden lg:block">
            <p className="subtitle-2 capitalize">{fullName}</p>
            <p className="caption truncate w-32">{email}</p>
        </div> 
      </div>
    </aside>
  );
};

export default Sidebar;
