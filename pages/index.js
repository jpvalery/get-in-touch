import NextLink from "next/link";

import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <main>
      <h1 className="py-8 font-serif text-5xl font-bold">Get in touch</h1>
      <div className="max-w-4xl pb-8 prose prose-xl text-gray-200">
        <p>
          I'm gonna be real. I can't pursue every opportunity that comes my way
          and have to be extremely picky.
        </p>
        <p>
          It's hard but that's the only way I can keep a sane bandwidth{" "}
          <em>and</em> keep shipping quality work.
        </p>
        <p>
          The more information you can give me about why we should work / play /
          get together — and why it will be fun / exciting / challenging /
          rewarding / life-changing — the more likely I’ll be to get on board.
        </p>
        <p>
          Share as much detail with as much honesty as possible and let me know
          why you feel we would work well together.
        </p>
        <p>
          In return, I <u>promise</u> I'll get back to you in a timely manner
          and offer some alternatives if I can't help you.
        </p>
        <p>Sounds good?</p>
      </div>
      <NextLink href="/generic">
        <button className="flex items-center justify-between px-4 py-2 mr-auto text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500">
          Let's do this
          <ArrowNarrowRightIcon className="w-5 h-5 ml-3 -mr-1" />
        </button>
      </NextLink>
    </main>
  );
}
