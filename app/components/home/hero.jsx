import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section>
      <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
              Instant House Price Estimator
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg">
              Accurate, AI-powered predictions to help you plan your next move.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="px-5 text-base">
                <NavLink to="/predict">
                  <span className="text-nowrap">Start Predict</span>
                </NavLink>
              </Button>
            </div>
          </div>
          <img
            className="-z-10 order-first ml-auto h-72 w-full object-cover sm:h-96 md:h-8/10 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten mt-12 lg:mt-56 dark:brightness-75"
            src="/house-image.png"
            alt="House Image"
            height="4000"
            width="3000"
          />
        </div>
      </div>
    </section>
  );
}
