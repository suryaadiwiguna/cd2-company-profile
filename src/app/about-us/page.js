import Hero from "@/components/layout/Hero";
import C_Container from "@/components/layout/C_Container";
import C_Section from "@/components/layout/C_Section";
import { Heading, Image, Flex, Text } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Hero
                bgImage="/img/about-us.jpg"
                heading="We create unforgettable memories for you"

            />
            <C_Container>
                <C_Section>
                    <Flex gap={'1rem'} direction={'column'} mb={'5rem'} >
                        <Heading mt={'2rem'} mb={'1rem'}>{"About Us"}</Heading>
                        <Image src="/img/teams2.jpg" mb={'1rem'} />
                        <Text>
                            <b>2010-2013: Our Humble Beginnings</b><br />
                            In 2010, we embarked on a journey to turn travel dreams into reality. Founded by a passionate globetrotter, Surya Adi Wiguna, our travel agency started with a modest office, a dedicated team, and a commitment to personalized service. We quickly gained recognition for curating bespoke itineraries and delivering unparalleled customer care, making a mark in the dynamic world of travel.
                        </Text>
                        <Text>
                            <b>2014-2016: Technological Evolution</b><br />
                            As the digital age unfolded, we embraced technology to enhance your experience. Our user-friendly website, interactive mobile apps, and seamless booking processes became the foundation of our service. We used social media platforms to share travel tales, tips, and build a community of wanderlust enthusiasts, bringing our adventures closer to you.
                        </Text>
                        <Text>
                            <b>2017-2019: Global Expansion</b><br />
                            Buoyed by our reputation for excellence, we expanded globally. Strategic partnerships with airlines, hotels, and local vendors allowed us to offer exclusive perks and a wider array of destination choices. Our portfolio grew to include not only popular tourist spots but also hidden gems off the beaten path, catering to the diverse interests of our growing clientele.
                        </Text>
                        <Text>
                            <b>2020-2022: Navigating Challenges Together</b><br />
                            The global pandemic presented unprecedented challenges, and we faced them head-on. Adapting swiftly to changing circumstances, we prioritized flexibility in our booking policies and a commitment to your safety. Introducing virtual travel experiences and curated stay-at-home adventures, we ensured that the spirit of exploration endured even during uncertain times.
                        </Text>
                        <Text>
                            <b>2023 and Beyond: A Continued Odyssey</b><br />
                            Entering our second decade, our journey is far from over. We remain dedicated to creating meaningful connections between people and places. Sustainability and responsible travel practices now take center stage, aligning with the evolving preferences of conscientious travelers like you.<br /> <br />

                            With a legacy built on passion, innovation, and a deep love for travel, Travellian continues to inspire wanderlust. Join us as we turn each trip into a chapter of your lifelong adventure.
                        </Text>
                    </Flex >
                </C_Section>
            </C_Container>
        </>
    )
}
