import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <Hero
        bgImage="/img/image1.jpg"
        heading="Start your unforgettable journey with us"
        subtitle="The best travel for your journey begins now."
        ctaButtonLabel="See Our Products And Service" />
      <AboutUs />
    </main>
  )
}
