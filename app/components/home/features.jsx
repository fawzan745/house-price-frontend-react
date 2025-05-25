import { Card, CardContent, CardHeader } from "../../ui/card";
import { FileSearch2, ChartBarBig, BrainCircuit } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your real estate analysis needs
          </h2>
          <p className="mt-4">
            Smart insights and predictions to help you understand housing trends
            and make data-driven decisions
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <FileSearch2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Price Estimation</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Get accurate house price predictions by entering key details
                like location, size, and condition — powered by advanced machine
                learning.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ChartBarBig className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Interactive EDA</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Explore the housing dataset with dynamic charts and filters.
                Gain insights into market trends, price distributions, and key
                factors.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BrainCircuit className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">ML-Powered Intelligence</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Backed by robust machine learning models, the system learns from
                patterns in real estate data to deliver smart and reliable
                insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-card absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-card absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
