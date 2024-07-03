import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const testimonials = [
    {
        id: 1,
        name: 'Anna Deynah',
        role: 'UX Designer',
        image: 'https://www.zoho.com/inventory/case-study/images/jason-party-mojo.jpeg',
        quote: 'Listing our property with Real Estate was the best decision we made. Their market knowledge and marketing strategies ensured our property sold quickly and at a great price.',
        stars: 5,
    },
    {
        id: 2,
        name: 'Deynah',
        role: 'UX Designer',
        image: 'https://www.ultimatebeaver.com/wp-content/uploads/bb-plugin/cache/photo-gallery-img-02-circle.jpg',
        quote: 'Exceptional service! Real Estate provided us with invaluable advice and support throughout our investment journey. Their insights into the market helped us make informed decisions.',
        stars: 4,
    },
    {
        id: 3,
        name: 'Anna Deynah',
        role: 'UX Designer',
        image: 'https://www.zoho.com/inventory/case-study/images/jason-party-mojo.jpeg',
        quote: 'Listing our property with Real Estate was the best decision we made. Their market knowledge and marketing strategies ensured our property sold quickly and at a great price.',
        stars: 4.5,
    },
    {
        id: 4,
        name: 'Anna Deynah',
        role: 'UX Designer',
        image: 'https://www.zoho.com/inventory/case-study/images/satyan-thukral.jpeg',
        quote: 'Exceptional service! Real Estate provided us with invaluable advice and support throughout our investment journey. Their insights into the market helped us make informed decisions.',
        stars: 5,
    },

    // Add more testimonials as needed
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="testimonial-slider-container mt-3">
          <div className="testimonial-header">
    <h3>What People Say About Us</h3>
    <p>Discover what our clients have to say about their experiences with Real Estate. From seamless transactions to exceptional service, we strive to exceed expectations in every real estate journey. Read on to learn why our clients trust us.</p>
</div>
            <div className="testimonial-slider">
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id}>
                            <img src={testimonial.image} alt={testimonial.name} />
                            <h3 style={{color:"#1e4f5c"}}>{testimonial.name}</h3>
                            <p style={{color:"#fc9700"}}>{testimonial.role}</p>
                            <p>{testimonial.quote}</p>
                            <div className="stars" style={{color:"#fc9700"}}>
                                {[...Array(Math.floor(testimonial.stars))].map((_, index) => (
                                    <span key={index} className="star">&#9733;</span>
                                ))}
                                {testimonial.stars % 1 !== 0 && (
                                    <span className="star">&#9734;</span>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
