import { navlinks } from "@/data/navlinks";
import ActiveLink from "./atoms/ActiveLink";

interface IProps {
  setMenuOpen: (open: boolean) => void;
}

export default function MobileMenuList({ setMenuOpen }: IProps) {
  return (
    <div className="fixed top-16 left-0 w-full h-full bg-neutral-100 dark:bg-neutral-900">
      <ul className="flex flex-col gap-4 p-4">
        {navlinks.map(({ title, href }) => (
          <li
            key={title}
            onClick={() => setMenuOpen(false)}
            className="text-lg"
          >
            <ActiveLink href={href} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
