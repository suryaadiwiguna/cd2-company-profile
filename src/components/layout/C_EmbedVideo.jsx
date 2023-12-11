"use client"

import { Box } from "@chakra-ui/react"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export default function C_EmbedVideo({ videoURL }) {
    return (
        <Box width={'100%'} minW={{ base: 'auto', md: '420px', lg: '561px' }} maxW={{ md: '480px', md: '100%' }} mb={{ base: '1rem', md: '0' }}>
            <LiteYouTubeEmbed
                id={videoURL}
                title="Travellian Demo"
            />
        </Box >
    )
}
