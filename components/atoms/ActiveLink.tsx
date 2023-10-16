"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  title: string;
  href: string;
}

export default function ActiveLink({ title, href }: IProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link href={href} className={isActive ? "text-blue-400" : ""}>
      {title}
    </Link>
  );
}
