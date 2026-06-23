import Image from 'next/image'

import { Container, SectionShell } from '@/components/ui/SectionShell'

import { HomeButton } from './HomeButton'
import { SectionBadge } from './SectionBadge'

const AVATARS = [
  '/images/home/man1.png',
  '/images/home/man2.png',
  '/images/home/woman1.png',
  '/images/home/woman2.png', 
] as const

function HeroVisuals ({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[520px] sm:max-w-[600px] lg:mx-0 lg:ml-auto lg:mr-[-19px] lg:max-w-[763px] ${className}`}
    >
      {/* Figma canvas positions: mockup 598,317 (335×503), people 887,90 (474×711) */}
      <div className='relative aspect-763/730 w-full'>
        <Image
          src='/images/home/people.png'
          alt='Natural health experts guiding your wellness journey'
          width={474}
          height={711}
          className='absolute right-0 top-0 h-[97.4%] w-[62.12%] object-contain object-top-right'
          priority
        />
        <Image
          src='/images/home/mockup.png'
          alt='SKY Ring app and wearable devices'
          width={335}
          height={503}
          className='absolute left-0 top-[31.1%] z-10 w-[43.9%] object-contain'
          priority
        />
      </div>
    </div>
  )
}

export function HeroSection () {
  return (
    <SectionShell
      id='hero'
      className='full-bleed relative min-h-[640px] overflow-hidden md:min-h-[702px]'
    >
      <Image
        src='/images/home/bg.png'
        alt=''
        fill
        className='object-cover object-top'
        priority
      />

      <Container className='relative z-10 grid min-h-[640px] items-center gap-10 py-16 md:min-h-[702px] md:py-20 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-8'>
        <div className='flex flex-col gap-6 md:gap-8'>
          <div>
            <SectionBadge className='border-sky-primary/25 bg-[#eef6ff] text-[#0c2340] shadow-none text-xs'>
              SKY RING POWERED WELLNESS
            </SectionBadge>
          </div>

          <h1 className='text-4xl font-bold leading-[1.1] tracking-tight text-[#0c2340] md:text-5xl lg:text-[56px]'>
            Smart Health Tracking.
            <span className='mt-1 block'>
              Guided by <span className='text-emerald-600'>Natural</span>
            </span>
            <span className='block text-emerald-600'>Health Experts</span>
          </h1>

          <div>
            <HomeButton variant='sky' className='shadow-none'>
              Start Your Guided Wellness Journey
            </HomeButton>
          </div>

          <div className='flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4'>
            <div className='flex -space-x-3'>
              {AVATARS.map((src, index) => (
                <div
                  key={src}
                  className='relative size-14 overflow-hidden rounded-full border-2 border-white md:size-[61px]'
                  style={{ zIndex: AVATARS.length - index }}
                >
                  <Image
                    src={src}
                    alt=''
                    fill
                    className='object-cover'
                    sizes='61px'
                  />
                </div>
              ))}
            </div>
            <p className='max-w-xs text-sm font-medium leading-snug text-muted-foreground md:text-base'>
              Join Thousands on their wellness Transformation Journey
            </p>
          </div>
        </div>

        <HeroVisuals />
      </Container>
    </SectionShell>
  )
}
