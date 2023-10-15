"use client";

import { useState } from "react";
import MobileToggleButton from "./atoms/MobileToggleButton";
import ThemeToggleButton from "./atoms/ThemeToggleButton";
import MobileMenuList from "./MobileMenuList";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <ul className="flex gap-3">
        <li>
          <MobileToggleButton toggleMenu={toggleMenu} />
        </li>
        <li>
          <ThemeToggleButton />
        </li>
      </ul>

      {menuOpen && <MobileMenuList setMenuOpen={setMenuOpen} />}
    </div>
  );
}
