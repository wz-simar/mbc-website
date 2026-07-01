import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";

const COPY = (
  <>
    <span>
      Modern life has created a profound disconnection. We navigate high-stress
      environments, processed nutrition, and digital noise, often ignoring the
      subtle signals our bodies send us.
    </span>
    <span className="font-bold">
      These small imbalances slowly accumulate, affecting your energy, mood, and
      long-term longevity without you even noticing.
    </span>
    <span>
      ByeBimari bridges this gap, combining ancient Indian wellness principles
      with precision technology to help you listen to your body once again.
    </span>
  </>
);

const Second = () => {
  return (
    <SectionShell className="bg-white">
      <div className="relative overflow-hidden md:hidden">
        <Image
          alt=""
          aria-hidden
          src="/images/discover-our-approach-new/discover-new-second.png"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <Container className="relative z-10 flex flex-col gap-6 py-10 text-center">
          <h2 className="text-3xl font-bold text-[#2BB28F]">
            Discover our Approach
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-[#0B1C30]/85">
            {COPY}
          </div>
        </Container>
      </div>

      <div className="relative hidden md:flex md:items-center md:justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-8 text-center">
          <h2 className="text-4xl font-bold text-[#2BB28F] lg:text-5xl">
            Discover our Approach
          </h2>
          <div className="flex max-w-3xl flex-col gap-5 text-lg leading-relaxed text-[#0B1C30]/85">
            {COPY}
          </div>
        </div>
        <Image
          alt="Discover our approach second section"
          src="/images/discover-our-approach-new/discover-new-second.png"
          width={1000}
          height={333}
          className="w-full"
          sizes="100vw"
        />
      </div>
    </SectionShell>
  );
};

export default Second;
