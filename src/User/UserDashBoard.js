import React from 'react';
import banner from '../images/heritage4.jpg';

import Placecard from '../Initial/Placecard';
import heritagePlaces from '../Essentials/HeritagePlaces';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UserDashBoard = () => {

    /*const recentlyvisited = [
        {
            name: "Brihadeeswarar Temple",
            location: "Thanjavur",
            district: "Thanjavur",
            type: "Temple",
            imageUrl: brihadeeswarar,
            description: "A UNESCO World Heritage Site built by Raja Raja Chola I, famous for its massive vimana and intricate stone carvings."
        },
        {
            name: "Meenakshi Amman Temple",
            location: "Madurai",
            district: "Madurai",
            type: "Temple",
            imageUrl: meenakshi,
            description: "An iconic temple dedicated to Goddess Meenakshi, known for its towering gopurams and vibrant sculptures."
        },
        {
            name: "Thiruvalluvar Statue",
            location: "Kanyakumari",
            district: "Kanyakumari",
            type: "Memorial",
            imageUrl: valluvar,
            description: "A 133-feet tall statue of the Tamil poet-saint, symbolizing his contribution to Tamil literature."
        },
        {
            name: "Brihadeeswarar Temple",
            location: "Thanjavur",
            district: "Thanjavur",
            type: "Temple",
            imageUrl: brihadeeswarar,
            description: "A UNESCO World Heritage Site built by Raja Raja Chola I, famous for its massive vimana and intricate stone carvings."
        }
    ]*/

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        };

    return (
        <div className="user-dashboard">
            <div className="hero-section">
                <img src={banner} alt="site-banner" />
                <p className="slogan">Uncover the history behind every stone.</p>
                <div className="site-info">
                    <p>Browse 100+ heritage places, plan visits, and get AI-powered recommendations.</p>
                    <p>Know the history of heritage places in and around you</p>
                    <p>Save your favorite places, see nearby attractions, and never miss a festival!</p>
                </div>
            </div>

            <h3>Recently Visited</h3>
            <p className="swipe-hint">← Swipe to see more →</p>
            <div className="user-dashboard-main">
                <Slider {...settings}>
                    {heritagePlaces.map((place, index) => (
                        <Placecard key={index} place={place} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default UserDashBoard;