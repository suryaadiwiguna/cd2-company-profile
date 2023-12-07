import { Box } from "@chakra-ui/react"

export default function C_EmbedVideo({ videoURL }) {
    return (
        <Box bg={'yellow'} width={'100%'} minW={{ base: 'auto', md: '420px', lg: '561px' }} maxW={{ md: '480px', md: '100%' }}>
            <iframe width="100%" height="100%" src={videoURL} title="Our journey" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Box >
    )
}
