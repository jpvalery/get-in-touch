
import { Button, Post } from "@jpvalery/mistral";


export default function Home() {
  return (
    <>
      <Post header="Get in touch">
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
      </Post>
        <Button
          color="purple"
          destination="step"
          label="Let's do this"
          url="/generic"
        />
    </>
  );
}
