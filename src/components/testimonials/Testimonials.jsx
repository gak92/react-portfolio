import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  const data = [
    {
      avatar: AVATAR1,
      name: "Ernest Jones",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam officia soluta ducimus ea voluptas minus cum, consectetur nemo odio, harum a praesentium! Ullam labore commodi necessitatibus, quam voluptates ipsum!"
    },
    {
      avatar: AVATAR1,
      name: "Ernest Jones",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam officia soluta ducimus ea voluptas minus cum, consectetur nemo odio, harum a praesentium! Ullam labore commodi necessitatibus, quam voluptates ipsum!"
    },
    {
      avatar: AVATAR1,
      name: "Ernest Jones",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam officia soluta ducimus ea voluptas minus cum, consectetur nemo odio, harum a praesentium! Ullam labore commodi necessitatibus, quam voluptates ipsum!"
    }
  ];

  return (
    <section id="testimonials">
      <h5>Review from peers</h5>
      <h2>Testimonials</h2>

      <Carousel responsive={responsive} className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            )
          })
        }     
      </Carousel>
    </section>
  )
};

export default Testimonials;
