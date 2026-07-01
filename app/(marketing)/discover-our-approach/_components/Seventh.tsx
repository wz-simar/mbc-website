import { Container, SectionShell } from "@/components/ui/SectionShell";

const Seventh = () => {
  return (
    <SectionShell className="bg-white py-10 md:py-14">
      <Container>
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-[#2473D9] to-[#026D31] px-6 py-12 text-center md:gap-6 md:px-16 md:py-16">
          <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
            Ready to Reclaim Your Balance?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            ByeBimari is not just a ring. It is not just an app. It is your
            partner in natural health.
          </p>
          <button
            type="button"
            className="mt-1 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#2473D9] shadow-md transition hover:bg-white/95"
          >
            Start Your Journey
          </button>
        </div>
      </Container>
    </SectionShell>
  );
};

export default Seventh;
