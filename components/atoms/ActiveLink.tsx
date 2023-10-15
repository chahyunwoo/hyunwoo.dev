"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  href: string;
}

export default function ActiveLink({ title, href }: IProps) {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? "text-blue-400" : ""}>
      {title}
    </Link>
  );
}
