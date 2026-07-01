import Image from "next/image";

import { Container, SectionShell } from "@/components/ui/SectionShell";

const Third = () => {
  return (
    <SectionShell className="bg-white py-10 md:py-14">
      <Container>
        {/* <div className="mb-8 flex flex-col items-center gap-2 text-center md:mb-10">
          <h2 className="text-2xl font-bold text-[#0B1C30] md:text-4xl">
            The 4 Pillars of Natural Health
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            A holistic framework for sustainable well-being.
          </p>
        </div> */}

        <div className="-mx-6 p-1 md:mx-0 md:p-0">
          <Image
            alt="The 4 pillars of ByeBimari wellness ecosystem"
            src="/images/discover-our-approach-new/discover-new-third.png"
            width={1200}
            height={900}
            className="h-auto w-full max-w-full"
            sizes="100vw"
          />
        </div>
      </Container>
    </SectionShell>
  );
};

export default Third;
