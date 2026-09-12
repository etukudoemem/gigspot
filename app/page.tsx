import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { How } from "@/components/how";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="w-full min-h-[100vh] bg-brand-offwhite px-5 lg:px-20">
      <Navbar />
      <section className="flex items-center h-[75vh]">
        <Hero />
      </section>
      <section>
        <How />
      </section>
      <Footer />
    </main>
  );
}
