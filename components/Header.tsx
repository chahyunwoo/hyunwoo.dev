import { navlinks } from "@/data/navlinks";
import Link from "next/link";
import ActiveLink from "./atoms/ActiveLink";
import ThemeToggleButton from "./atoms/ThemeToggleButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="border-b w-full px-8 fixed h-14 md:h-16 z-10 bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full h-full max-w-screen-lg mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold">hyunwoo.dev</h1>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex gap-4">
            {navlinks.map(({ title, href }) => (
              <li key={title}>
                <ActiveLink href={href} title={title} />
              </li>
            ))}
            <li>
              <ThemeToggleButton />
            </li>
          </ul>
        </nav>

        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
