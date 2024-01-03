"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center gap-20  tracking-wider ">
      <li>
        <Link href="/now" className={pathname === "/now" ? "underline" : ""}>
          Now
        </Link>
      </li>
      <li>
        <Link
          href="/future"
          className={`${pathname === "/future" ? "underline" : ""}`}
        >
          Future
        </Link>
      </li>
    </ul>
  );
}
