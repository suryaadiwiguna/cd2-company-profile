import C_EmbedVideo from "@/components/layout/C_EmbedVideo";
import Hero from "@/components/Hero";
import C_Card from "@/components/card/C_Card";
import C_Container from "@/components/layout/C_Container";
import C_Section from "@/components/layout/C_Section";
import { Flex, Heading, Box } from "@chakra-ui/react";
import C_CardProduct from "@/components/card/C_CardProduct";
import C_CardPerson from "@/components/card/C_CardPerson";



const data = [
  {
    name: 'Surya Adi Wiguna',
    profileImg: '/img/teams.jpg',
    origin: {
      city: 'Sukabumi',
      country: 'Indonesia'
    },
    quote: "Elit incididunt laborum cupidatat velit enim nulla esse excepteur fugiat. Aliqua pariatur reprehenderit eu enim nisi eiusmod cillum consectetur velit. Incididunt amet nostrud aliquip excepteur aute amet ex enim laboris adipisicing mollit in anim.",
    order: "Bangkok, Thailand tour, family package, 7 days"

  },
  {
    name: 'John Doe',
    profileImg: '/img/teams.jpg',
    origin: {
      city: 'Hanoi',
      country: 'Vietnam'
    },
    quote: "Elit incididunt laborum cupidatat velit enim nulla esse excepteur fugiat. Aliqua pariatur reprehenderit eu enim nisi eiusmod cillum consectetur velit. Incididunt amet nostrud aliquip excepteur aute amet ex enim laboris adipisicing mollit in anim.",
    order: "Bali, Thailand tour, couple package, 4 days"

  }
]

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
              title="Our History"
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

      <C_Container bgImage="/img/image1.jpg">
        <C_Section>
          <Heading color={'white'} my={'1em'} textAlign={'center'}>Our Products And Services</Heading>
          <Flex gap={'3em'} direction={{ base: 'column', md: 'row' }}>
            <C_CardProduct
              title={'Travel Agency And Consultation'}
              image={'/img/teams.jpg'}
              desc={'Occaecat incididunt sit amet nisi veniam pariatur in esse.  Consequat nisi veniam in in veniam sint in ipsum veniam anim cupidatat dolor. Ex non nulla irure mollit laboris sit esse est.'}
              ctaLabel={'Check the offer'}
              ctaURL={'/products-services'}
              textCtaLabel={'Or check the testimonials'}
              textCtaURL={'#'}
            />
            <C_CardProduct
              title={'Outdoor and traveling equipment'}
              image={'/img/products-services.jpg'}
              desc={'Occaecat incididunt sit amet nisi veniam pariatur in esse.  Consequat nisi veniam in in veniam sint in ipsum veniam anim cupidatat dolor. Ex non nulla irure mollit laboris sit esse est.'}
              ctaLabel={'Go to the shop'}
              ctaURL={'https://www.tokopedia.com'}
            />
          </Flex>
        </C_Section>
      </C_Container>

      <C_Container bgColor={'gray'}>
        <C_Section>
          <Heading textAlign={'center'} mt={'1rem'}>Testimonials</Heading>
          <C_CardPerson data={data} />
          <Box mb={'6rem'}></Box>
        </C_Section>
      </C_Container>





    </>
  )
}
