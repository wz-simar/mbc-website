'use client'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
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
  },
  // {
  //   id: 4,
  //   label: 'Health Experts',
  //   href: '/health-experts'
  // }
]

const Navbar = (props: Props) => {
  const router = useRouter()

  return (
    <header className='w-full shrink-0 bg-background'>
      <NavigationMenu
        className='w-full max-w-none flex-none justify-center py-2'
        viewport={false}
      >
        <NavigationMenuList className='w-full justify-start px-4 py-2 gap-x-3'>
          {NAV_ITEMS.map((item, idx) => (
            <NavigationMenuItem key={idx}>
              <Button variant='ghost' onClick={() => router.push(item.href)} className='font-bold uppercase tracking-wide'>
                {item.label}
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Navbar
