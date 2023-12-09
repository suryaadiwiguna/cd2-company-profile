'use client'
import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function C_Slider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <h1>One</h1>
                </div>
                <div>
                    <h1>Two</h1>
                </div>
                <div>
                    <h1>Three</h1>
                </div>
            </Slider>
        </div>
    )
}
