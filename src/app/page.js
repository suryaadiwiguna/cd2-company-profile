import C_EmbedVideo from "@/components/layout/C_EmbedVideo";
import Hero from "@/components/Hero";
import C_Card from "@/components/card/C_Card";
import C_Container from "@/components/layout/C_Container";
import C_Section from "@/components/layout/C_Section";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Hero
        bgImage="/img/image1.jpg"
        heading="Start your unforgettable journey with us"
        subtitle="The best travel for your journey begins now."
        ctaButtonLabel="See Our Products And Service" />

      <C_Container bgColor={'white'}>
        <C_Section>
          <Flex bg={'transparent'} direction={{ base: 'column', md: 'row' }} gap={{ base: '1em', lg: '10em' }}>
            <C_Card
              title="How we see the world"
              briefDesc={"Velit quis reprehenderit officia nostrud eiusmod voluptate culpa magna ea Lorem anim velit magna nostrud. Adipisicing fugiat fugiat ipsum cupidatat nostrud velit enim nisi amet occaecat. "}
              ctaLabel={'Learn more'}
              ctaURL={'/about-us'}
            />
            <C_EmbedVideo videoURL={'https://www.youtube.com/embed/xLTCivIB4kU?si=zUSk0_vXKte-TV7W'} />
          </Flex>
          <Flex bg={'transparent'} direction={{ base: 'column', md: 'row' }} gap={{ base: '1em', lg: '10em' }}>
            <C_Card
              title="We are passionate adventurers"
              briefDesc={"Velit quis reprehenderit officia nostrud eiusmod voluptate culpa magna ea Lorem anim velit magna nostrud. Adipisicing fugiat fugiat ipsum cupidatat nostrud velit enim nisi amet occaecat. "}
              ctaLabel={'Learn more'}
              ctaURL={'/teams'}
            />
            <C_Card
              title="Our culture: We respect cultures"
              briefDesc={"Velit quis reprehenderit officia nostrud eiusmod voluptate culpa magna ea Lorem anim velit magna nostrud. Adipisicing fugiat fugiat ipsum cupidatat nostrud velit enim nisi amet occaecat. "}
              ctaLabel={'Learn more'}
              ctaURL={'/about-us'}
            />
          </Flex>
        </C_Section>
      </C_Container>

    </>
  )
}
