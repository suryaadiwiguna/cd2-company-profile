'use client'

import { Box, Image, Flex, Text, Heading, Divider } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function C_CardTestimonials({ data }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <>
            <Box py={'1rem'}>
                <Slider {...settings}>
                    {data.map((data, index) => (
                        <Box key={index} borderRadius={'15px'} bgColor={'white'} borderColor={'gray.100'} borderWidth={'1px'} cursor={'grab'}>
                            <Flex p={'1em'} h={'240px'} align={'center'} justify={'center'}>
                                <Image alt="" src={data.profileImg} borderRadius={'50%'} objectFit={'cover'} aspectRatio={1 / 1} maxH={'180px'} />
                            </Flex>
                            <Flex align={'center'} justify={'center'} direction={'column'} textAlign={'center'} p={'1em'}>
                                <Heading fontSize={'large'} textTransform={'capitalize'} color={'#FF7757'}>{data.name}</Heading>
                                <Text fontStyle={'italic'}>{` ${data.origin.city || data.origin.country ? 'From' : null}  ${data.origin.city ? data.origin.city + "," : null} ${data.origin.country ? data.origin.country : null}`}</Text>
                                <Text my={'1em'} fontWeight={'600'} >{`"${data.quote}"`}</Text>
                                <Divider mb={'1em'} />
                                <Text fontStyle={'italic'} textTransform={'capitalize'}>{data.order ? data.order : null}</Text>
                            </Flex>
                        </Box>
                    ))}
                </Slider>
            </Box>

        </>
    )
}
