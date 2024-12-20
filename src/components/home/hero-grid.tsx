import { Button } from "~/src/components/ui/button";

export const HeroGrid = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-bold text-4xl text-black sm:text-6xl lg:text-7xl">
                Collaborate remotely, with
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-[#4ADE80] border-b-[30px]"></span>
                  <h1 className="relative font-bold text-4xl text-black sm:text-6xl lg:text-7xl">
                    Postcrafts.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Button title="" size="lg" variant="default">
                  {" "}
                  Start exploring{" "}
                </Button>

                <a
                  href="/"
                  title=""
                  className="mt-6 inline-flex items-center font-semibold text-base transition-all duration-200 hover:opacity-80 sm:mt-0"
                >
                  <svg
                    className="mr-3 h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
