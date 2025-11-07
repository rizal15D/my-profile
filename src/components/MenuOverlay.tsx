import React from "react";
import NavLink, { NavLinkProps } from "./NavLink";

interface MenuOverlayProps {
  links: NavLinkProps[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => (
  <ul className="flex flex-col py-4 items-center">
    {links.map((link, index) => (
      <li key={index}>
        <NavLink href={link.href} title={link.title} />
      </li>
    ))}
  </ul>
);

export default MenuOverlay;
