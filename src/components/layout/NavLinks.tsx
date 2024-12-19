"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import ImageIcon from "../ImageIcon";

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

export function NavLink({ href, icon, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg font-normal transition-colors h-12 w-28 text-base ",
        isActive ? `bg-[#D7E3FC]` : "hover:bg-[#d7e3fc41]"
      )}
    >
      <ImageIcon src={icon} alt={label} />
      <span>{label}</span>
    </Link>
  );
}
