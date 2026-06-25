'use client'
import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const NAV_ITEMS = [
  {
    id: 1,
    label: 'Home',
    href: '/'
  },
  {
    id: 2,
    label: 'AI Insights',
    href: '/ai-insights'
  },
  {
    id: 3,
    label: 'Discover our approach',
    href: '/discover-our-approach'
  }
  // {
  //   id: 4,
  //   label: 'Health Experts',
  //   href: '/health-experts'
  // }
]

const Navbar = (props: Props) => {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigateTo = (href: string) => {
    setMobileOpen(false)
    router.push(href)
  }

  return (
    <header className='w-full shrink-0 bg-background'>
      <NavigationMenu
        className='hidden w-full max-w-none flex-none justify-center py-2 md:flex'
        viewport={false}
      >
        <NavigationMenuList className='w-full justify-start px-4 py-2 gap-x-3'>
          {NAV_ITEMS.map((item) => (
            <NavigationMenuItem key={item.id}>
              <Button
                variant='ghost'
                onClick={() => router.push(item.href)}
                className='font-bold uppercase tracking-wide'
              >
                {item.label}
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className='flex items-center justify-end px-4 py-2 md:hidden'>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' aria-label='Open menu'>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[280px]'>
            <SheetHeader>
              <SheetTitle className='font-bold uppercase tracking-wide'>
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col gap-1 px-4'>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  variant='ghost'
                  onClick={() => navigateTo(item.href)}
                  className='justify-start font-bold uppercase tracking-wide'
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
