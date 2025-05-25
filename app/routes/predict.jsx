import PredictForm from "../components/predict/form";
import ResultCard from "../components/predict/card";

export function meta() {
  return [
    { title: "Rego Omah - Predict" },
    {
      name: "description",
      content:
        "Aplikasi prediksi harga rumah berdasarkan lokasi, luas bangunan, dan faktor lainnya. Bantu Anda mengetahui estimasi nilai properti secara akurat. Cocok untuk pembeli, penjual, atau agen properti.",
    },
  ];
}

export default function Home() {
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
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
              <ResultCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
