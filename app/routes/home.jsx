import React from "react";
import Hero from "../home/hero";
// import Features from '@/components/home/features';
// import FAQs from '@/components/home/faqs';
// import Team from '@/components/home/team';
// import About from '@/components/home/about';

export function meta() {
  return [
    { title: "Rego Omah" },
    {
      name: "description",
      content:
        "Aplikasi prediksi harga rumah berdasarkan lokasi, luas bangunan, dan faktor lainnya. Bantu Anda mengetahui estimasi nilai properti secara akurat. Cocok untuk pembeli, penjual, atau agen properti.",
    },
  ];
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {
        <Hero />
        /*<About />
      <Features />
      <Team />
      <FAQs /> */
      }
    </main>
  );
}
