import { Box, AspectRatio } from "@chakra-ui/react"

export default function EmbedVideo() {
    return (
        <Box borderWidth={'1px'} borderColor={'grey'}>
            <AspectRatio >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xLTCivIB4kU?si=zUSk0_vXKte-TV7W" title="Our journey" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </AspectRatio>
        </Box>
    )
}
