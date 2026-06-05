import { PointerHighlight } from "./pointer-highlight";

export function PointerHighlightDemo1() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-lg py-20 text-center text-2xl font-bold tracking-tight md:text-4xl">
        The best way to grow is to{" "}
        <PointerHighlight containerClassName="inline-block mx-2" pointerClassName="text-blue-500">
          <span className="px-2">collaborate</span>
        </PointerHighlight>
      </div>
    </section>
  );
}
