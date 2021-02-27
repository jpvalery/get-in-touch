import NextLink from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="font-serif font-bold text-5xl py-8">Get in touch</h1>
      <div className="prose prose-xl text-gray-200 max-w-4xl pb-8">
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
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cta-600 hover:bg-cta-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-500 mx-auto">
          Let's do this
          <svg
            class="ml-3 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </NextLink>
    </main>
  );
}
