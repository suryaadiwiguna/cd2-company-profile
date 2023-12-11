import { createClient } from "contentful"
import { Box, Flex, Heading, Image, Text, Divider } from "@chakra-ui/react"
import Link from "next/link"

export default async function C_Teams() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'teams' })

    const teams = res.items

    // console.log(teams)

    return (
        <>
            {teams.map((team) => (
                <Box key={team.sys?.id} minW={'200px'} maxW={'360px'} bg={'white'} borderRadius={'15px'} overflow={'hidden'} textAlign={'center'} boxShadow={'lg'}>

                    <Flex p={'1em'} h={'240px'} align={'center'} justify={'center'} bg={'#FF7757'}>
                        <Image alt="" src={team.fields.profilePicture?.fields.file.url} borderRadius={'50%'} objectFit={'cover'} aspectRatio={1 / 1} maxH={'180px'} />
                    </Flex>

                    <Flex direction={'column'} gap={'1rem'} px={'1rem'} py={'2rem'}>
                        <Heading fontSize={'larger'}> {team.fields.fullName} </Heading>
                        <Text>
                            {team.fields.role} <br />
                            <span>{team.fields.origin}</span>
                        </Text>
                        <Text> {team.fields.briefDescription} </Text>
                        <Divider />
                        <Flex fontStyle={'italic'} gap={'10px'} justify={'center'}>
                            <Link href={'#'} alt=""> Instagram </Link>
                            <span>&#8226;</span>
                            <Link href={'#'} alt=""> Twitter </Link>
                        </Flex>
                    </Flex>


                </Box>
            ))}
        </>
    )
}
