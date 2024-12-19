"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import ImageIcon from "../ImageIcon";
import theme from "@/global-styles/theme";
import { NavLink } from "./NavLinks";

const ITEM_HEIGHT = 48;

interface HeaderProps {
  isLogin?: boolean;
}
const Header: React.FC<HeaderProps> = ({ isLogin }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  // State for menu anchor
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Event handlers
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      className="p-[14px] px-10 flex justify-between items-center"
      style={{ backgroundColor: theme.colors.white }}
    >
      {/* Brand Logo */}
      <Image
        src="/brandLogo/logo.svg"
        width={178}
        height={48}
        alt="Brand Pulse"
      />
      {isLogin && (
        <>
          {/* Navigation Links */}
          <nav className="flex items-center gap-2">
            {[
              { href: "/home", icon: "/header/home.svg", label: "Home" },
              { href: "/order", icon: "/header/order.svg", label: "Order" },
            ].map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <ImageIcon src="/header/bell.svg" alt="Notifications" />
            <Divider orientation="vertical" flexItem />
            <div className="flex items-center">
              <Avatar>S</Avatar>
              <IconButton
                aria-label="user-menu"
                aria-controls={open ? "user-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleMenuOpen}
              >
                <ImageIcon src="/header/chevron-down.svg" alt="Chevron Down" />
              </IconButton>
            </div>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "user-menu",
              }}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "100px",
                  },
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={() => push("/login")}>Logout</MenuItem>
            </Menu>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
