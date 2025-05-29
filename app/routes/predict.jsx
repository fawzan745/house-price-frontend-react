import ResultCard from "@/components/predict/card";
import PredictForm from "@/components/predict/form";
import { Toaster, toast } from "sonner";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/locations?limit=200`
  );
  return res.json();
}

export default function Predict() {
  const [house, setHouse] = useState({
    price: 0,
    bedroom: 0,
    bathroom: 0,
    land_area: 0,
    building_area: 0,
    location: {
      id: 0,
      district: "",
    },
  });

  const onSubmit = async (values) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/houses/predict`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error("Uh oh! Something went wrong.", {
        description: "There was a problem with your request.",
      });
    }

    const data = await res.json();
    setHouse(data);
  };

  return (
    <main className="overflow-x-hidden">
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            Predict the house price
          </h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative space-y-4">
              <PredictForm onSubmit={onSubmit} />
            </div>
            <div className="relative mt-6 sm:mt-0">
              <ResultCard house={house} />
            </div>
          </div>
        </div>
      </section>
      <Toaster richColors closeButton />
    </main>
  );
}
