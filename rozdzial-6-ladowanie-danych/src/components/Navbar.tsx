"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/src/config";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
export function Navbar() {
  const pathname = usePathname();

  const current = NAV_LINKS.find((link) => link.href === pathname);
  const activeTab = current ? String(current.id) : String(NAV_LINKS[0]?.id ?? "");

  return (
    <nav className="inset-0 py-6 grid place-items-center">
      <Tabs value={activeTab}>
        <TabsList>
          {NAV_LINKS.map((link) => (
            <TabsTrigger key={link.id} value={String(link.id)} asChild>
                <Link href={link.href}>{link.title}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}