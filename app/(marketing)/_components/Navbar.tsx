"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "AI Insights",
    href: "/ai-insights",
  },
  {
    id: 3,
    label: "Discover our approach",
    href: "/discover-our-approach",
  },
] as const;

function isNavItemActive(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navItemClassName(isActive: boolean) {
  return cn(
    "font-bold uppercase tracking-wide",
    isActive && "bg-sky-primary/10 text-sky-primary hover:bg-sky-primary/15"
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className="w-full shrink-0 bg-background">
      <NavigationMenu
        className="hidden w-full max-w-none flex-none justify-center py-2 md:flex"
        viewport={false}
      >
        <NavigationMenuList className="w-full justify-start gap-x-3 px-4 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = isNavItemActive(item.href, pathname);

            return (
              <NavigationMenuItem key={item.id}>
                <Button
                  asChild
                  variant="ghost"
                  className={navItemClassName(isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center justify-end px-4 py-2 md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="font-bold uppercase tracking-wide">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_ITEMS.map((item) => {
                const isActive = isNavItemActive(item.href, pathname);

                return (
                  <Button
                    key={item.id}
                    asChild
                    variant="ghost"
                    className={cn(
                      "justify-start font-bold uppercase tracking-wide",
                      isActive && "bg-sky-primary/10 text-sky-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Link href={item.href} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
