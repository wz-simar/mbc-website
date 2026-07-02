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
import { Menu, X } from "lucide-react";

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
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

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

      <div className="relative md:hidden">
        <div className="flex items-center justify-end px-4 py-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {mobileOpen ? (
          <>
            <button
              type="button"
              aria-hidden
              tabIndex={-1}
              className="fixed inset-0 z-30 cursor-default bg-black/20 animate-in fade-in duration-200"
              onClick={() => setMobileOpen(false)}
            />
            <nav
              id="mobile-menu"
              className="absolute inset-x-0 top-full z-40 origin-top border-b border-black/5 bg-background shadow-lg animate-in slide-in-from-top-2 fade-in duration-200"
            >
              <div className="flex flex-col gap-1 px-4 py-3">
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
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </nav>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
