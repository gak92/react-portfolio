import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Coding Expo',
      github: 'https://github.com/gak92/Module01_Capstone_Project',
      demo: 'https://gak92.github.io/Module01_Capstone_Project/'
    },
    {
      id: 2,
      image: IMG1,
      title: 'Space Travellers Hub',
      github: 'https://github.com/gak92/space-travel-hub',
      demo: 'https://hub-space-travelers.netlify.app/'
    },
    {
      id: 3,
      image: IMG1,
      title: 'Metrics webapp',
      github: 'https://github.com/gak92/metrics-wepapp/',
      demo: 'https://stock-metrics-webapp.netlify.app/'
    },
    {
      id: 4,
      image: IMG1,
      title: 'Home Budget App',
      github: 'https://github.com/gak92/ror-home-budget-app',
      demo: '#'
    },
    {
      id: 5,
      image: IMG1,
      title: 'Book Dev App',
      github: 'https://github.com/gak92/book_devs_app',
      demo: '#'
    },
    {
      id: 6,
      image: IMG1,
      title: 'Imagery',
      github: 'https://github.com/gak92/Capstone-Module-2',
      demo: 'https://berkay-akbas.github.io/Capstone-Module-2/'
    },
  
  ];
  
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">GitHub</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
};

export default Portfolio;
