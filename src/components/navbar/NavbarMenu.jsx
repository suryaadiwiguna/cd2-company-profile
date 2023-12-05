'use client'

import {
    Box, UnorderedList, ListItem, Flex, Show, Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, Button
} from "@chakra-ui/react"
import Link from "next/link"
import { HamburgerIcon } from "@chakra-ui/icons"
import React, { useLayoutEffect } from 'react'
import { usePathname } from "next/navigation"

export default function NavbarMenu() {

    const pathName = usePathname()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    useLayoutEffect(() => {
        onClose()
    }, [pathName])

    return (
        <Box >
            <Show above="sm">
                <UnorderedList listStyleType={'none'} textAlign={'center'} spacing={3} textIndent={-10}>
                    <Flex align={'center'} gap={7} >
                        <ListItem >
                            <Link href={"/products-services"}> Products & Services</Link>
                        </ListItem>
                        <ListItem>
                            <Link href={"/about-us"}> About Us</Link>
                        </ListItem>
                        <ListItem>
                            <Link href={"/teams"}> Teams</Link>
                        </ListItem>
                    </Flex>
                </UnorderedList>
            </Show>

            <Show below="sm">
                <HamburgerIcon ref={btnRef} boxSize={7} onClick={onOpen}>
                    Open
                </HamburgerIcon>
            </Show>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'xs'}
            >
                <DrawerOverlay />
                <DrawerContent w={'100px'}>
                    <DrawerCloseButton m={'10px'} />
                    <DrawerBody my={'50%'}>
                        <Box >
                            <UnorderedList listStyleType={'none'} textAlign={'center'} spacing={3} textIndent={-10}>
                                <ListItem >
                                    <Link href={"/products-services"}> Products & Services</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href={"/about-us"}> About Us</Link>
                                </ListItem>
                                <ListItem>
                                    <Link href={"/teams"}> Teams</Link>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box >
    )
}
