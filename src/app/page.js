import EmbedVideo from "@/components/EmbedVideo";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero
        bgImage="/img/image1.jpg"
        heading="Start your unforgettable journey with us"
        subtitle="The best travel for your journey begins now."
        ctaButtonLabel="See Our Products And Service" />

      <Section
        title="How we see the world"
        briefDesc={"Velit quis reprehenderit officia nostrud eiusmod voluptate culpa magna ea Lorem anim velit magna nostrud. Adipisicing fugiat fugiat ipsum cupidatat nostrud velit enim nisi amet occaecat. "}
      >
        <EmbedVideo />
      </Section>

    </>
  )
}
