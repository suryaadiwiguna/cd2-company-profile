import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Hero
        bgImage="/img/image1.jpg"
        heading="Start your unforgettable journey with us"
        subtitle="The best travel for your journey begins now."
        ctaButtonLabel="See Our Products And Service" />

      {/* Company Overview Section */}

      <Box p={'1rem'} bg={'white'}>
        <Section />
      </Box>

    </>

  )
}
