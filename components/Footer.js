import GitHub from "../elements/icons/Github";
import LinkedIn from "../elements/icons/Linkedin";
import Twitter from "../elements/icons/Twitter";

export default function Footer() {
  return (
    <footer className="max-w-4xl">
      <div className="mx-auto py-24 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://linkedin.com/in/jpvalery"
            className="text-gray-400 hover:text-gray-500 h-6 w-6"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>

          <a
            href="https://github.com/jpvalery"
            className="text-gray-400 hover:text-gray-500 h-6 w-6"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </a>

          <a
            href="https://twitter.com/jpvalery"
            className="text-gray-400 hover:text-gray-500 h-6 w-6"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-500">
            &copy; 1992-2021 Jp Valery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
