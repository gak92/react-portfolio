import React from 'react';
import './testimonials.css';
// import AVATAR1 from '../../assets/avatar1.jpg';
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
      avatar: "https://media.licdn.com/dms/image/C4D03AQH0AdklCP_XnQ/profile-displayphoto-shrink_800_800/0/1655866128945?e=1678924800&v=beta&t=fqDoUpqJL-nOI1SjJt-GSYbrDer4sZLhh19UmZqAIbM",
      name: "Ram Kumar Gurung",
      review: "I was the classmate and a project member while studying the MBA in Information Management. During the course of study, I found Ghazanfar Ali humble, sincere, self-driven and proficient in the subject matter. His contribution was very crucial in the success of the project. I hope for very best for his future career."
    },
    {
      avatar: "https://media.licdn.com/dms/image/D4E35AQHs36mdsRAFjA/profile-framedphoto-shrink_800_800/0/1653129389565?e=1674234000&v=beta&t=QIj_Vv2iLqsifQgz9YgReSoU9oUYwGOYt0PwJN2vVto",
      name: "Mohamed Aachour",
      review: "Ghazanfar Ali was a fantastic person to work with and is not only a multi-skilled and insightful colleague but also an inspiring strategist. Very good person. Good collaborator with very strong problem-solving skills. he has good knowledge of HTML, JavaScript, React, and Redux and he's a good communicator. I totally recommend him, he is a great person to work with."
    },
    {
      avatar: "https://media.licdn.com/dms/image/D4D35AQHwi_F2plrScA/profile-framedphoto-shrink_800_800/0/1661412940590?e=1674234000&v=beta&t=fiBSNG405V_FZdPrPIWVvN5iy2kPejeFCfZ7ZxiBPDM",
      name: "Asim Khan",
      review: "Ghazanfar Ali is the most humble and professional programmer and partner that I have had the privilege to collaborate with during our Microverse program and he has shown tremendous potential and skill as a programmer and analyst. He has deep understanding and problem solving skill that is a great asset for any programmer to have. I would recommend Ghazanfar Ali, he truly has the necessary skillset to become a valuable asset for any software company."
    },
    {
      avatar: "https://media.licdn.com/dms/image/D4D35AQHlvmbW3O_uEw/profile-framedphoto-shrink_800_800/0/1652456984019?e=1674234000&v=beta&t=tCh_KzxoVUXztMKzZE5IYFIQ5C6qcOqQXmQOgKxncN0",
      name: "Abdollah Raafat",
      review: "During the short period, we collaborated together on the same morning sessions at Microverse I find that Gazanfar is a very helpful partner especially when it comes to pairing programming tasks. He was always very focused made the session very productive and did not waste any time but don't get me wrong he is a people person and likes to chat about different things other than the session."
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
