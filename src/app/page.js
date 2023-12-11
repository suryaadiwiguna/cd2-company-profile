import C_EmbedVideo from "@/components/layout/C_EmbedVideo";
import Hero from "@/components/layout/Hero";
import C_Card from "@/components/card/C_Card";
import C_Container from "@/components/layout/C_Container";
import C_Section from "@/components/layout/C_Section";
import { Flex, Heading, Box } from "@chakra-ui/react";
import C_CardProduct from "@/components/card/C_CardProduct";
import C_CardTestimonials from "@/components/card/C_CardTestimonials";



const data = [
  {
    name: 'Surya Adi Wiguna',
    profileImg: '/img/customers/customer2.jpg',
    origin: {
      city: 'Sukabumi',
      country: 'Indonesia'
    },
    quote: "Unforgettable experiences! Travellian curated a seamless adventure, from breathtaking destinations to personalized details.A journey beyond expectations!",
    order: "Bangkok, Thailand tour, family package, 7 days"

  },
  {
    name: 'John Doe',
    profileImg: '/img/customers/customer1.jpg',
    origin: {
      city: 'Hanoi',
      country: 'Vietnam'
    },
    quote: "Exceptional service! Travellian orchestrated a perfect getaway. Impeccable planning, stunning locations, and seamless execution. Truly the architects of dream vacations!",
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
              briefDesc={"In 2010, we embarked on a journey to turn travel dreams into reality. Our travel agency started with a modest office, a dedicated team, and a commitment to personalized service. We quickly gained recognition for curating bespoke itineraries and delivering unparalleled experiences, making a mark in the dynamic world of travel. "}
              ctaLabel={'Learn more'}
              ctaURL={'/about-us'}
            />
            <C_EmbedVideo videoURL={'xLTCivIB4kU'} />
          </Flex>
          <Flex bg={'transparent'} direction={{ base: 'column', md: 'row' }} gap={{ base: '1em', lg: '10em' }}>
            <C_Card
              title="We are passionate adventurers"
              briefDesc={"We remain dedicated to creating meaningful connections between people and places. Sustainability and responsible travel practices now take center stage, aligning with the evolving preferences of conscientious travelers like you. "}
              ctaLabel={'Learn more'}
              ctaURL={'/teams'}
            />
            <C_Card
              title="Our culture: We respect cultures"
              briefDesc={"With a legacy built on passion, innovation, and a deep love for travel, we continues to inspire wanderlust. Join us as we turn each trip into a chapter of your lifelong adventure. "}
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
              desc={'Embark on a journey of a lifetime with us! Explore exotic destinations, indulge in thrilling adventures, and create unforgettable memories. Let us turn your travel dreams into reality.'}
              ctaLabel={'Check the offer'}
              ctaURL={'/products-services'}
              textCtaLabel={'Or check the testimonials'}
              textCtaURL={'#'}
            />
            <C_CardProduct
              title={'Outdoor and traveling equipment'}
              image={'/img/product/outdoor-equipment.jpg'}
              desc={"Elevate your outdoor experience with our premium equipment. Gear up for exploration and embrace the great outdoors with confidence and style."}
              ctaLabel={'Go to the shop'}
              ctaURL={'https://www.tokopedia.com'}
            />
          </Flex>
        </C_Section>
      </C_Container>

      <C_Container bgColor={'gray'}>
        <C_Section>
          <Heading textAlign={'center'} mt={'1rem'}>Testimonials</Heading>
          <C_CardTestimonials data={data} />
          <Box mb={'6rem'}></Box>
        </C_Section>
      </C_Container>





    </>
  )
}
