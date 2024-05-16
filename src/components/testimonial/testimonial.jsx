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
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
        stars: 5,
    },
    {
        id: 2,
        name: 'Deynah',
        role: 'UX Designer',
        image: 'https://www.ultimatebeaver.com/wp-content/uploads/bb-plugin/cache/photo-gallery-img-02-circle.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
        stars: 4,
    },
    {
        id: 3,
        name: 'Anna Deynah',
        role: 'UX Designer',
        image: 'https://www.zoho.com/inventory/case-study/images/jason-party-mojo.jpeg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
        stars: 4.5,
    },
    {
        id: 4,
        name: 'Anna Deynah',
        role: 'UX Designer',
        image: 'https://www.zoho.com/inventory/case-study/images/satyan-thukral.jpeg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
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
        <div className="testimonial-slider-container">
            <div className="testimonial-header">
                <h3>What people Say about us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae eum odio ex, dignissimos consequatur non, delectus atque, ea vel velit quod culpa! Facere eaque doloribus ullam iure quasi temporibus?lo</p>
            </div>
            <div className="testimonial-slider">
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id}>
                            <img src={testimonial.image} alt={testimonial.name} />
                            <h3>{testimonial.name}</h3>
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
