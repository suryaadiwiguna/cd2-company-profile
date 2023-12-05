import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react";

export default function AboutUs() {
    return (
        <Box p={'2em'}>
            <Heading my={'2em'}>About Us</Heading>
            <Flex flexDirection={'column'} gap={'1em'}>
                <Image src="/img/image1.jpg" width={'full'} />
                <Text>Aliquip non incididunt deserunt pariatur laborum enim. Ullamco voluptate irure velit excepteur elit proident incididunt irure duis. Incididunt elit culpa mollit sunt ad proident deserunt deserunt enim. Tempor dolor do commodo velit quis et ex. Proident id est sunt adipisicing aliquip occaecat aute proident in consequat qui nisi commodo. Minim esse voluptate nostrud eiusmod cupidatat id nostrud consequat occaecat pariatur cupidatat cupidatat laborum.</Text>
            </Flex>
        </Box >
    )
}
