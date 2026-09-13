import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { How } from "@/app/components/how";
import { Navbar } from "@/app/components/navbar";

export default function Home() {
  return (
    <main className="w-full min-h-[100vh] bg-brand-offwhite px-5 lg:px-20">
      <Navbar />
      <section className="flex items-center h-[75vh]">
        <Hero />
      </section>
      <How />
      <Footer />
    </main>
  );
};
