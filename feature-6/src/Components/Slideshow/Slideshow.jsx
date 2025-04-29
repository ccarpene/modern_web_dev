import React from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import "./Slideshow.css"
import 'react-alice-carousel/lib/alice-carousel.css';

const Slideshow = () => {

    const handleDragStart = (e) => e.preventDefault();

    // List of images to display
    const items = [
        <img src="../../../slideshow_images/aloft.jpeg" className="carousel-img" role="presentation" />,
        <img src="../../../slideshow_images/cafe_navarre.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/evil_czech.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/cat_lady.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/cloud_walking.jpeg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/crooked_ewe.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/dinosaur.jpeg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/early_bird.jpeg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/east_race.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/bru_burger.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/howard_park.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/lauber.jpeg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/morris_inn.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/peggs.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/roselily.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/south_bend.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/st_marys.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/yellow_cat.jpeg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="../../../slideshow_images/zoo.jpg" className="carousel-img" onDragStart={handleDragStart} role="presentation" />,
    ];

    // Utilizing the AliceCarousel library for our functionality
    return (
        <div className="carousel-container">
            <AliceCarousel 
            items={items}
            autoPlay 
            infinite         
            animationDuration={3000}    
            responsive={{
                0: { items: 1 },
                600: { items: 2 },
                1024: { items: 3 }
            }}
            disableButtonsControls 
            disableDotsControls />
        </div>
    );
};

export default Slideshow;