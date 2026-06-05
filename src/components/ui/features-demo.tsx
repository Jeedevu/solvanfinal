import { Icons } from "@/demos/ui/icons";
import { Badge } from "@/demos/ui/badge";
import { Marquee } from "@/demos/ui/marquee";

const marqueeData = [
  "What's the best business structure for my brand?",
  "What risks should I prepare for?",
  "How do I manage my business finances?",
  "How do I protect my intellectual property?",
  "How do I price my services?",
  "How do I stand out from my competitors?",
  "Who is my ideal customer?",
  "How do I know if my idea is viable?",
  "What business model should I choose?",
  "How much capital do I need to start?",
  "What licenses or permits do I need?",
  "How do I build a strong team?",
];

const features = [
  {
    description:
      "No jargon, no overcomplication — just clear steps you can follow to start and grow your business confidently.",
    icon: Icons.grass,
    title: "We make things simple",
  },
  {
    description:
      "Every strategy we create is designed to help you launch faster, grow smarter, and increase profits.",
    icon: Icons.shine,
    title: "We focus on real results",
  },
  {
    description:
      "With years of hands-on experience across industries, we bring proven strategies and practical solutions to the table.",
    icon: Icons.unBlur,
    title: "We know what works",
  },
  {
    description:
      "From your first idea to scaling your business, we provide ongoing support, not just a one-time plan.",
    icon: Icons.shaders,
    title: "With you all the way",
  },
];

export default function Features() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2,
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section className="relative bg-yellow-50 pt-16 pb-16 sm:pt-28 text-black rounded-3xl overflow-hidden mt-16 max-w-7xl mx-auto border border-neutral-200">
      <div className="mx-auto max-w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-10">
          <h2 className="max-w-3xl font-medium text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-none">
            Removing the roadblocks to your success
          </h2>
          <p className="max-w-xl text-base md:text-lg text-neutral-700">
            It's easy to get lost in a sea of advice, conflicting opinions, and
            endless "must-dos." We filter out the noise, focus on what truly
            matters, and give you the kind of clarity that lets your business
            shine in the market.
          </p>
          <div className="relative mx-auto max-w-3xl overflow-hidden mt-6">
            <div className="absolute left-0 z-50 h-full w-20 bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 z-50 h-full w-20 bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />

            <div className="-mx-6 flex w-screen flex-col md:-mx-10 lg:-mx-16 gap-2">
              <Marquee className="[--duration:45s] [--gap:0.75rem]" repeat={4}>
                {m1.map((q) => (
                  <Badge
                    className="rounded-none border-[#edebbe] bg-[#edebbe] px-3 py-1 text-black font-medium"
                    key={q}
                    size="lg"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:50s] [--gap:0.75rem]"
                repeat={4}
                reverse
              >
                {m2.map((q) => (
                  <Badge
                    className="rounded-none border-[#edebbe] bg-[#edebbe] px-3 py-1 text-black font-medium"
                    key={q}
                    size="lg"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee className="[--duration:42s] [--gap:0.75rem]" repeat={4}>
                {m3.map((q) => (
                  <Badge
                    className="rounded-none border-[#edebbe] bg-[#edebbe] px-3 py-1 text-black font-medium"
                    key={q}
                    size="lg"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-dashed divide-neutral-400 border-neutral-300 border-t border-dashed sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="flex flex-col gap-5 px-5 py-8 last:border-b-0 lg:border-b-0 lg:px-6 lg:py-10"
                key={feature.title}
              >
                <Icon className="size-12 text-neutral-700" />

                <div className="flex flex-col gap-2 pt-10 lg:pt-16">
                  <h3 className="font-medium text-2xl tracking-tight sm:text-3xl text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-neutral-600 text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
